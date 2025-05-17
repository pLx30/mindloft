import { Link } from "react-router-dom";
import { BookCheck, Heart, DollarSign, Target, PenTool } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/";
};

const modules = [
  { name: "Habits", path: "/habits", icon: BookCheck, color: "from-indigo-500 to-purple-500" },
  { name: "Health", path: "/health", icon: Heart, color: "from-emerald-500 to-teal-400" },
  { name: "Finance", path: "/finance", icon: DollarSign, color: "from-yellow-400 to-orange-500" },
  { name: "Goals", path: "/goals", icon: Target, color: "from-pink-500 to-fuchsia-600" },
  { name: "Reflection", path: "/reflection", icon: PenTool, color: "from-cyan-400 to-blue-500" },
];

<button onClick={handleLogout} className="text-sm underline">
  Logout
</button>

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Welcome back to <span className="text-cyan-400">Mindloft</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {modules.map(({ name, path, icon: Icon, color }) => (
          <Link
            key={name}
            to={path}
            className={`rounded-2xl bg-gradient-to-br ${color} p-6 transition transform hover:scale-[1.03] shadow-md hover:shadow-lg`}
          >
            <div className="flex items-center gap-4">
              <Icon className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm opacity-80">Start your journey</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
