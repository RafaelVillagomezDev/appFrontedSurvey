import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice"
import { combineReducers } from "@reduxjs/toolkit";
/*
  Aqui debemos importar slice
*/

const store=configureStore({
  reducer:{
    login:loginReducer
  },
  
})

export default store


