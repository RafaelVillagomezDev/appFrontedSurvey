import React from "react";

function CardSurvey(props) {
  return (
    <>
      {props.survey.map((survey,key) => (
        <div className="cardSurvey" key={key}>
          <div className="cardSurvey_container">
            <h2>Descripción</h2>
            <p>
              {survey.Encuesta_Descripcion}
            </p>
          </div>
          <div className="cardSurvey_container">
            <h2>Categoria</h2>
            <p>{survey.Producto_Categoria}</p>
          </div>
          <div className="cardSurvey_container">
            <h2>Productos</h2>
            <div className="containerProduct_box">
              <button className="containerProduct_btn-product">{survey.Producto_Nombre}</button>
            </div>
          </div>

          <div className="cardSurvey_container">
            <button className="cardSurvey_btn-complete">
              Completar encuesta
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardSurvey;
