import React from 'react';
import { WhatsappBanner } from '../../components/WhatsappBanner';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Horarios } from '../../components/Informacion/Horarios';
import { Tarjetas } from '../../components/Informacion/Tarjetas';
import { Envios } from '../../components/Informacion/Envios';
import { Atencion } from '../../components/Informacion/Atencion';

export const ContactScreen = () => {
  return (
    <div>
      <WhatsappBanner />
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
