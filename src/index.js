import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./format.css";
import store from "./store/store";
import { Provider } from "react-redux";
import routesApp from "./routes/routes";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { ProtectedRoutes } from "./utils/auth/ProtectedRoutes";
import { getLocalStorage } from "./utils/storage/saveLocalStorage";
import CreateSurvey from "./pages/create/CreateSurvey";


const token = getLocalStorage("token") ? true : false;


const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path="/" element={<Login/>} />
    <Route path="login" element={<Login />} />
    <Route  element={<ProtectedRoutes canPass={token}/>}>
      <Route path="/app" element={<Home />} />
      <Route path="/app/create" element={<CreateSurvey/>} />
    </Route>
  </>
   
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
