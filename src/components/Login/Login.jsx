import React from "react";



function Login(){

    return(
       <form id="form">
           <div className="form_div">
               <div className="form_div-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Introduzca un email" require/>
               </div>
               <div className="form_div-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Introduzca una password" require/>
               </div>
               
                <button className="form_btn-submit" type="submit">Login</button>
           </div> 
       </form>
    )
}

export default Login