import React, { startTransition } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";
import { FaAlignJustify } from "react-icons/fa6";

function NavBar() {
  const user = getLocalStorage("user");
  const navigate = useNavigate();

  const salir = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div id="navbar">
      <div className="navbar_container">
        <div className="navbar_box">
          <h1 id="navbar_title">ClickSurvey</h1>
        </div>
        <div id="navbar_header-main" className="navbar_box">
          <ul className="navbar_ul">
            <li className="navbar_li">
              <NavLink className="nav-route" to="/app">
                Home
              </NavLink>
            </li>
            <li className="navbar_li">
              <NavLink className="nav-route" to="/create">
                Crear
              </NavLink>
            </li>
         
            <li className="navbar_li">
              <NavLink className="nav-route" to="/login" onClick={salir}>
                Salir
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar_box">
          <button className="navbar_btn">
            <FaAlignJustify />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
