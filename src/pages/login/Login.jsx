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
      </div>
      <Footer />
    </div>
  );
}

export default Login;
