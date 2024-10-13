import React, { startTransition, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getLocalStorage } from '../../utils/storage/saveLocalStorage';
import { getUniqueSurvey } from '../../slices/survey/surveySlice';




function CardSurveyMain() {

    const {id_encuesta}= useParams()

    const dispatch = useDispatch()

    const token = getLocalStorage("token");

    const data={token:token,id_encuesta:id_encuesta}
  
    useEffect(() => {
      startTransition(() => {
        dispatch(getUniqueSurvey(data));
      });
    }, [dispatch]);

    const uniqueSurvey=useSelector((state) => state.survey.uniqueSurvey)


  return (
    <>
      <div className='cardSurveyMain'>
          <div className='cardSurveyMain_container'>
              <div className='cardSurveyMain_container-col'>
                <div className='cardSurveyMain_container-row'>
                  <h1>Descripción</h1>
                  <p>{uniqueSurvey.Encuesta_Descripcion}</p>
               
                </div>
                <div className='cardSurveyMain_container-row'>
                  <h1>Productos</h1>
                  <p>{uniqueSurvey.Productos_Nombre}</p>
               
                </div>
                <div className='cardSurveyMain_container-row'>
                  <h1>Subproductos</h1>
                  <p>{uniqueSurvey.Subproductos}</p>
               
                </div>
                <div className='cardSurveyMain_container-row'>
                  <h1>Categoría</h1>
                  <p>{uniqueSurvey.Productos_Categoria}</p>
                  {console.log(uniqueSurvey)}
                </div>
              </div>
              <div className='cardSurveyMain_container-col'>
                <div className='cardSurveyMain_container-row'>
                    
                </div>
              </div>
          </div>
      </div>
    
    </>
  )
}

export default CardSurveyMain