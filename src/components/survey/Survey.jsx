import React, { memo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DOMPurify from "dompurify";
import PortadaSurvey from "../../../public/assets/img/Portada_survey.webp";
import MySwal from "sweetalert2";
import { createContainer } from "../../slices/container/containerSlice";
import { createProduct } from "../../slices/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function Survey() {
  const dispath = useDispatch();

  const id_usuario = useSelector((state) => state.user.id_usuario);
  const token = useSelector((state) => state.user.token);

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
    producto: "",
    categoria: "",
    pregunta: "",
    subproducto: "",
  });

  const [errors, setErrors] = useState({});

  const regexPatterns = [
    {
      field: "descripcion",
      regex: /^[A-Za-z]{4,}$/, // Formato estándar de correo electrónico
      msg: "La descripcion debe de tener al menos 4 caracteres",
    },
    {
      field: "producto",
      regex: /^[A-Za-z]{4,}$/, // Formato estándar de correo electrónico
      msg: "El producto debe de tener al menos 4 caracteres",
    },
    {
      field: "categoria",
      regex: /^[A-Za-z]{4,40}$$/, // Formato estándar de correo electrónico
      msg: "La categoría debe de tener al menos 4 caracteres",
    },
    {
      field: "pregunta",
      regex: /^[A-Za-z]{4,40}$$/, // Formato estándar de correo electrónico
      msg: "La pregunta debe de tener al menos 4 caracteres",
    },
    {
      field: "subproducto",
      regex: /^[A-Za-z]{4,40}$$/, // Formato estándar de correo electrónico
      msg: "El subproducto debe de tener al menos 4 caracteres",
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

  const createSurvey = async () => {
    const { descripcion, producto, categoria, subproducto, pregunta } =
      formData;

    try {
      const id_container=await dispath(createContainer({ id_usuario, token }));
      const [product] = await Promise.all([
        
        dispath(createProduct({
          productos: [{ producto,categoria}],
          id_container: id_container,
        } ,token)),
      ]);

     

      console.log(id_container);
      console.log(product);
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
                    <div className="error_container">
                      {errors.descripcion && (
                        <p className="error_text">{errors.descripcion}</p>
                      )}
                    </div>
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
                    <label htmlFor="producto">Escribe un producto</label>
                    <input
                      id="producto"
                      type="text"
                      name="producto"
                      placeholder="Escribe un producto"
                      onChange={handleChange}
                    />
                    <div className="error_container">
                      {errors.producto && (
                        <p className="error_text">{errors.producto}</p>
                      )}
                    </div>
                  </div>

                  <div className="box_survey-group">
                    <label htmlFor="categoria">Escribe una categoría</label>
                    <input
                      id="categoria"
                      type="text"
                      name="categoria"
                      placeholder="Escribe una categoría"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_container">
                    {errors.categoria && (
                      <p className="error_text">{errors.categoria}</p>
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
            {currentModal == 2 && (
              <div id="window_three">
                <div className="box_survey">
                  <h1>Escriba un subproducto</h1>
                </div>
                <div className="box_survey">
                  <div className="box_survey-group">
                    <label htmlFor="pregunta">Escribe un subproducto</label>
                    <input
                      id="subproducto"
                      type="text"
                      name="subproducto"
                      placeholder="Escribe una subproducto"
                      onChange={handleChange}
                    />
                    <div className="error_container">
                      {errors.subproducto && (
                        <p className="error_text">{errors.subproducto}</p>
                      )}
                    </div>
                  </div>
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
            )}
            {currentModal == 3 && (
              <div id="window_three">
                <div className="box_survey">
                  <h1>Escriba sus preguntas</h1>
                </div>
                <div className="box_survey">
                  <div className="box_survey-group">
                    <label htmlFor="pregunta">Escribe una pregunta</label>
                    <input
                      id="pregunta"
                      type="text"
                      name="pregunta"
                      placeholder="Escribe una pregunta"
                      onChange={handleChange}
                    />
                    <div className="error_container">
                      {errors.pregunta && (
                        <p className="error_text">{errors.pregunta}</p>
                      )}
                    </div>
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
                      className="form_btn-create"
                      type="button"
                      onClick={createSurvey}
                    >
                      Crear encuesta
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
