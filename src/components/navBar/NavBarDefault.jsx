import React, { lazy, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import useDevice from "../../customHooks/reponsive/useDevice";


const MenuBurguer = lazy(() => import("../menuBurguer/MenuBurguer"));

function NavBarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useDevice();

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="navbar">
        <div className="navbar_container">
          <div className="navbar_box">
            <h1 id="navbar_title">ClickSurvey</h1>
          </div>
          
          <div className="navbar_box">
            <button className="navbar_btn" onClick={handleClose}>
              <FaAlignJustify />
            </button>
          </div>
        </div>
      </div>
      <MenuBurguer isOpen={isOpen} handleClose={handleClose} />
    </>
  );
}

export default NavBarDefault;
