import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchWord } from "../../slices/survey/surveySlice";

function SearchBar() {
    
    const dispatch = useDispatch()
    const searchWord = useSelector((state) => state.survey.searchTerm);
    const handleSearchWord=()=>{
         dispatch(setSearchWord(event.target.value))
    }

  return (
    <div id="navlogin_container">
      <input type="search" value={searchWord} onChange={handleSearchWord} placeholder="Busca una encuesta" id="Buscador" />
    </div>
  );
}

export default SearchBar;
