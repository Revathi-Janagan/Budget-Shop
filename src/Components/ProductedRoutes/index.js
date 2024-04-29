import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; 

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
