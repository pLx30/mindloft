// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./lib/supabaseClient";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import Habits from "./modules/habits/Habits";
import Goals from "./modules/goals/Goals";
import Finance from "./modules/finance/Finance";
import Health from "./modules/health/Health";
import Reflection from "./modules/reflection/Reflection";

export default function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <BrowserRouter>
        <Routes>
          {/* Öffentliche Routen */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Geschützter Bereich mit Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="habits" element={<ProtectedRoute><Habits /></ProtectedRoute>} />
            <Route path="goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
            <Route path="finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />
            <Route path="health" element={<ProtectedRoute><Health /></ProtectedRoute>} />
            <Route path="reflection" element={<ProtectedRoute><Reflection /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  );
}

