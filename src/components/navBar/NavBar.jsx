import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {

  const salir=()=>{
    localStorage.clear();
  }
  return (
    <div id="navbar">
      <ul className="navbar_ul">
        <li className="navbar_li">
          <NavLink className="nav-route" to="/app"> Home</NavLink>
        </li>
        <li className="navbar_li">
          
          <NavLink className="nav-route" to="/app/create">Crear</NavLink>
        </li>
        <li className="navbar_li">
        <NavLink className="nav-route" to="/login" onClick={salir}>Salir</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
