import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClickMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar__parentDiv">
      <div className="navbar__childDiv">
        <Link className="navbar__logoLink" to={"/"}>
          <img src="/assets/logoCasaCarina.svg" alt="LogoCasaCarina" />
        </Link>
      </div>
      <div className="navbar__menuIcon" onClick={handleClickMenu}>
        <i className={clicked ? "fas fa-times" : "fa fa-bars"}></i>
      </div>
      <nav className={clicked ? "navbar__menuList" : "navbar__menuList close"}>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "navbar__childNavlink_active"
              : "navbar__childNavlink"
          }
          to={"/"}
        >
          Inicio
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "navbar__childNavlink_active"
              : "navbar__childNavlink"
          }
          to={"productos"}
        >
          Productos
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "navbar__childNavlink_active"
              : "navbar__childNavlink"
          }
          to={"nosotros"}
        >
          Nosotros{" "}
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "navbar__childNavlink_active"
              : "navbar__childNavlink"
          }
          to={"contacto"}
        >
          Contacto
        </NavLink>
      </nav>
    </div>
  );
};
