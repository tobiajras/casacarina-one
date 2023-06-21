import React from 'react';
import { Link } from 'react-router-dom';

export const CardCategories = ({ src, title }) => {
  return (
    <div className="cardcategories__parentDiv">
      <div className="cardcategories__divOne">
        <Link
          className="cardcategories__a"
          to={`/productos/busqueda?c=${title}`}
        >
          <img
            className="cardcategories__img"
            src={`/assets/categories/${src}`}
            alt={title}
          />
        </Link>
        <div className="cardcategories__titleDiv">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};
