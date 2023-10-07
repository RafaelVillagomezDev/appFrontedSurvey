import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Error from "./pages/error/error";
import "./index.css"
import "./format.css"
import store from "./store/store"
import {Provider} from "react-redux"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/encuestas",
    element: <Login/>,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
 
);