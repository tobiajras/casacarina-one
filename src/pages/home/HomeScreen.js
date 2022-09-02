import React from 'react';
import { AutoCarousel2 } from '../../components/AutoCarousel2/AutoCarousel2';
import CarouselSwiper from '../../components/CarouselSwiper/CarouselSwiper';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Envios } from '../../components/Informacion/Envios';
import { Horarios } from '../../components/Informacion/Horarios';
import { Tarjetas } from '../../components/Informacion/Tarjetas';
import { WhatsappBanner } from '../../components/WhatsappBanner';
import { Categories } from '../products/Categories';

export const HomeScreen = () => {
  return (
    <div>
      <CarouselSwiper />
      <h1 className='homescreen__title'>Productos</h1>
      <Categories />
      <h1 className='homescreen__title'>Marcas</h1>
      <AutoCarousel2 />
      <WhatsappBanner />
      <Horarios />
      <Tarjetas />
      <Envios />
      <h1 className='homescreen__title'>Ubicación</h1>
      <GoogleMaps />
    </div>
  );
};
