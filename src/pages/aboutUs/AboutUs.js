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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            doloribus voluptatibus quae dolore, exercitationem recusandae
            officiis iste molestias dignissimos molestiae libero maxime
            voluptates neque autem eligendi velit laudantium ratione harum modi
            excepturi.
          </p>
          <p>
            Exercitationem recusandae officiis iste molestias dignissimos
            molestiae libero maxime voluptates neque autem eligendi velit
            laudantium ratione harum modi excepturi.
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
