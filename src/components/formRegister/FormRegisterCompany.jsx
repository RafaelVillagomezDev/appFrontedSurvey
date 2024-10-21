import React, { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import MySwal from "sweetalert2";
import { registerUser } from "../../services/auth/registerUser";

function FormRegisterCompany(){
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    name_user: "",
    surname: "",
    dni: "",
    email: "",
    password: "",
    birthday: "",
    nif: "",
    tipo_compania:""
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
      field: "nif",
      regex: /^\d{8}[A-HJ-NP-TV-Z]$/,
      regex_plus: /^[XYZ]\d{7}[A-HJ-NP-TV-Z]$/,
      msg: "El NIF es invalido",
    }, 
    {
      field: "tipo_compania",
      regex: /^[A-Za-z]{3,}$/,
      msg: "El tipo de compañia es invalido",
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

  const submitRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(formData);

      MySwal.fire({
        icon: "success",
        title: "Se ha creado con exito su cuenta , vuelva a iniciar sesion",
        text: response.messague,
      });
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: error,
      });
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
            </div>
            <div className="error_container">
              {errors.name_user && (
                <p className="error_text">{errors.name_user}</p>
              )}
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
            </div>
            <div className="error_container">
              {errors.surname && <p className="error_text">{errors.surname}</p>}
            </div>
            <div className="form_div-group">
              <label htmlFor="dni">Dni o Nie</label>
              <input
                id="dni"
                type="text"
                maxLength={9}
                name="dni"
                autoComplete="dni"
                placeholder="Dni o Nie"
                value={formData.dni}
                onChange={handleChange}
                required
              />
            </div>
            <div className="error_container">
              {errors.dni && <p className="error_text">{errors.dni}</p>}
            </div>
            <div className="form_div-group">
              <label htmlFor="nif">Nif</label>
              <input
                id="nif"
                type="text"
                maxLength={9}
                name="nif"
                autoComplete="nif"
                placeholder="Nif"
                value={formData.nif}
                onChange={handleChange}
                required
              />
            </div>
            <div className="error_container">
              {errors.nif && <p className="error_text">{errors.nif}</p>}
            </div>
          </div>
          <div className="form_div">
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
            <div className="error_container">
              {errors.email && <p className="error_text">{errors.email}</p>}
            </div>
            <div className="form_div-group">
              <label htmlFor="birthday">Fecha de nacimiento</label>
              <input
                id="birthday"
                type="date"
                maxLength={50}
                name="birthday"
                autoComplete="birthday"
                placeholder="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>
            <div className="error_container">
              {errors.birthday && (
                <p className="error_text">{errors.birthday}</p>
              )}
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
            <div className="error_container">
              {errors.password && (
                <p className="error_text">{errors.password}</p>
              )}
            </div>

            <div className="form_div-group">
              <label htmlFor="tipo_compania">Tipo compañia</label>
              <input
                id="tipo_compania"
                type="text"
                maxLength={9}
                name="tipo_compania"
                autoComplete="tipo_compania"
                placeholder="Tipo compañia"
                value={formData.tipo_compania}
                onChange={handleChange}
                required
              />
            </div>
            <div className="error_container">
              {errors.tipo_compania && <p className="error_text">{errors.tipo_compania}</p>}
            </div>

            <div className="form_div-input">
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
              <button
                className="form_btn-submit"
                type="submit"
                value={"registrar"}
                onClick={submitRegister}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegisterCompany;
