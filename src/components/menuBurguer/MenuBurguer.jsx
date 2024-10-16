import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import { itemLinks } from "./menuList/menuList";
import { ImExit } from "react-icons/im";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/login/loginSlice";

function MenuBurguer(props) {
  const dispatch = useDispatch();
  const salir = () => {
    dispatch(logout());
  };

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div id="menuBurguer" className={`${props.isOpen ? "open" : "close"}`}>
      <div className="menuBurguer_container">
        <div className="menuBurguer_box">
          <button
            className="menuBurguer_btn-close"
            onClick={props.handleClose ? props.handleClose : undefined}
          >
            <GrClose />
          </button>
        </div>
        <div className="menuBurguer_box">
          <menu className="menuBurger_navbar">
            {itemLinks.map((item, index) => (
              <div key={index}>
                <li
                  className="menuBurguer_navbar-link"
                  onClick={() => handleItemClick(index)}
                >
                  {item.name}
                  <span className="menuBurguer_icon">{item.component}</span>
                </li>
                <menu className="menuBurger_navbar-sublink">
                  {openItemIndex === index && (
                    <menu className="menuBurger_navbar-sublink">
                      {item.subItems.map((subitem, subindex) => (
                        <NavLink
                          className="menuBurguer_navbar-link"
                          to={subitem.url}
                          key={subindex}
                        >
                          {subitem.name}
                          <span className="menuBurguer_icon">
                            {subitem.component}
                          </span>
                        </NavLink>
                      ))}
                    </menu>
                  )}
                </menu>
              </div>
            ))}
            <li className="menuBurguer_navbar-link" onClick={salir}>
              Cerrar sesion
              <span className="menuBurguer_icon">
                <ImExit />
              </span>
            </li>
          </menu>
        </div>
      </div>
    </div>
  );
}

export default MenuBurguer;
