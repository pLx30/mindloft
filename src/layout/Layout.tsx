import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6 hidden sm:block">
        <h2 className="text-2xl font-bold text-purple-400 mb-8">Mindloft</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link>
          <Link to="/habits" className="hover:text-purple-400">Habits</Link>
          <Link to="/goals" className="hover:text-purple-400">Goals</Link>
          <Link to="/health" className="hover:text-purple-400">Health</Link>
          <Link to="/finance" className="hover:text-purple-400">Finance</Link>
          <Link to="/reflection" className="hover:text-purple-400">Reflection</Link>

          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 bg-black text-white">
        <Outlet />
      </main>
    </div>
  );
}
