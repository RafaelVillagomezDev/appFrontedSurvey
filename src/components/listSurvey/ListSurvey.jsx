import React, { lazy, startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../slices/survey/surveySlice";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";

const CardSurvey = lazy(() => import("../../components/cardSurvey/CardSurvey"));

function ListSurvey() {
  const dispatch = useDispatch();

  const token = getLocalStorage("token");

  const { survey } = useSelector((state) => state.survey);
  useEffect(() => {
    startTransition(() => {
      dispatch(getSurvey(token));
    });
  }, [dispatch]);

  return (
    <div className="home">
          <div className="home_container">
             
              <CardSurvey survey={survey}/>
              
          </div>
      </div>
  )
}

export default ListSurvey;
