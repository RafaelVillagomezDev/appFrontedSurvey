
import React, { lazy } from "react";
import { FcSurvey } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";



export const itemLinks = [
  {
    name: "Gestionar cuenta",
    url: "/app",
    component: <CgProfile />,
    subItems: [
      { name: "Mi perfil", url: "/profile", component: "" },
      { name: "Subitem 1.2", url: "/subitem-1-2", component: "" },
      { name: "Subitem 1.3", url: "/subitem-1-3", component: "" },
    ],
  },
  {
    name: "Encuestas",
    url: "/app",
    component: <FcSurvey />,
    subItems: [
    
      { name: "Encuestas", url: "/app", component: "" },
      { name: "Crear encuesta", url: "/survey/create", component: "" },
      { name: "Subitem 1.3", url: "/subitem-1-3", component: "" },
    ],
  },
  {
    name: "Productos",
    url: "/app",
    component: <AiOutlineProduct />,
    subItems: [
      { name: "Crear productos", url: "/product/create", component: "" },
      { name: "Subitem 2.2", url: "/subitem-2-2", component: "" },
    ],
  },
];
