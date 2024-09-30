import React, { memo, useState } from "react";
import { Link } from "react-router-dom";


function CardSurvey(props) {



  return (
    <>
      {props.survey.map((survey, key) => (
        <div className="cardSurvey" key={key}>
          <div className="cardSurvey_container cardSurvey_align">
            <p><span>Encuesta_ID:</span> {survey.Encuesta_ID} <button className="cardSurvey_btn-copy" ></button></p>
          </div>
          <div className="cardSurvey_container">
            <h2>Descripción</h2>
            <p>{survey.Encuesta_Descripcion}</p>
          </div>
          <div className="cardSurvey_container">
            <h2>Categoria</h2>
            {survey.Productos_Categoria.split(",").map((categoria,key) => (
              <p key={key}>{categoria}</p>
            ))}
          </div>
          <div className="cardSurvey_container">
            <h2>Productos</h2>
            <div className="containerProduct_box">
              {survey.Productos_Nombre.split(",").map((producto,key) => (
                <button key={key} className="containerProduct_btn-product">
                  {producto}
                </button>
              ))}
            </div>
          </div>

          <div className="cardSurvey_container">
            <Link to={`/survey/${survey.Encuesta_ID}`} className="cardSurvey_btn-complete">Completar encuesta</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(CardSurvey);
