import React,{Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import "./format.css";
import store from "./store/store";
import { Provider } from "react-redux";
import routesApp from "./routes/routes";
const Login=lazy(()=>import("./pages/login/Login"));
const Home=lazy(()=>import("./pages/home/Home"));
const CreateSurvey=lazy(()=>import("./pages/create/CreateSurvey"));
import {
  isRol,
  ProtectedRoutes,
  ProtectedRoutesAdmin,
} from "./utils/auth/ProtectedRoutes";
import { getLocalStorage } from "./utils/storage/saveLocalStorage";

import Update from "./pages/update/Update";


const isToken = getLocalStorage("token") ? true : false;
const authUser = isRol(getLocalStorage("token"), isToken);



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
    
      <Route element={<ProtectedRoutesAdmin adminPass={authUser} />}>
    
        <Route path="/app/create" element={<CreateSurvey />} />
      </Route>
      <Route element={<ProtectedRoutes canPass={isToken} />}>
        <Route path="/app" element={<Home />} />
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
