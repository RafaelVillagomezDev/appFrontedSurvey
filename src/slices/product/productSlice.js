import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  status: "idle",
  loading: false,
};

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async (obj,token, { rejectWithValue }) => {
    try {
      let data = await customFetch(
        "http://localhost:3445/api/v1/product/create",
        "POST",
        token,
        obj
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Obtener encuestas
    builder.addCase(createProduct.pending, (state) => {
      state.status = "loading";
      state.loading = false;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.loading = true;
      state.survey = action.payload.data;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.status = "failed";
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
