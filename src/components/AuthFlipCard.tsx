import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function AuthFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    navigate("/dashboard");
  };

  const handleRegister = async () => {
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return setError(error.message);
    alert("Registration successful! Please check your email to confirm.");
    setIsFlipped(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[350px] h-[420px] perspective">
        <div
          className={`transition-transform duration-700 relative w-full h-full transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front: Login */}
          <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <input
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-sm mt-4 text-center">
              Don't have an account? <button className="text-purple-500 hover:underline" onClick={() => setIsFlipped(true)}>Register</button>
            </p>
          </div>

          {/* Back: Register */}
          <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl p-6 text-white transform rotate-y-180">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <input
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="text-sm mt-4 text-center">
              Already have an account? <button className="text-blue-400 hover:underline" onClick={() => setIsFlipped(false)}>Login</button>
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}
      </style>
    </div>
  );
}
