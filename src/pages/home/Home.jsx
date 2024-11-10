import React, { lazy, startTransition, useEffect } from "react";

const ListSurvey = lazy(() => import("../../components/listSurvey/ListSurvey"));
const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const Footer = lazy(() => import("../../components/footer/Footer"));
import('styles/pages/_home.scss').then(() => {
  console.log('Home styles loaded');
}).catch((error) => {
  console.error('Error loading product styles:', error);
});
function Home() {  
  
 


  
  return (
    <>
      <NavBar />
      <ListSurvey />
      <Footer/>
    </>
  );
}

export default Home;
