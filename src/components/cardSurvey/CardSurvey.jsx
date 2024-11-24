import React, { memo, useState } from "react";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
function CardSurvey(props) {
  return (
    <>
      {props.survey ? (
        props.survey.map((survey, key) => (
          <div className="cardSurvey" key={key}>
            <div className="cardSurvey_container">
              <h2>
                {" "}
                <BsFileEarmarkRichtext className="icon" /> Descripción{" "}
              </h2>
              <p>{survey.Encuesta_Descripcion}</p>
            </div>
            <div className="cardSurvey_container">
              <h2>
                {" "}
                <MdOutlineCategory className="icon" /> Categoria{" "}
              </h2>
              {survey.Productos_Categoria.split(",").map((categoria, key) => (
                <p key={key}>{categoria}</p>
              ))}
            </div>
            <div className="cardSurvey_container">
              <h2>
                {" "}
                <AiOutlineProduct className="icon" /> Productos
              </h2>
              <div className="containerProduct_box">
                {survey.Productos_Nombre.split(",").map((producto, key) => (
                  <button key={key} className="containerProduct_btn-product">
                    {producto}
                  </button>
                ))}
              </div>
            </div>

            <div className="cardSurvey_container">
              <Link
                to={`/survey/${survey.Encuesta_ID}`}
                className="cardSurvey_btn-complete"
              >
                Completar encuesta
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h4>No hay encuestas disponibles.</h4>
      )}
    </>
  );
}

export default memo(CardSurvey);
