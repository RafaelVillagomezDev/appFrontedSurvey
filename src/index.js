import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import "./format.css"
import store from "./store/store"
import {Provider} from "react-redux"
import routesApp from "./routes/routes";


const router = createBrowserRouter(routesApp());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
 
);