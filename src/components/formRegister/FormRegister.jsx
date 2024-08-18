import React, { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';


function FormRegister() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
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
      field: "name",
      regex: /^[A-Za-z0-9]*$/,
      msg: "El asunto debe tener numeros o letras , no se permiten caracteres especiales.",
    },
    {
      field: "surname",
      regex: /^[A-Za-z0-9]*$/,
      msg: "El asunto debe tener numeros o letras , no se permiten caracteres especiales.",
    },
    {
      field: "password",
      regex: /^[A-Za-z0-9]*$/,
      msg: "El asunto debe tener numeros o letras , no se permiten caracteres especiales.",
    },
  ];

  const validateField = (name, value) => {
    const pattern = regexPatterns.find((rule) => rule.field === name);

    if (pattern && value.length > 0) {
      return pattern.regex.test(value) ? "" : pattern.msg;
    }
    return "";
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
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
  return (
    <>
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
        <form id="form">
          <div className="form_div">
            <div className="form_div-group">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                type="name"
                maxLength={50}
                name="name"
                autoComplete="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_div-group">
              <label htmlFor="name">Apellido</label>
              <input
                id="surname"
                type="surname"
                maxLength={50}
                name="surname"
                autoComplete="surname"
                placeholder="Apellido"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_div-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                maxLength={50}
                name="email"
                autoComplete="username"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
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
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_input-group">
              <input
                id="privacy_policy"
                type="checkbox"
                name="privacy_policy"
                value={"accept"}
                required
              />
              <label htmlFor="privacy_policy">Politica de privacidad</label>
            </div>
            <button className="form_btn-submit" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegister;
