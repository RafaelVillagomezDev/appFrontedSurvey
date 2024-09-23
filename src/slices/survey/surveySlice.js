import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addSurvey,
  getListSurvey,
  removeItemSurvey,
} from "../../services/survey/surveyObj";


const initialState = {
  survey: [],
  status:'idle',
  searchWord:''

};

export const getSurvey = createAsyncThunk(
  "surveySlice/fetchSurvey",
  async (token) => {
    const data = await getListSurvey(token);
    return data;
  }
);

export const createSurvey = createAsyncThunk(
  "surveySlice/createSurvey",
  async (dataSurvey) => {
    const data = await addSurvey(dataSurvey);
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
  name: "survey",
  initialState,
  reducers: {
    setSearchWord(state, action) {
      state.searchWord = action.payload;
    }
  },
  extraReducers: (builder) => {

    //Obtener encuestas
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

    //Eliminar encuestas
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

     //Crear encuestas
    builder.addCase(createSurvey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createSurvey.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(createSurvey.rejected, (state) => {
      state.status = "failed";
    });
    
  },
});


export const {survey,setSearchWord} = surveySlice.actions;

export const selectFilterSurvey=(state)=>{
    
    const { survey,searchWord } = state.survey;
    

    return survey.filter((surveys) =>
    searchWord ? surveys.Encuesta_ID===searchWord : true
  );
}

export default surveySlice.reducer;
 