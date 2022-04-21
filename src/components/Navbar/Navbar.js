import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar__parentDiv">
      <div className="navbar__childDiv">
        <Link className="navbar__childLink" to={"/"}>
          <img src="/assets/logoCasaCarina.svg" alt="LogoCasaCarina" />
        </Link>
      </div>
      <nav className="navbar__childNav">
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
