import React from 'react';

import './autoCarousel2.scss';
import { marcasData } from '../../data/marcasData';

export const AutoCarousel2 = () => {
  return (
    <div
      className='autoCarousel2__parentDiv'
      onAnimationIterationCapture={console.log('itero!')}
    >
      {marcasData.map((marca) => {
        return (
          <div key={marca.id} className='autoCarousel2__div'>
            <img src={`/assets/Marcas/${marca.src}`} alt='' />
          </div>
        );
      })}
    </div>
  );
};
