import React, { lazy } from "react";
import { FiEdit } from "react-icons/fi";

const NavBarDefault = lazy(() =>
  import("../../components/navBar/NavBarDefault")
);
const Footer = lazy(() => import("../../components/footer/Footer"));
import("styles/pages/_profile.scss")
  .then(() => {
    console.log("Profile styles loaded");
  })
  .catch((error) => {
    console.error("Error loading profile styles:", error);
  });
function Profile() {
  return (
    <>
      <NavBarDefault />
      <div id="profile">
        <div className="container_profile">
          <div className="container_profile-column profile-box_one">
            <div id="card" className="container_profile-card">
                <div className="card_container">
                   <h3>Yandry Rafael <FiEdit /> </h3>
                   <h4>Villagomez Montero</h4>
                   <p></p>
                </div>
                <div className="card_container">
                  <h3>Foto</h3>
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
      <Footer />
    </>
  );
}

export default Profile;
