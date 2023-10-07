import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser } from "../../services/auth/loginUser";

const userInitial={
    token:"",
    email:"yandry75@gmail.com",
    name_user:"yandry",
    surname:"Villagomez",
    password:"prueba1234"

}



const initialState={
    user:userInitial,
    
}


export const authUser=createAsyncThunk('loginSlice/fetchLogin',
    async(obj)=>{
        return await getAuthUser(obj)
    }
)

export const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        login:(state)=>{
            state.user.name_user="0w0iee"
        }
    }
    ,extraReducers: (builder) => {
        builder
          .addCase(authUser.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(authUser.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload
          })
          .addCase(authUser.rejected, (state) => {
            state.status = 'failed'
          })
      },

}
);
export const {login}=loginSlice.actions

export default loginSlice.reducer