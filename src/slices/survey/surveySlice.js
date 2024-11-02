import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addSurvey,
  getListSurvey,
  getSurveyUnique,
  removeItemSurvey,
} from "../../services/survey/surveyObj";
import { customFetch } from "../../utils/customFetch";

const initialState = {
  survey: [],
  uniqueSurvey:[],
  status: "idle",
  loading:false,
  searchWord: "",
  optionSelect: "",
};

export const getSurvey = createAsyncThunk(
  "surveySlice/fetchSurvey",
  async (token) => {
    const data = await getListSurvey(token);
    return data;
  }
);

export const getUniqueSurvey = createAsyncThunk(
  "surveySlice/fetchUniqueSurvey",
  async (dataObj) => {
    const {token,id_encuesta}=dataObj
    const data = await getSurveyUnique(token,id_encuesta);
    return data;
  }
);

export const createSurvey = createAsyncThunk(
  "surveySlice/createSurvey",
  async (dataSurvey) => {
    const data = await customFetch("http://localhost:3445/api/v1/survey/create","POST","",dataSurvey)
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
    },
    setHandleOption(state, action) {
      state.optionSelect = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Obtener encuestas
    builder.addCase(getSurvey.pending, (state) => {
      state.status = "loading";
      state.loading=false;
    });
    builder.addCase(getSurvey.fulfilled, (state, action) => {
      state.status = "success";
      state.loading=true;
      state.survey = action.payload.data;
    });
    builder.addCase(getSurvey.rejected, (state) => {
      state.status = "failed";
      state.loading=false;
    });

    //Obtener encuesta unica 
    builder.addCase(getUniqueSurvey.pending, (state) => {
      state.status = "loading";
      state.loading=false;
    });
    builder.addCase(getUniqueSurvey.fulfilled, (state, action) => {
      state.status = "success";
      state.loading=true;
      state.uniqueSurvey = action.payload.data[0];
    });
    builder.addCase(getUniqueSurvey.rejected, (state) => {
      state.status = "failed";
      state.loading=false;
    });

    //Eliminar encuestas
    builder.addCase(deleteSurvey.pending, (state) => {
      state.status = "loading";
      state.loading=false;
    });
    builder.addCase(deleteSurvey.fulfilled, (state, action) => {
      state.status = "success";
      state.loading=true;
      const pos = state.survey.findIndex(
        (elem) => elem.id_encuesta === action.payload.id
      );
      state.survey.splice(pos, 1);
    });
    builder.addCase(deleteSurvey.rejected, (state) => {
      state.status = "failed";
      state.loading=false;
    });

    //Crear encuestas
    builder.addCase(createSurvey.pending, (state) => {
      state.status = "loading";
      state.loading=true;
    });
    builder.addCase(createSurvey.fulfilled, (state, action) => {
      state.status = "success";
      state.loading=true;
    });
    builder.addCase(createSurvey.rejected, (state) => {
      state.status = "failed";
      state.loading=false;
    });
  },
});

export const { survey, setSearchWord, setHandleOption } = surveySlice.actions;

export const selectFilterSurvey = (state) => {
  const { survey, searchWord, optionSelect } = state.survey;

  // Si no hay opción seleccionada, devuelve el estado completo
  if (!optionSelect) {
    return survey;
  }

  // Filtramos las encuestas primero por la propiedad seleccionada
  const filteredSurveys = survey.filter((surveys) =>
    surveys.hasOwnProperty(optionSelect)
  );

  // Luego filtramos por el valor de la propiedad con el searchWord
  return filteredSurveys.filter((surveys) =>
    searchWord ? surveys[optionSelect].includes(searchWord) : true
  );
};


export default surveySlice.reducer;
