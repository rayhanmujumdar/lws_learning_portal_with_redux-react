import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoggedRoute({ children }) {
  const isLogged = useAuth();
  if(!isLogged){
    return <Navigate to="/" replace={true}></Navigate>
  }
  return children;
}
