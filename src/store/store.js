import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice"
import surveyReducer from "../slices/survey/surveySlice"

/*
  Aqui debemos importar slice
*/

const store=configureStore({
  reducer:{
    user:loginReducer,
    survey:surveyReducer
  },
  
  
})

export default store


