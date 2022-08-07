import React from 'react';
import { SearchFilter } from '../../components/Search/SearchFilter';
import { Categories } from './Categories';

export const ProductsScreen = () => {
  return (
    <div>
      <h1>Products Screen</h1>
      <SearchFilter />
      <Categories />
    </div>
  );
};
