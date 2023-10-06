import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import Error from "./pages/error/error";
import "./index.css"
import "./format.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/encuestas",
    element: <Main/>,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);