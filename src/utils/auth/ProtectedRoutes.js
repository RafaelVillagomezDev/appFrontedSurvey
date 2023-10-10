import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import jwt_decode from "jwt-decode";




const ProtectedRoutes = ({ canPass, redirectPath = "/login" }) => {
  if (!canPass) {
    return <Navigate to={redirectPath} replace />;

  }

  return <Outlet />;

};

const ProtectedRoutesAdmin = ({ adminPass, redirectPath = "/login" }) => {
  if (adminPass=="user" || adminPass==false) {
    return <Navigate to={redirectPath} replace />;

  }

  return <Outlet />;


};

const isRol = (tokenCrypt,isToken) => {
  
  if(!isToken){
    return false
  }else{
    const token = jwt_decode(tokenCrypt);
    if(token.rol=="admin"){
      return "admin"
    }else{
      return "user"
    }

  }

};

export { ProtectedRoutesAdmin, isRol, ProtectedRoutes };
