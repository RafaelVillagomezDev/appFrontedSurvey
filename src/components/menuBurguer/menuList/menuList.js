import { MdOutlineExitToApp } from "react-icons/md";
import React from "react";
import { FcSurvey } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const itemLinks = [
  {
    name: "Gestionar cuenta",
    url: "/app",
    component: <CgProfile />,
    subItems: [
      { name: "Subitem 1.1", url: "/subitem-1-1", component: "" },
      { name: "Subitem 1.2", url: "/subitem-1-2", component: "" },
      { name: "Subitem 1.3", url: "/subitem-1-3", component: "" },
    ],
  },
  {
    name: "Encuestas",
    url: "/app",
    component: <FcSurvey />,
    subItems: [
      { name: "Subitem 1.1", url: "/subitem-1-1", component: "" },
      { name: "Subitem 1.2", url: "/subitem-1-2", component: "" },
      { name: "Subitem 1.3", url: "/subitem-1-3", component: "" },
    ],
  },
  {
    name: "Productos",
    url: "/item-2",
    component: <AiOutlineProduct />,
    subItems: [
      { name: "Subitem 2.1", url: "/subitem-2-1", component: "" },
      { name: "Subitem 2.2", url: "/subitem-2-2", component: "" },
    ],
  },
];
