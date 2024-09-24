import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSurvey } from "../../slices/survey/surveySlice";
import { toast } from "react-toastify";


function FormSurvey() {
  const dispath= useDispatch()



  const crearEncuesta=(e)=>{
    e.preventDefault()
    const data=Object.fromEntries(new FormData(e.target))
    dispath(createSurvey(data)).then((data) => {
      const errores = data.payload.errors;
      if (errores) {
        errores.forEach((elem) => {
          toast.error("Error :" + elem.msg);
        });
      } else {
        toast.success(data.payload.data);
      }
    })
    .catch((err) => {
      toast.error(err);
    });
  }  
  return (
    <section className="formSurvey__container">
      <form className="formSurvey__form" onSubmit={(e)=>{crearEncuesta(e)}}>
        <div className="formSurvey__box">
          <label id="name-label" htmlFor="dni">
           DNI 
            <input
              id="dni"
              type="text"
              name="dni"
              placeholder="Introduzca su dni"
              required
            />
          </label>
        </div>
        <div className="formSurvey__box">
          <label id="name-label" htmlFor="producto">
           Producto
            <input
              id="producto"
              type="text"
              name="producto"
              placeholder="Introduzca un producto"
              required
            />
          </label>
        </div>
        <div className="formSurvey__box">
          <label id="name-label" htmlFor="mantenimiento">
           Mantenimiento
           <select id="mantenimiento" name="mantenimiento"  defaultValue="">
           <option value="" disabled>Elija una opcion</option>
            <option value="SI">Sí</option>
            <option value="NO" selected>No</option>
          </select>
          </label>
        </div>
        <div className="formSurvey__box">
          <label id="name-label" htmlFor="tipo_mantenimiento">
           Tipo de Mantenimiento
           <input
              id="tipo_mantenimiento"
              type="text"
              name="tipo_mantenimiento"
              placeholder="Introduzca un tipo de mantenimiento"
            
            />
          </label>
        </div>
        <div className="formSurvey__box">
          <label id="name-label" htmlFor="estado">
           Estado
            <select id="estado" name="estado" defaultValue="">
                <option value="" disabled>Elija una opcion</option>
                <option value="VENDIDO">VENDIDO</option>
                <option value="NO VENDIDO" selected>NO VENDIDO</option>
                <option value="EN PROCESO" selected>EN PROCESO</option>
                <option value="NO VÁLIDO" selected>NO VÁLIDO</option>
            </select>
          </label>
        </div>
        <div className="formSurvey__box">
            <button>Crear</button>
        </div>

      </form>
    </section>
  );
}

export default FormSurvey;
