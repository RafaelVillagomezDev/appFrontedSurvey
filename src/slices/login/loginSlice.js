import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { getLocalStorage, saveLocalStorage } from "../../utils/storage/saveLocalStorage";
import jwtDecode from "jwt-decode";
import { customFetch } from "../../utils/customFetch";


const initialState = {
  user: {}, // Cambiado a null si solo hay un usuario
  token:getLocalStorage("token")|| null,
  id_usuario:"",
  status: "idle", // Estado para manejar el estado de la solicitud
  loading: false,
  error:null,
  isAuthenticated:!!getLocalStorage("token")
};

export const authUser = createAsyncThunk(
  "loginSlice/fetchLogin",
  async (obj, { rejectWithValue }) => {
    try {
      let data = await customFetch("http://localhost:3445/api/v1/auth/login","POST","",obj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerAdmin=createAsyncThunk(
  "registerSlice/fetchRegisterAdmin",
  async (obj, { rejectWithValue }) => {
    try {
      let data = await customFetch("http://localhost:3445/api/v1/auth/registerAdmin","POST","",obj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser=createAsyncThunk(
  "registerSlice/fetchRegisterUser",
  async (obj, { rejectWithValue }) => {
    try {
      let data = await customFetch("http://localhost:3445/api/v1/auth/register","POST","",obj);
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
    },

    changeLoading:(state,action)=>{
      state.loading=action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.status = "loading";
        state.loading=true
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = "success";
        state.loading=false
        const decodeToken=jwtDecode(action.payload.token)
        state.user=decodeToken // Guardar el usuario directamente
        state.token=action.payload.token
        state.isAuthenticated = true;
        state.id_usuario=decodeToken.id_user
        saveLocalStorage("token",action.payload.token)
      
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading=false;
        state.error = action.payload;
      }) .addCase(registerAdmin.pending, (state) => {
        state.status = "loading";
        state.loading=false
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.status = "success";
        state.loading=true
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.loading=false;
        state.error = action.payload;
      }).addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.loading=false
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.loading=true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading=false;
        state.error = action.payload;
      });
  },
});

export const { logout , changeLoading} = loginSlice.actions;

export default loginSlice.reducer;
