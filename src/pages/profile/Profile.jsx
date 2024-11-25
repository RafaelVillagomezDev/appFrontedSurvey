import React, { lazy } from "react";
const NavBarDefault = lazy(() =>
  import("../../components/navBar/NavBarDefault")
);
const CardProfile = lazy(() =>
  import("../../components/cardProfile/CardProfile")
);

const ChartProfile = lazy(() =>
  import("../../componentsChart/chartProfile/ChartProfile")
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
      <CardProfile />
      <ChartProfile/>
      <Footer />
    </>
  );
}

export default Profile;
