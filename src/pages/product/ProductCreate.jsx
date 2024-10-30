import React, { lazy } from "react";

const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const CardSurveyMain = lazy(() =>
  import("../../components/cardSurveyMain/CardSurveyMain")
);
const Footer = lazy(() => import("../../components/footer/Footer"));


import("styles/pages/_survey.scss").then(() => {
    console.log("Survey styles loaded");
  });

  
function ProductCreate() {
  return (
    <>
      <NavBar />
      
      <Footer />
    </>
  );
}

export default ProductCreate;
