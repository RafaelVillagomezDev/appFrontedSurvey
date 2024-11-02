import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/customFetch";

const initialState = {
  container: [],
  status: "idle",
  loading: false,
};

export const createContainer = createAsyncThunk(
  "containerSlice/createContainer",
  async (obj, { rejectWithValue }) => {
    try {
      const {id_usuario}=obj
      const objContainer={id_usuario}
      let data = await customFetch(
        "http://localhost:3445/api/v1/container/create",
        "POST",
         obj.token,
         objContainer
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    } 
  }
);

export const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Obtener encuestas
    builder.addCase(createContainer.pending, (state) => {
      state.status = "loading";
      state.loading = false;
    });
    builder.addCase(createContainer.fulfilled, (state, action) => {
      state.status = "success";
      state.loading = true;
    });
    builder.addCase(createContainer.rejected, (state) => {
      state.status = "failed";
      state.loading = false;
    });
  },
});

export default containerSlice.reducer;
