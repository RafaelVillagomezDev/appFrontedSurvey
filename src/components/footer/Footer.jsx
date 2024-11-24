import React from "react";
import Whatsapp from "../../../public/assets/icons/whatsapp.webp";
import Gmail from "../../../public/assets/icons/gmail.webp";
import Linkdn from "../../../public/assets/icons/linkedin.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div id="container_footer">
        <div className="box_footer">
          <h3 className="box_footer-title">ClickSurvey</h3>
        </div>
        <div className="box_footer">
          <ul className="box_list">
            <h3>Compañia</h3>
            <NavLink to={"/app"}>Inicio</NavLink>
            <NavLink to={"/app"}>FAQS</NavLink>
          </ul>
        </div>
        <div className="box_footer">
          <ul className="box_list">
            <h3>Servicios</h3>
            <NavLink to={"/app"}>Encuestas</NavLink>
            <NavLink to={"/app"}>Perfil</NavLink>
          </ul>
        </div>

        <div className="box_footer">
          <ul className="list_footer-social">
            <h3>Social</h3>
            <div id="box_footer-align">
              <li>
                <a
                  href="https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20"
                  target="_blank"
                >
                  <LazyLoadImage src={Whatsapp} alt="Whatsapp" height={30} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20"
                  target="_blank"
                >
                  <LazyLoadImage src={Gmail} alt="Gmail" height={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rafaelvillagomez/"
                  target="_blank"
                >
                  <LazyLoadImage src={Linkdn} alt="Linkdn" height={30} />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
