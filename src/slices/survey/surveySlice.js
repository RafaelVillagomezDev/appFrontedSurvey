import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListSurvey } from "../../services/survey/surveyObj";

;

const initialState = {
  survey: [],
};

export const getSurvey = createAsyncThunk(
  "surveySlice/fetchSurvey",
  async (token) => {
    const data = await getListSurvey(token);
    
    return data;
  }
);

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {},
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
      });
  },
});
export const {} = surveySlice.actions;

export default surveySlice.reducer;
