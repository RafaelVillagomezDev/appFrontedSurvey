import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import MenuBurguer from "../menuBurguer/MenuBurguer";
import SearchBar from "../searchBar/SearchBar";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navbar">
      <div className="navbar_container">
        <div className="navbar_box">
          <h1 id="navbar_title">ClickSurvey</h1>
        </div>
        <div id="navbar_header-main" className="navbar_box">
          <SearchBar />
        </div>
        <div className="navbar_box">
          <button className="navbar_btn" onClick={handleClose}>
            <FaAlignJustify />
          </button>
        </div>
      </div>
      <MenuBurguer isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}

export default NavBar;
