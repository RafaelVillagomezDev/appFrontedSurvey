import React, { lazy } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MySwal from "sweetalert2";
import { registerUser } from "../../slices/login/loginSlice";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PortadaRegister from "../../../public/assets/img/Portada_register.webp";
const Footer = lazy(() => import("../../components/footer/Footer"));
const FormGeneric = lazy(() =>
  import("../../components/formGeneric/FormGeneric")
);
import("styles/pages/_register.scss").then(() => {
  console.log("Register styles loaded");
});

const fields = [
  {
    name: "name_user",
    id: "name_user",
    type: "text",
    label: "name",
    required: true,
    placeholder: "Ingresa una nombre",
    className: "form_input",
    maxLength: 20,
  },

  {
    name: "surname",
    id: "surname",
    type: "text",
    label: "surname",
    required: true,
    placeholder: "Ingresa un nombre",
    className: "form_input",
    maxLength: 20,
  },
  {
    name: "dni",
    id: "dni",
    type: "dni",
    label: "dni",
    required: true,
    placeholder: "Ingresa un DNI o NIE",
    className: "form_input",
    maxLength: 9,
  },
  {
    name: "birthday",
    id: "birthday",
    type: "date",
    label: "birthday",
    required: true,
    placeholder: "Ingresa  tu fecha de nacimiento",
    className: "form_input",
    maxLength: 20,
  },
  {
    name: "email",
    id: "email",
    type: "email",
    label: "email",
    required: true,
    placeholder: "Ingresa un email",
    className: "form_input",
    maxLength: 40,
  },
  {
    name: "password",
    id: "password",
    type: "password",
    label: "password",
    required: true,
    placeholder: "Ingresa una password",
    className: "form_input",
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
    field: "name_user",
    regex: /^[A-Za-z0-9]{4,}$/,
    msg: "El nombre debe tener letras mayusculas o minusculas y al menos 4 caracteres, no se permiten caracteres especiales.",
  },
  {
    field: "surname",
    regex: /^[A-Za-z0-9]{4,}$/,
    msg: "El apellido debe tener letras mayusculas o minusculas y al menos 4 caracteres , no se permiten caracteres especiales.",
  },
  {
    field: "dni",
    regex: /^\d{8}[A-HJ-NP-TV-Z]$/,
    regex_plus: /^[XYZ]\d{7}[A-HJ-NP-TV-Z]$/,
    msg: "El Dni o Nie es invalido",
  },
  {
    field: "password",
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*?#$%^&+=!]).{8,20}$/,
    msg: "La contraseña debe tener entre 8 y 20 caracteres, e incluir al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial.",
  },
  {
    field: "birthday",
    regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    msg: "Fecha de nacimiento invalida",
  },
];

function Register({ company }) {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (formData) => {
    try {
      const data = await dispath(registerUser(formData));
      if (isRejectedWithValue(data)) {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: data.payload.message,
          allowOutsideClick: true, // Permite hacer clic fuera para cerrar
          allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
          allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
        });
      } else {
        MySwal.fire({
          icon: "success",
          title: "Se ha creado con exito su cuenta , vuelva a iniciar sesion",
          text: data.payload.message,
          allowOutsideClick: true, // Permite hacer clic fuera para cerrar
          allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
          allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: error,
        allowOutsideClick: true, // Permite hacer clic fuera para cerrar
        allowEscapeKey: true, // Permite usar la tecla 'Escape' para cerrar
        allowEnterKey: true, // Permite cerrar con la tecla 'Enter'
      });
    }
  };

  return (
    <>
      <div id="container_main">
        <div id="container_main-flex">
          <h1>ClickSurvey</h1>
          <div className="box_text">
            <span>Registrate para realizar y gestionar tus encuestas</span>
            <button className="btn_login" type="button" onClick={navigateLogin}>
              Login
            </button>
          </div>
          <div className="box_option-choice">
            <div> </div>
            <span> O </span>
            <div> </div>
          </div>
          <div className="container_main-form">
            <FormGeneric
              fields={fields}
              regexPatterns={regexPatterns}
              onSubmit={handleSubmit}
              buttonText="Registrar usuario"
              id="form_register"
              classDiv="form_div-group"
              buttonClass="form_btn-submit"
            />
            <LazyLoadImage
              id="img_register"
              alt="Portada"
              height={500}
              src={PortadaRegister}
              visibleByDefault={true}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
