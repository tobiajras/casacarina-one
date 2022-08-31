import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

import { cardsData } from '../../data/cardsData';

import React from 'react';

export const Tarjetas = () => {
  return (
    <div className='tarjetas__tarjetasDiv'>
      <div className='tarjetas__iconotarjetasDiv'>
        <FontAwesomeIcon
          className='tarjetas__iconotarjetas'
          icon={faCreditCard}
        />
      </div>
      <div className='tarjetas__detalletarjetasDiv'>
        {cardsData.map((card) => {
          return (
            <div key={card.title} className='tarjetas__cardDiv'>
              <img src={`/assets/cards/${card.src}`} alt={card.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
