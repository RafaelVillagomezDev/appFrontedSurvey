import React, { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';
import MySwal from "sweetalert2";
import { registerUser } from "../../services/auth/registerUser";

function FormRegister() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    name_user: "",
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
      field: "name_user",
      regex: /^[A-Za-z0-9]{4,}$/
      ,
      msg: "El nombre debe tener letras mayusculas o minusculas y al menos 4 caracteres, no se permiten caracteres especiales.",
    },
    {
      field: "surname",
      regex: /^[A-Za-z0-9]{4,}$/,
      msg: "El apellido debe tener letras mayusculas o minusculas y al menos 4 caracteres , no se permiten caracteres especiales.",
    },
    {
      field: "password",
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*?#$%^&+=!]).{8,20}$/,
      msg: "La contraseña debe tener entre 8 y 20 caracteres, e incluir al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial.",
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


  const submitRegister=async (event) => {
    event.preventDefault();

    try {
     
      const response = await registerUser(formData)
      
      MySwal.fire({
        icon: "success",
        title: "Gracias!",
        text: response.messague,
      })
      
      navigate("/app");

     
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: error,
      })
      console.error("Error:", error);
    }
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
              <label htmlFor="name_user">Nombre</label>
              <input
                id="name_user"
                type="text"
                maxLength={50}
                name="name_user"
                autoComplete="name_user"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
               { errors.name_user && <p>{errors.name_user}</p>}
            </div>
            <div className="form_div-group">
              <label htmlFor="surname">Apellido</label>
              <input
                id="surname"
                type="text"
                maxLength={50}
                name="surname"
                autoComplete="surname"
                placeholder="Apellido"
                value={formData.surname}
                onChange={handleChange}
                required
              />
                { errors.surname && <p>{errors.surname}</p>}
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
                  { errors.email && <p>{errors.email}</p>}
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
               { errors.password && <p>{errors.password}</p>}
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
            <button className="form_btn-submit" type="submit" value={"registrar"} onClick={submitRegister}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegister;
