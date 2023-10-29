import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getListSurvey,
  removeItemSurvey,
} from "../../services/survey/surveyObj";
import {
  getLocalStorage,
  saveLocalStorage,
} from "../../utils/storage/saveLocalStorage";

const initialState = {
  survey: [],
  status:'idle'
};

export const getSurvey = createAsyncThunk(
  "surveySlice/fetchSurvey",
  async (token) => {
    const data = await getListSurvey(token);
    return data;
  }
);

export const deleteSurvey = createAsyncThunk(
  "surveySlice/deleteSurvey",
  async (obj) => {
    
    const data = await removeItemSurvey(obj);

    return data;
  }
);

export const surveySlice = createSlice({
  name: "surveyss",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSurvey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getSurvey.fulfilled, (state, action) => {
      state.status = "success";

      state.survey = action.payload.data;
      
    });
    builder.addCase(getSurvey.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(deleteSurvey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteSurvey.fulfilled, (state, action) => {
      state.status = "success";
      const pos = state.survey.findIndex((elem) => elem.id_encuesta === action.payload.id)
      state.survey.splice(pos, 1)
    });
    builder.addCase(deleteSurvey.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export const {} = surveySlice.actions;

export default surveySlice.reducer;
