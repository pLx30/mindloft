import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/dashboard");
    });
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form onSubmit={handleAuth} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">{isLogin ? "Login" : "Register"}</h1>
        <input
          className="w-full px-4 py-2 rounded bg-gray-800"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-gray-800"
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="bg-purple-500 hover:bg-purple-600 w-full py-2 rounded font-semibold">
          {isLogin ? "Login" : "Registrieren"}
        </button>
        <p className="text-sm text-center">
          {isLogin ? "Noch keinen Account?" : "Schon registriert?"}{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Jetzt registrieren" : "Einloggen"}
          </span>
        </p>
      </form>
    </div>
  );
}
