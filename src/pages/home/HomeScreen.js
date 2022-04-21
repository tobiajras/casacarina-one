import React from "react";
import { Categories } from "../products/Categories";

export const HomeScreen = () => {
  return (
    <div>
      <h1 className="homescreen__title">Productos</h1>
      <Categories />
      <h1 className="homescreen__title">Marcas</h1>
    </div>
  );
};
