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
import { isRol } from "./utils/auth/ProtectedRoutes";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CreateSurvey from "./pages/create/CreateSurvey";
import Update from "./pages/update/Update";

// Verificar si hay un token en el almacenamiento local
const isToken = getLocalStorage("token") ? true : false;

// Verificar el rol del usuario basado en el token
const authUser = isRol(getLocalStorage("token"), isToken);

// Componente para proteger rutas
const ProtectedRoutes = ({ element }) => {
  const location=useLocation()
  return isToken ? (
    element
  ) : (
    <Navigate to="/" replace  state={{ from: location }}  />
  );
};

// Definir las rutas utilizando createRoutesFromElements
const routes =createRoutesFromElements(
   <>
    <Route path="/" element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="/">
      <Route path="app" element={<ProtectedRoutes element={<Home />} />} />
      <Route path="create" element={<ProtectedRoutes element={<CreateSurvey />} />} />
      <Route path="update" element={<ProtectedRoutes element={<Update />} />} />
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
