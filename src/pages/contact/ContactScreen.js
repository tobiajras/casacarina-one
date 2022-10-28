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
      <div className='contactScreen__informacionFlex'>
        <div className='contactScreen__informacion'>
          <Horarios />
          <Tarjetas />
          <Envios />
          <Atencion />
        </div>
      </div>
      <div className='contactScreen__GoogleMapsFlex'>
        <div className='contactScreen__GoogleMaps'>
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
};
