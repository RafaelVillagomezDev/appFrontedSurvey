import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";
import { saveLocalStorage } from "../../utils/storage/saveLocalStorage";
import jwtDecode from "jwt-decode";




const initialState={
    user:[],
    isAuthenticated: false,
    
}


export const authUser=createAsyncThunk('loginSlice/fetchLogin',
    async(obj)=>{
       const user=await getAuthUser(obj)
       saveLocalStorage('token',user.token)
       const data={...jwtDecode(user.token)}
       return data
    }
)

export const loginSlice=createSlice({
    name:'user',
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
            state.user.push(action.payload)
            state.isAuthenticated=true
            saveLocalStorage('user',action.payload)
            
          })
          .addCase(authUser.rejected, (state) => {
            state.status = 'failed'
          })
      },

}
);
export const {}=loginSlice.actions

export default loginSlice.reducer