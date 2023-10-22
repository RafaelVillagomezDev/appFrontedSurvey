import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSurvey, getSurvey } from "../../slices/survey/surveySlice";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";
import { isUser } from "../../utils/auth/ProtectedRoutes";

function ListSurvey() {
  const dispatch = useDispatch();

  const { survey } = useSelector((state) => state.survey);
  const [encuesta, setEncuesta] = useState(survey);

  const token = getLocalStorage("token");

  useEffect(() => {
    dispatch(getSurvey(token))

   
  }, [dispatch]);

  const eliminar = (id_encuesta) => {
    const obj={
       token:token,
       id_encuesta:id_encuesta
    }
    dispatch(deleteSurvey(obj)).then((resp)=>{
       console.log(resp)
    })
  };

  return survey.map((survey, index) => (
    <div id="survey-container" key={index}>
      <div className="tabla">
        <div className="tabla_fila">
          <div className="tabla_columna">
            <h2>DNI</h2>
          </div>
          <div className="tabla_columna">
            <h2>PRODUCTO</h2>
          </div>
          <div className="tabla_columna">
            <h2>MANTENIMIENTO</h2>
          </div>
          <div className="tabla_columna">
            <h2>TIPO MANTENIMIENTO</h2>
          </div>
          <div className="tabla_columna">
            <h2>ESTADO</h2>
          </div>
          <div className="tabla_columna">
            <h2>ID SUBPROUDCTO</h2>
          </div>
          <div className="tabla_columna">
            <h2>FECHA CREACION</h2>
          </div>
        </div>
        <div className="tabla_fila2">
          <div className="tabla_columna">
            <h2>{survey.Dni}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Producto}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Mantenimiento}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Tipo_mantenimiento}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Estado}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Id_subproducto}</h2>
          </div>
          <div className="tabla_columna">
            <h2>{survey.Fecha_creacion}</h2>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => eliminar(survey.Id_encuesta)}
        className="btn_mobile-remove"
      >
        <span>Eliminar Encuesta</span>
      </button>
    </div>
  ));
}

export default ListSurvey;
