import React, { lazy, startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey, selectFilterSurvey } from "../../slices/survey/surveySlice";
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

  const filterSurvey=useSelector(selectFilterSurvey)

  const dataSurvey=filterSurvey.length>0?filterSurvey:survey

  return (
    <div className="home">
          <div className="home_container">
             
              <CardSurvey survey={dataSurvey}/>
           
          </div>
      </div>
  )
}

export default ListSurvey;
