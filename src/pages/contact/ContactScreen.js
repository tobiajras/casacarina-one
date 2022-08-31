import React from 'react';
import { WhatsappBanner } from '../../components/WhatsappBanner';
import { GoogleMaps } from '../../components/GoogleMaps';
import { Horarios } from '../../components/Informacion/Horarios';

export const ContactScreen = () => {
  return (
    <div>
      <WhatsappBanner />
      <Horarios />
      <GoogleMaps />
    </div>
  );
};
