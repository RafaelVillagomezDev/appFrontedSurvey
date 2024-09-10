import React from "react";
import ListSurvey from "../../components/listSurvey/ListSurvey";
import NavBar from "../../components/navBar/NavBar";


import('../../styles/pages/_home.scss').then(() => {
  console.log('Home styles loaded');
});

function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default Home;
