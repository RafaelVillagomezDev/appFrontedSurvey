import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { getLocalStorage } from "../storage/saveLocalStorage";




const ProtectedRoutes = ({ element, ...props }) => {

  const isToken=getLocalStorage("token")?true:false;

  return isToken ? (
    <Outlet/>
  ) : (
    <Navigate to="/" replace state={{ from: props.location }} />
  );
};




export { ProtectedRoutes};
