import React, { lazy, startTransition, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import('../../styles/pages/_home.scss').then(() => {
  console.log('Home styles loaded');
});


const ListSurvey = lazy(() => import("../../components/listSurvey/ListSurvey"));
function Home() {
  
  return (
    <>
      <NavBar />
      <ListSurvey/>
    </>
  );
}

export default Home;
