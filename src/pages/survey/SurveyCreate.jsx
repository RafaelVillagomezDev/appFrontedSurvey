import React, { lazy, useEffect } from "react";

const NavBarDefault = lazy(() => import("../../components/navBar/NavBarDefault"));
const Survey = lazy(() => import("../../components/survey/Survey"));
const Footer = lazy(() => import("../../components/footer/Footer"));

import("styles/pages/_surveyCreate.scss")
.then(() => {
  console.log("Survey styles loaded");
})
.catch((error) => {
  console.error("Error loading survey styles:", error);
});

function SurveyCreate() {
 

  return (
    <>
      <NavBarDefault/>
      <Survey />
      <Footer />
    </>
  );
}

export default SurveyCreate;
