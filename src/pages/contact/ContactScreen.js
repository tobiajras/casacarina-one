import React from 'react';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Horarios } from '../../components/Informacion/Horarios';

export const ContactScreen = () => {
  return (
    <div>
      <div className='contactScreen__bannerDiv'>
        <img
          className='contactScreen__banner'
          src={`/assets/banners/frenteFondo.png`}
          alt='banner'
        />
      </div>
      <Horarios />
      <GoogleMaps />
    </div>
  );
};
