import React from "react";
import Whatsapp from "../../../public/assets/icons/whatsapp.webp";
import Gmail from "../../../public/assets/icons/gmail.webp";
import Linkdn from "../../../public/assets/icons/linkedin.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  return (
    <div id="container_footer">
      
        <div className="box_footer-title">
          <a href="https://yandrydev.es/home" target="_blank">YandryDev</a>
        </div>
        <div className="box_footer">
          <ul className="list_footer">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </div>
        <div id="box_footer-line">
          <ul className="list_footer-social">
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
          </ul>
        </div>
      
    </div>
  );
}

export default Footer;
