import React from 'react';

export const AboutUs = () => {
  return (
    <div>
      <div className='aboutUs__bannerDiv'>
        <img
          className='aboutUs__banner'
          src={`/assets/banners/frenteFondo.png`}
          alt='banner'
        />
      </div>
      <div className='aboutUs__divDescripcion'>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          doloribus voluptatibus quae dolore, exercitationem recusandae officiis
          iste molestias dignissimos molestiae libero maxime voluptates neque
          autem eligendi velit laudantium ratione harum modi excepturi.
        </h4>
        <img src='/assets/Fondos/salon3.png' alt='salonImagen' />
      </div>
    </div>
  );
};
