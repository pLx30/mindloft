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
import Footer from "./components/Footer";

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
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/login" element={<><Login /><Footer /></>} />
          <Route path="/register" element={<><Register /><Footer /></>} />

          {/* Geschützter Bereich mit Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /><Footer /></ProtectedRoute>} />
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

