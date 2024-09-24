import React, { lazy, startTransition, useEffect } from "react";

import("../../styles/pages/_home.scss").then(() => {
  console.log("Home styles loaded");
});

const ListSurvey = lazy(() => import("../../components/listSurvey/ListSurvey"));
const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const SearchBar=lazy(() => import("../../components/searchBar/SearchBar"));

function Home() {
  return (
    <>
      <NavBar />
       <SearchBar/>
      <ListSurvey />
      <Footer/>
    </>
  );
}

export default Home;
