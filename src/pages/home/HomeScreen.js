import React from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { Categories } from "../products/Categories";

export const HomeScreen = () => {
  return (
    <div>
      <Carousel />
      <h1 className="homescreen__title">Productos</h1>
      <Categories />
      <h1 className="homescreen__title">Marcas</h1>
    </div>
  );
};
