import React from 'react';
import { ProductsBanner } from '../../components/ProductsBanner';
import { SearchFilter } from '../../components/Search/SearchFilter';
import { Categories } from './Categories';

export const ProductsScreen = () => {
  return (
    <div>
      <ProductsBanner />
      <SearchFilter />
      <Categories />
      <div className='productList__marginDiv'></div>
    </div>
  );
};
