import React, { lazy, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUser, login } from "../../slices/login/loginSlice";
import { useNavigate } from "react-router-dom";
import PortadaLogin from "../../../public/assets/img/Portada_login.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MySwal from "sweetalert2";
import { isRejectedWithValue } from "@reduxjs/toolkit";

const Footer = lazy(() => import("../../components/footer/Footer"));

const NavBarLogin = lazy(() =>
  import("../../components/navBarLogin/NavBarLogin")
);
// Carga dinámica del CSS
import("../../styles/_index.scss").then(() => {
  console.log("Reset styles loaded");
});

import("../../styles/pages/_login.scss").then(() => {
  console.log("Home styles loaded");
});

function Login() {
  const dispatch = useDispatch();
  const [email, setImail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const loginUser = async (event) => {
    event.preventDefault();
    const objLogin = { email: email, password: password };

    try {
      const result = await dispatch(authUser(objLogin));

      // Aquí verificamos si la acción fue rechazada con un valor usando isRejectedWithValue
      if (isRejectedWithValue(result)) {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: result.payload || "An unknown error occurred!", // Muestra el mensaje de error
          allowOutsideClick: true, // Permite hacer clic fuera para cerrar
          allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
          allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
        });
      }
      navigate("/app")
    } catch (error) {
      // Cualquier otro error que no sea manejado por rejectWithValue
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "An unexpected error occurred!",
        allowOutsideClick: true, // Permite hacer clic fuera para cerrar
        allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
        allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
      });
    }
  };

  return (
    <div id="wrapper">
      <div id="main">
        <div id="main_container">
          <div id="main_container-portada">
            <LazyLoadImage
              src={PortadaLogin}
              id="img_portada"
              alt="Portada"
              height={80}
            />
          </div>
          <div id="main_container_form">
            <h1>ClickSurvey</h1>
            <form id="form">
              <div className="form_div">
                <div className="form_div-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={50}
                    name="email"
                    autoComplete="username"
                    onChange={(e) => setImail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form_div-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    maxLength={50}
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  className="form_btn-submit"
                  type="submit"
                  onClick={loginUser}
                >
                  Login
                </button>
              </div>
            </form>
            <div id="main_container-register">
              <span>o</span>
              <p className="main_box-register">
                <span>
                  ¿No tienes una cuenta?{" "}
                  <a onClick={navigateRegister}>Registrate</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
