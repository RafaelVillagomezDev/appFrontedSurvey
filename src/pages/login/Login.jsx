import React, { lazy, startTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../../slices/login/loginSlice";
import { useNavigate } from "react-router-dom";
import PortadaLogin from "../../../public/assets/img/Portada_login.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MySwal from "sweetalert2";
import { isRejectedWithValue } from "@reduxjs/toolkit";

const Footer = lazy(() => import("../../components/footer/Footer"));
const FormGeneric = lazy(() =>
  import("../../components/formGeneric/FormGeneric")
);
const Spinner = lazy(() => import("../../components/spinner/Spinner"));

import("../../styles/pages/_login.scss").then(() => {
  console.log("Login styles loaded");
});

function Login() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading);

  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateRegisterCompany = () => {
    navigate("/register/company");
  };

  const fields = [
    {
      name: "email",
      id: "email",
      type: "email",
      label: "email",
      required: true,
      placeholder: "Ingresa un email",
      className: "card_username",
      maxLength: 40,
      autoComplete: "email",
    },
    {
      name: "password",
      id: "password",
      type: "password",
      label: "password",
      required: true,
      placeholder: "Ingresa una password",
      className: "card_username",
      maxLength: 40,
      autoComplete: "current-password",
    },
  ];

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

  const handleSubmit = async (formData) => {
    try {
      console.log(formData);
      const data = await dispatch(authUser(formData));

      if (isRejectedWithValue(data)) {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: data.payload || "An unknown error occurred!", // Muestra el mensaje de error
          allowOutsideClick: true, // Permite hacer clic fuera para cerrar
          allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
          allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
        });
      } else {
        startTransition(() => {
          navigate("/app");
        });
      }
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
        <div id="main_component-yellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="284"
            viewBox="0 0 110 284"
            fill="none"
          >
            <path
              d="M-38 0C-119.746 0 -186 63.3556 -186 141.525C-186 219.694 -119.746 283.05 -38 283.05C43.7458 283.05 110 219.694 110 141.525C110 63.3556 43.7458 0 -38 0Z"
              fill="#CCEFFB"
            />
          </svg>
        </div>
        <div id="main_container">
          <div id="main_container-portada">
            <LazyLoadImage
              src={PortadaLogin}
              id="img_portada"
              alt="Portada"
              height={80}
              visibleByDefault={true}
            />
          </div>
          <div id="main_container_form">
            <h1>ClickSurvey</h1>
            <FormGeneric
              fields={fields}
              regexPatterns={regexPatterns}
              onSubmit={handleSubmit}
              buttonText="Registrar"
              id="form_login"
              classDiv="form_login-group"
              buttonClass="form_login-submit"
              loading={loading}
              loadingComponent={<Spinner />}
            />
            <div id="main_container-register">
              <span>o</span>
              <p className="main_box-register">
                <span>
                  ¿No tienes una cuenta? Registrate como
                  <a onClick={navigateRegister}> Usuario</a> o{" "}
                  <a onClick={navigateRegisterCompany}>Empresa</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div id="main_component-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="125"
            viewBox="0 0 78 125"
            fill="none"
          >
            <path
              d="M-17.8861 10.8465C-25.216 4.30366 -34.6976 0.687492 -44.5228 0.687492L-535.477 0.687475C-545.302 0.687474 -554.784 4.30365 -562.114 10.8464L-650.879 90.0795C-664.583 102.312 -655.93 125 -637.56 125L57.5603 125C75.9301 125 84.583 102.312 70.8786 90.0795L-17.8861 10.8465Z"
              fill="#C8F9B4"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
