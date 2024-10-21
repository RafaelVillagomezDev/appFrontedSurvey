import React, { lazy, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUser, login } from "../../slices/login/loginSlice";
import { useNavigate } from "react-router-dom";
import PortadaLogin from "../../../public/assets/img/Portada_login.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MySwal from "sweetalert2";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import DOMPurify from "dompurify";

const Footer = lazy(() => import("../../components/footer/Footer"));


// Carga dinámica del CSS
import("styles/_index.scss").then(() => {
  console.log("Reset styles loaded");
});

import("../../styles/pages/_login.scss").then(() => {
  console.log("Login styles loaded");
});

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateRegisterCompany = () => {
    navigate("/register/company");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const regexPatterns = [
    {
      field: "email",
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Formato estándar de correo electrónico
      msg: "El formato del correo electrónico es inválido.",
    },
    {
      field: "password",
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*?#$%^&+=!]).{8,20}$/,
      msg: "La contraseña es inválida.",
    },
  ];

  const validateField = (name, value) => {
    const pattern = regexPatterns.find((rule) => rule.field === name);

    if (pattern && value.length > 0) {
      if (pattern.regex_plus) {
        return pattern.regex.test(value) || pattern.regex_plus.test(value)
          ? ""
          : pattern.msg;
      } else {
        return pattern.regex.test(value) ? "" : pattern.msg;
      }
    }
    return "";
  };

  // Función para manejar cambios en los campos del formulario
  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Validar el campo actual
    const errorMsg = validateField(name, DOMPurify.sanitize(value));

    // Actualizar los errores
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const result = await dispatch(authUser(formData));

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
      navigate("/app");
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
            <form id="form_login">
              <div className="form_login">
                <div className="form_login-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={50}
                    name="email"
                    autoComplete="username"
                    defaultValue={formData.email}
                    onBlur={handleBlur}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="error_container">
                  {errors.email && <p className="error_text">{errors.email}</p>}
                </div>

                <div className="form_login-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    maxLength={50}
                    name="password"
                    autoComplete="current-password"
                    defaultValue={formData.password}
                    onBlur={handleBlur}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="error_container">
                  {errors.password && (
                    <p className="error_text">{errors.password}</p>
                  )}
                </div>

                <button
                  className="form_login-submit"
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
                  ¿No tienes una cuenta? Registrate como 
                  <a onClick={navigateRegister}> Usuario</a> o  <a onClick={navigateRegisterCompany}>Empresa</a>
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
