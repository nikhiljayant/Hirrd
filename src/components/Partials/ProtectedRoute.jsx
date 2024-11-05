import React from "react";
// Dependency
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};
