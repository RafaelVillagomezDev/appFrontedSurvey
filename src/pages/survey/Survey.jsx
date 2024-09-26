import React, { lazy } from "react";

const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const CardSurveyMain = lazy(() =>
  import("../../components/cardSurveyMain/CardSurveyMain")
);
const Footer = lazy(() => import("../../components/footer/Footer"));


import("styles/pages/_survey.scss").then(() => {
    console.log("Survey styles loaded");
  });

  
function Survey() {
  return (
    <>
      <NavBar />
      <CardSurveyMain />
      <Footer />
    </>
  );
}

export default Survey;
