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
      data={...jwtDecode(data.token)}
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
        state.user.push(action.payload); // Guardar el usuario directamente
        saveLocalStorage("token",action.payload.id_user)
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
