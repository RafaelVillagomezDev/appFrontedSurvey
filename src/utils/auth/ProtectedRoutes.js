import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { getLocalStorage } from "../storage/saveLocalStorage";
import { useSelector } from "react-redux";




const ProtectedRoutes = ({ element, ...props }) => {

  const {isAuthenticated}=useSelector((state)=>state.user)

  return  isAuthenticated ? (
    <Outlet/>
  ) : (
    <Navigate to="/" replace state={{ from: props.location }} />
  );
};




export { ProtectedRoutes};
