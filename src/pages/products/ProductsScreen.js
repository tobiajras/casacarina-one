import React from 'react';
import { AutoCarousel2 } from '../../components/AutoCarousel2/AutoCarousel2';
import { ProductsBanner } from '../../components/ProductsBanner';
import { SearchFilter } from '../../components/Search/SearchFilter';
import { Categories } from './Categories';

export const ProductsScreen = () => {
  return (
    <div>
      <ProductsBanner />
      <SearchFilter />
      <Categories />
      <div className='productList__AutoCarousel2Div'>
        <AutoCarousel2 />
      </div>
      <div className='productList__marginDiv'></div>
    </div>
  );
};
