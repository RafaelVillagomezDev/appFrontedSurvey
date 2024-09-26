import React from 'react'
import { useParams } from 'react-router-dom'




function CardSurveyMain() {

    const {id_encuesta}=useParams()
  return (
    <>
      <div className='cardSurveyMain'>
          <div className='cardSurveyMain_container'>
              <div className='cardSurveyMain_container-col'>
                <div className='cardSurveyMain_container-row'>

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