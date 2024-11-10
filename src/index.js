import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Navigate,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

import { ProtectedRoutes, isRol } from "./utils/auth/ProtectedRoutes";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
const Register = lazy(() => import("./pages/register/Register"));
const Login = lazy(() => import("./pages/login/Login"));
const Home = lazy(() => import("./pages/home/Home"));
const SurveyCreate = lazy(() => import("./pages/survey/SurveyCreate"));
const Update = lazy(() => import("./pages/update/Update"));
const Survey = lazy(() => import("./pages/survey/Survey"));
const ProductCreate = lazy(() => import("./pages/product/ProductCreate"));
const Error = lazy(() => import("./pages/error/Error"));



// Definir las rutas utilizando createRoutesFromElements
const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<Error />} />
    <Route path="register" element={<Register  company={false}/>} />
    <Route path="register/company" element={<Register company={true} />} />
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="app" element={<Home />} />
      <Route path="survey/:id_encuesta" element={<Survey/>} />
      <Route path="survey/create" element={<SurveyCreate/>} />
      <Route path="product/create" element={<ProductCreate/>} />
    </Route>
  </>
); 

// Crear el enrutador principal
const router = createBrowserRouter(routes);

// Crear la raíz de la aplicación y renderizarla
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<LoadingScreen />}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);
