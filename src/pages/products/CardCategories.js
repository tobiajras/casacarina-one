import React from "react";
import { Link, NavLink } from "react-router-dom";

export const CardCategories = ({ id, src, title }) => {
  return (
    <div className="cardcategories__parentDiv">
      <div className="cardcategories__divOne">
        <Link to={""}>
          <img src={`/assets/categories/${src}`} alt="" />
        </Link>
      </div>
      <div className="cardcategories__divTwo">
        <NavLink to={""} className="cardcategories__navlink">
          {title}
        </NavLink>
      </div>
    </div>
  );
};
