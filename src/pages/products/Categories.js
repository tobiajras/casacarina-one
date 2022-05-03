import React from "react";
import { categoriesData } from "../../data/categoriesData";
import { CardCategories } from "./CardCategories";
import { Outlet } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="categories__parentDiv">
      <div className="categories__gridDiv">
        {categoriesData.map((category) => (
          <CardCategories key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};
