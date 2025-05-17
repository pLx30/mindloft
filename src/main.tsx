import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Habits from "./modules/habits/Habits";
import Goals from "./modules/goals/Goals";
import Health from "./modules/health/Health";
import Finance from "./modules/finance/Finance";
import Reflection from "./modules/reflection/Reflection";
import Auth from "./pages/Auth";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./lib/supabaseClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Auth />} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="habits" element={<ProtectedRoute><Habits /></ProtectedRoute>} />
            <Route path="health" element={<ProtectedRoute><Health /></ProtectedRoute>} />
            <Route path="finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />
            <Route path="goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
            <Route path="reflection" element={<ProtectedRoute><Reflection /></ProtectedRoute>} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  </StrictMode>
);
