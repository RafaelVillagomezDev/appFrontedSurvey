import React, { lazy } from "react";


const NavBarDefault = lazy(() => import("../../components/navBar/NavBarDefault"));
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
      <NavBarDefault/>
      <CardSurveyMain />
      <Footer />
    </>
  );
}

export default Survey;
