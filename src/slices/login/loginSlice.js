import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";
import { getLocalStorage, saveLocalStorage } from "../../utils/storage/saveLocalStorage";
import jwtDecode from "jwt-decode";


const initialState = {
  user: [], // Cambiado a null si solo hay un usuario
  token:getLocalStorage("token")|| null,
  status: "idle", // Estado para manejar el estado de la solicitud
  error:null,
  isAuthenticated:!!getLocalStorage("token")
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
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = "success";
        const decodeToken={...jwtDecode(action.payload.token)}
        state.user.push(decodeToken); // Guardar el usuario directamente
        state.token=action.payload.token
        state.isAuthenticated = true;
        saveLocalStorage("token",action.payload.token)
      
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
