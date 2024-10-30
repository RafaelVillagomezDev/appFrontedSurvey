import React, { lazy } from "react";

const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const Survey = lazy(() => import("../../components/survey/Survey"));
const Footer = lazy(() => import("../../components/footer/Footer"));


import("styles/pages/_surveyCreate.scss").then(() => {
    console.log("Survey Create styles loaded");
  });

  
function SurveyCreate() {
  return (
    <>
      <NavBar />
      <Survey/>
      <Footer />
    </>
  );
}

export default SurveyCreate;
