import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice"
import surveyReducer from "../slices/survey/surveySlice"
import productReducer from "../slices/product/productSlice"
/*
  Aqui debemos importar slice
*/

const store=configureStore({
  reducer:{
    user:loginReducer,
    survey:surveyReducer,
    product:productReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Desactiva la verificación de serializabilidad
  }),
  
  
})

export default store


