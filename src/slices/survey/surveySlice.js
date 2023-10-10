import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListSurvey, removeItemSurvey } from "../../services/survey/surveyObj";
import { getLocalStorage, saveLocalStorage } from "../../utils/storage/saveLocalStorage";

;

const initialState = {
  survey:[],
  saveSurvey:getLocalStorage("survey")
};

export const getSurvey = createAsyncThunk(
  "surveySlice/fetchSurvey",
  async (token) => {
    const data = await getListSurvey(token);
    saveLocalStorage("survey",data.data)
    return data;
  }
);

export const deleteSurvey= createAsyncThunk(
  "surveySlice/deleteSurvey",
  async (token,id_encuesta) => {
    const data = await removeItemSurvey(token,id_encuesta);
    
    return data;
  }
);

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSurvey.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSurvey.fulfilled, (state, action) => {
        state.status = "success";
        state.survey=action.payload.data
      })
      .addCase(getSurvey.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteSurvey.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSurvey.fulfilled, (state, action) => {
        state.status = "success";
        state.survey=action.payload.data
      })
      .addCase(deleteSurvey.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const {} = surveySlice.actions;

export default surveySlice.reducer;
