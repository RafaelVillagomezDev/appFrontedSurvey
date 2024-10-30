import React, { memo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DOMPurify from "dompurify";
import PortadaSurvey from "../../../public/assets/img/Portada_survey.webp";

function Survey() {
  const [selectedOption, setSelectedOption] = useState("false");

  const [currentModal, setCurrentModal] = useState(0);

  const handleNextModal = () => {
    setCurrentModal((prevModal) => prevModal + 1);
  };

  const handlePrevModal = () => {
    setCurrentModal((prevModal) => prevModal - 1);
  };

  const [formData, setFormData] = useState({
    descripcion: "",
  });

  const [errors, setErrors] = useState({});

  const regexPatterns = [
    {
      field: "descripcion",
      regex: /^[A-Za-z]{4,}$/, // Formato estándar de correo electrónico
      msg: "La descripcion debe de tener al menos 4 catacteres",
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="survey">
      <div className="survey_main">
        <div className="container_survey">
          <form className="form">
            {currentModal == 0 && (
              <div id="window_one">
                <div className="box_survey">
                  <h1>Crea una encuesta</h1>
                </div>
                <div className="box_survey">
                  <div className="box_survey-group">
                    <h2>Desea agregar su encuesta a un contenedor?</h2>
                    <label htmlFor="opcion1">
                      <input
                        type="radio"
                        id="opcion1"
                        value={true}
                        name="options_container"
                        checked={selectedOption === "true"}
                        onChange={handleOptionChange}
                      />
                      Sí
                    </label>
                    <label htmlFor="opcion2">
                      <input
                        type="radio"
                        id="opcion2"
                        value={false}
                        name="options_container"
                        checked={selectedOption === "false"}
                        onChange={handleOptionChange}
                      />
                      No
                    </label>
                  </div>
                  <div className="box_survey-group">
                    <label htmlFor="descripcion">
                      Escribe una descripción para tu encuesta
                    </label>
                    <input
                      id="descripcion"
                      type="text"
                      name="descripcion"
                      placeholder="Escribe una descripcion"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_container">
                    {errors.descripcion && (
                      <p className="error_text">{errors.descripcion}</p>
                    )}
                  </div>
                  <button
                    className="form_btn-continue"
                    type="button"
                    onClick={handleNextModal}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {currentModal == 1 && (
              <div id="window_two">
                <div className="box_survey">
                  <h1>Elija un producto</h1>
                </div>
                <div className="box_survey">
                  <div className="box_survey-group">
                    <label htmlFor="descripcion">Escribe un producto</label>
                    <input
                      id="descripcion"
                      type="text"
                      name="descripcion"
                      placeholder="Escribe un producto"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_container">
                    {errors.descripcion && (
                      <p className="error_text">{errors.descripcion}</p>
                    )}
                  </div>
                  <div className="box_survey-group">
                    <label htmlFor="descripcion">Escribe una categoría</label>
                    <input
                      id="descripcion"
                      type="text"
                      name="descripcion"
                      placeholder="Escribe una categoría"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_container">
                    {errors.descripcion && (
                      <p className="error_text">{errors.descripcion}</p>
                    )}
                  </div>
                  <div className="form_group-btn">
                    <button
                      className="form_btn-back"
                      type="button"
                      onClick={handlePrevModal}
                    >
                      Atras
                    </button>
                    <button
                      className="form_btn-next"
                      type="button"
                      onClick={handleNextModal}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="container_survey">
          <LazyLoadImage
            className="portada_img"
            src={PortadaSurvey}
            alt="survey"
          />
        </div>
      </div>
    </div>
  );
}

export default Survey;
