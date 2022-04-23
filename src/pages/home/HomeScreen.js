import React from "react";
// import { Carousel } from "../../components/Carousel/Carousel";
import Swiperr from "../../components/Swiper/Swiperr";
import { Categories } from "../products/Categories";

export const HomeScreen = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <Swiperr />
      <h1 className="homescreen__title">Productos</h1>
      <Categories />
      <h1 className="homescreen__title">Marcas</h1>
    </div>
  );
};
