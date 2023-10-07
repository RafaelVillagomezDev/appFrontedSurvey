import React from "react";



function Login() {
    return (
      <div id="main">
          <div className="main_div-title">
             <h1>APP ENCUESTAS</h1>
          </div>
          <form id="form">
           <div className="form_div">
               <div className="form_div-group">
                    <label for="email">Email</label>
                    <input type="email" maxLength={50} name="email" placeholder="Introduzca un email" require/>
               </div>
               <div className="form_div-group">
                    <label for="password">Password</label>
                    <input type="password" maxLength={50} name="password" placeholder="Introduzca una password" require/>
               </div>
               
                <button className="form_btn-submit" type="submit">Login</button>
           </div> 
       </form>
      </div>
    );
  }
  
  export default Login;