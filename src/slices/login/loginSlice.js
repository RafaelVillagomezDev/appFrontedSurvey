import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";
import { saveLocalStorage } from "../../utils/storage/saveLocalStorage";
import jwtDecode from "jwt-decode";


const initialState = {
  user: [], // Cambiado a null si solo hay un usuario
  status: "idle", // Estado para manejar el estado de la solicitud
  error:null,
};

export const authUser = createAsyncThunk(
  "loginSlice/fetchLogin",
  async (obj, { rejectWithValue }) => {
    try {
      let data = await getAuthUser(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = "success";
        saveLocalStorage("token",action.payload.token)
        const decodeToken={...jwtDecode(action.payload.token)}
        state.user.push(decodeToken); // Guardar el usuario directamente
      
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
