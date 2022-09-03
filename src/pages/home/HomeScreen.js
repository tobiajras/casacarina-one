import React from 'react';
import { AutoCarousel2 } from '../../components/AutoCarousel2/AutoCarousel2';
import CarouselSwiper from '../../components/CarouselSwiper/CarouselSwiper';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Atencion } from '../../components/Informacion/Atencion';
import { Envios } from '../../components/Informacion/Envios';
import { Horarios } from '../../components/Informacion/Horarios';
import { Tarjetas } from '../../components/Informacion/Tarjetas';
import { ProductsBanner } from '../../components/ProductsBanner';
import { WhatsappBanner } from '../../components/WhatsappBanner';
import { Categories } from '../products/Categories';

export const HomeScreen = () => {
  return (
    <div>
      <CarouselSwiper />
      <div className='homescreen__ProductsBannerDiv'>
        <ProductsBanner />
      </div>
      <Categories />
      <div className='homescreen__AutoCarousel2Div'>
        <AutoCarousel2 />
      </div>
      <div className='homescreen__WhatsappBannerDiv'>
        <WhatsappBanner />
      </div>
      <div className='homescreen__informacion'>
        <Horarios />
        <Tarjetas />
        <Envios />
        <Atencion />
      </div>
      <GoogleMaps />
    </div>
  );
};
