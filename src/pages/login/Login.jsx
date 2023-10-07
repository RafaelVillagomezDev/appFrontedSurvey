import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../../slices/login/loginSlice";


function Login() {

  const dispatch = useDispatch()
  const [email,setImail]=useState("")
  const [password,setPassword]=useState("")

  const user= useSelector((state)=>state.login.user.token)
  const loginUser=(event)=>{
    const objLogin={email:email,password:password}
    dispatch(login(objLogin))
  }
    return (
      <div id="main">
          <div className="main_div-title">
             <h1 >APP ENCUESTAS</h1>
          </div>
          <form id="form">
           <div className="form_div">
               <div className="form_div-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" maxLength={50} name="email" onChange={(e)=>setImail(e.target.value)} placeholder="Introduzca un email" required/>
               </div>
               <div className="form_div-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" maxLength={50} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Introduzca una password" required/>
               </div>
                {user}
                <button className="form_btn-submit"type="submit" onClick={loginUser}>Login</button>
           </div> 
       </form>
      </div>
    );
  }
  
  export default Login;