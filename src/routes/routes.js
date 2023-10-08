import { Navigate } from "react-router-dom";
import React from "react";
import Login from "../pages/login/Login";
import { getLocalStorage } from "../utils/storage/saveLocalStorage";
import Home from "../pages/home/Home";
import Error from "../pages/error/error";

const token = getLocalStorage("token") ? true : false;

const routesApp = () => {
  return [
    {
      path: "/app",
      element: token ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/",
      element: !token ? <Login /> : <Navigate to="/app" />,
      children: [
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path:"/",
          element:<Navigate to="/login"/>    
        },
        
    
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

export default routesApp;
