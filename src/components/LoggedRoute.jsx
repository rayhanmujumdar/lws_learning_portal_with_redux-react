import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {useCheckRole} from "../hooks/useCheckRole"

export default function LoggedRoute({ children }) {
  const isLogged = useAuth();
  const location = useLocation()
  if(!isLogged){
    return <Navigate to="/" replace state={{from: location}}></Navigate>
  }
  return children;
}
