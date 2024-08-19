import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";
import { saveLocalStorage } from "../../utils/storage/saveLocalStorage";





const initialState={
    user:[],
    isAuthenticated: false,
    
}


export const authUser=createAsyncThunk('loginSlice/fetchLogin',
    async(obj)=>{
       const data=await getAuthUser(obj)
       saveLocalStorage('token',data.token)
       return data
    }
)

export const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
    }
    ,extraReducers: (builder) => {
        builder
          .addCase(authUser.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(authUser.fulfilled, (state, action) => {
            state.status = 'success'
            state.user=action.payload.data
            state.isAuthenticated=true
            saveLocalStorage('user',action.payload.data)
            
          })
          .addCase(authUser.rejected, (state) => {
            state.status = 'failed'
          })
      },

}
);
export const {login}=loginSlice.actions

export default loginSlice.reducer