import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHandleOption, setSearchWord } from "../../slices/survey/surveySlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchWord = useSelector((state) => state.survey.searchTerm);
  const optionSelected=useSelector((state) => state.survey.optionSelect);

  const handleSearchWord = () => {
    dispatch(setSearchWord(event.target.value));
  };

  
  const handleOption = () => {
    dispatch(setHandleOption(event.target.value));
  };


  return (
    <div id="navlogin_container">
      <input
        type="search"
        value={searchWord}
        onChange={handleSearchWord}
        placeholder="Buscar"
        id="Buscador"
      />
      <select id="selectSearch" name="selectSearch" defaultValue={optionSelected} onChange={handleOption}>
        <option  value="" disabled >
          Elige una opción
        </option>
        <option value="Productos_Categoria">Categoría</option>
        <option value="Encuesta_ID" >
          Id Encuesta
        </option>
      </select>
    </div>
  );
}

export default SearchBar;
