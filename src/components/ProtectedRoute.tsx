import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession, SessionContextProvider } from "@supabase/auth-helpers-react";
import React from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const session = useSession(); // oder dein eigener Session-Hook
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  return <>{children}</>;
}
