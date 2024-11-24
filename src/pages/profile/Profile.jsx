import React, { lazy } from "react";
const NavBarDefault = lazy(() =>
  import("../../components/navBar/NavBarDefault")
);
const CardProdile = lazy(() =>
  import("../../components/cardProfile/cardProfile")
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
      <CardProdile />
      <Footer />
    </>
  );
}

export default Profile;
