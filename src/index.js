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
import "./format.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { getLocalStorage } from "./utils/storage/saveLocalStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoutes, isRol } from "./utils/auth/ProtectedRoutes";
const Register=lazy(()=>import("./pages/register/Register"))
const Login =lazy(()=>import("./pages/login/Login")) ;
const Home  = lazy (()=>import("./pages/home/Home"));
const CreateSurvey = lazy(()=>import("./pages/create/CreateSurvey"));
const Update =lazy(()=>import("./pages/update/Update"));
const  Error = lazy(()=>import("./pages/error/Error"));



// Definir las rutas utilizando createRoutesFromElements
const routes =createRoutesFromElements(
   <>
    <Route path="/" element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<Error/>} />
    <Route path="register" element={<Register/>} />
    <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="app" element={<Home/>}/>
      <Route path="create" element={<CreateSurvey />} />
      <Route path="update" element={<Update />} />
    </Route>
   </>
);

// Crear el enrutador principal
const router = createBrowserRouter(routes);

// Crear la raíz de la aplicación y renderizarla
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ToastContainer autoClose={2000} />
    <React.StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  </Provider>
);
