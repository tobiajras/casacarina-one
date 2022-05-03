import React from 'react';
import { categoriesData } from '../../data/categoriesData';
import { CardCategories } from './CardCategories';

export const Categories = () => {
  return (
    <div className='categories__parentDiv'>
      <div className='categories__gridDiv'>
        {categoriesData.map((category) => (
          <CardCategories key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};
