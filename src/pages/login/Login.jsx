import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUser, login } from "../../slices/login/loginSlice";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";
import { isRol } from "../../utils/auth/ProtectedRoutes";
import { toast } from "react-toastify";
import PortadaLogin from "../../../public/assets/img/Portada_login.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";

function Login() {

  const dispatch = useDispatch();
  const [email, setImail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


 
  const loginUser = (event) => {
    event.preventDefault()
    const objLogin = { email: email, password: password };
    dispatch(authUser(objLogin)).then((data)=>{
      const errores = data.payload.errors;
      if (errores) {
        errores.forEach((elem) => {
          toast.error("Error :" + elem.msg);
        });
      }     
    }).then(()=>{
      navigate("app");
    }).catch((err)=>{
      toast.err(err)
    });

    
  };

  return (
    <div id="main">
      <div id="main_container-portada">
      <LazyLoadImage src={PortadaLogin}
         id="img_portada"
         alt="Portada gas"
      />

      </div>
      <div id="main_container_form">
      
      <form id="form">
        <div className="form_div">
          <div className="form_div-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              maxLength={50}
              name="email"
              autoComplete="username"
              onChange={(e) => setImail(e.target.value)}
              placeholder="Introduzca un email"
              required
            />
          </div>
          <div className="form_div-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              maxLength={50}
              name="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduzca una password"
              required
            />
          </div>
          <button className="form_btn-submit" type="submit" onClick={loginUser}>
            Login
          </button>
        </div>
      </form>
      </div>
     
    </div>
  );
}

export default Login;
