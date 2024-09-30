import React, { lazy, startTransition, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey, selectFilterSurvey } from "../../slices/survey/surveySlice";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";

const CardSurvey = lazy(() => import("../../components/cardSurvey/CardSurvey"));

function ListSurvey() {
  const dispatch = useDispatch();

  const token = getLocalStorage("token");


  useEffect(() => {
    startTransition(() => {
      dispatch(getSurvey(token));
    });
  }, [dispatch]);

  const filterSurvey=useSelector((state) => selectFilterSurvey(state))

  

  const dataSurvey= useMemo(() => filterSurvey, [filterSurvey]);

  return (
    <div className="home">
          <div className="home_container">
             
              <CardSurvey survey={dataSurvey}/>
           
          </div>
      </div>
  )
}

export default ListSurvey;
