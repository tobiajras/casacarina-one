import React from "react";
import { Link } from "react-router-dom";

export const CardCategories = ({ id, src, title }) => {
  return (
    <div className="cardcategories__parentDiv">
      <div className="cardcategories__divOne">
        <Link to={`/productos/${title}`}>
          <img src={`/assets/categories/${src}`} alt="" />
        </Link>
      </div>
      <div className="cardcategories__divTwo">
        <Link to={`/productos/${title}`} className="cardcategories__navlink">
          {title}
        </Link>
      </div>
    </div>
  );
};
