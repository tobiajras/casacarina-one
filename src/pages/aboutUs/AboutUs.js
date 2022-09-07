import React from 'react';
import { VisitarBanner } from '../../components/VisitarBanner';

import { galeriaData } from '../../data/galeriaData';

export const AboutUs = () => {
  return (
    <div>
      <VisitarBanner />
      <div className='aboutUs__divDescripcion'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          doloribus voluptatibus quae dolore, exercitationem recusandae officiis
          iste molestias dignissimos molestiae libero maxime voluptates neque
          autem eligendi velit laudantium ratione harum modi excepturi.
        </p>
        <img src='/assets/Fondos/salon3.png' alt='salonImagen' />
      </div>
      {/* <h4>Galeria</h4>
      <div className='aboutUs__gridGaleria'>
        {galeriaData.map((img) => {
          return (
            <div className='aboutUs__divGaleria' key={img.id}>
              <img src={`/assets/galeria/${img.src}`} alt={img.title} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
