import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLocalStorage } from "../../utils/storage/saveLocalStorage";
function NavBar() {
  const user = getLocalStorage("user");

  const salir = () => {
    localStorage.clear();
  };

  return (
    <div id="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li">
          <NavLink className="nav-route" to="/app">
            Home
          </NavLink>
        </li>
        <li className="navbar_li">
          <NavLink className="nav-route" to="/app/create">
            Crear
          </NavLink>
        </li>
        {user.rol == "admin" ? (
          <>
            <li className="navbar_li">
              <NavLink className="nav-route" to="/app/update">
                Actualizar
              </NavLink>
            </li>
          </>
        ) :<></>}
        <li className="navbar_li">
            <NavLink className="nav-route" to="/login" onClick={salir}>
              Salir
            </NavLink>
          </li>
      </ul>
    </div>
  );
}

export default NavBar;
