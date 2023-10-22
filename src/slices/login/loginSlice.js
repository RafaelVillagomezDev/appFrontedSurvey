import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";
import { saveLocalStorage } from "../../utils/storage/saveLocalStorage";





const initialState={
    user:[],
    
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
            // const userCopy={...initialState,...action.payload}
            // const userFecth={
            //     name:userCopy.data.name,
            //     user_name:userCopy.data.surname,
            //     rol:userCopy.data.rol
            // }
            // state.user=userFecth
            state.user=action.payload.data
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