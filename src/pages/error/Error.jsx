import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ErrorMonsterImg from "../../../public/assets/img/Portada_error.jpg"
import { useNavigate } from "react-router-dom";

function Error() {

  const navigate = useNavigate();

  const navigateHome=()=>{
      navigate("app")
  }

    return (
      <div id="container_main">
        <div id="box_img">
             <LazyLoadImage src={ErrorMonsterImg} id="monster_img" alt="imagen error" />
        </div>
        <div id="box_content">
            <h1>Page not found</h1>
            <button onClick={navigateHome}>Back Home</button>
        </div>
        
      </div>
    );
  }
  
  export default Error;