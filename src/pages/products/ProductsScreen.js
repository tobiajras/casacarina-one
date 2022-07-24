import React from 'react';
import { SearchInput } from '../../components/Search/SearchInput';
import { Categories } from './Categories';

export const ProductsScreen = () => {
  return (
    <div>
      <h1>Products Screen</h1>
      <SearchInput />
      <Categories />
    </div>
  );
};
