import React from 'react';
import AutoCarousel from '../../components/AutoCarousel/AutoCarousel';
import CarouselSwiper from '../../components/CarouselSwiper/CarouselSwiper';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Informacion } from '../../components/Informacion/Informacion';
import { Categories } from '../products/Categories';

export const HomeScreen = () => {
  return (
    <div>
      <CarouselSwiper />
      <h1 className='homescreen__title'>Productos</h1>
      <Categories />
      <h1 className='homescreen__title'>Marcas</h1>
      <AutoCarousel />
      <h1 className='homescreen__title'>Información</h1>
      <Informacion />
      <h1 className='homescreen__title'>Ubicación</h1>
      <GoogleMaps />
    </div>
  );
};
