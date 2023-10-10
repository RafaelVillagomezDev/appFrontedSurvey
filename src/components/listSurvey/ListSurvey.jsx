import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../slices/survey/surveySlice";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";
import { isUser } from "../../utils/auth/ProtectedRoutes";

function ListSurvey() {
  const dispatch = useDispatch();

  const { survey } = useSelector((state) => state.survey);
  const token = getLocalStorage("token");

  useEffect(() => {
    dispatch(getSurvey(token));
  }, [dispatch]);

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
          <input type="hidden"  value={survey.Id_encuesta} />

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
      <button className="btn_mobile-remove">
        <span>Eliminar Encuesta</span>
      </button>
    </div>
  ));
}

export default ListSurvey;
