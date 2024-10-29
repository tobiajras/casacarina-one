import React from 'react';
import { GaleriaImagenes } from '../../components/GaleriaImagenes';
import { VisitarBanner } from '../../components/VisitarBanner';

export const AboutUs = () => {
  return (
    <div>
      <VisitarBanner />
      <div className='aboutUs__divDescripcionFlex'>
        <div className='aboutUs__divDescripcion'>
          <p>
            En Casa Carina, nos dedicamos desde hace años a proveer materiales
            de construcción y productos para el hogar de alta calidad, siempre
            enfocados en satisfacer las necesidades de nuestros clientes, ya
            sean profesionales del sector o personas que buscan mejorar sus
            espacios.
          </p>
          <p>
            Nuestro compromiso es ofrecerte una experiencia completa, desde
            productos de primera calidad hasta un servicio amable y
            personalizado, para que encuentres todo lo que necesitas en un solo
            lugar.
          </p>
        </div>
      </div>
      <div className='aboutUs__GaleriaImagenesFlex'>
        <div className='aboutUs__GaleriaImagenes'>
          <GaleriaImagenes />
        </div>
      </div>
    </div>
  );
};
