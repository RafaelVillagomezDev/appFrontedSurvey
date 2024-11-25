import React from "react";
import { FiEdit } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { FaRegAddressCard } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profile from "../../../public/assets/img/profile.webp";

function CardProfile() {
  return (
    <div id="profile">
      <div className="container_profile">
        <div className="container_profile-column profile-box_one">
          <div id="card" className="container_profile-card">
            <div className="card_container">
              <div className="card_container-box">
                <h3>
                  Yandry Rafael <FiEdit />
                </h3>
                <h4>Villagomez Montero</h4>
              </div>
              <div className="card_container-box">
                <h5>
                  yandry75@gmail.com <SiMinutemailer />
                </h5>
                <h5>
                  15/06/1998 <BsCake2 />
                </h5>
                <h5>
                  51802765A <FaRegAddressCard />
                </h5>
              </div>
            </div>
            <div className="card_container">
              <figure>
             
                <img  id="profile_img" src={profile} alt="Profile" />
                
              </figure>
            </div>
          </div>
        </div>
        <div className="container_profile-column profile-box_two">
          <div className="container_profile-box box_green-high">
            <h2>Encuestas Totales</h2>
            <p>12000</p>
          </div>
          <div className="container_profile-box box_green-low">
            <h2>Mis encuestas</h2>
            <p>40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  CardProfile;
