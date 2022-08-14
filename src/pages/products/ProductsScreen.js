import React from 'react';
import { SearchFilter } from '../../components/Search/SearchFilter';
import { Categories } from './Categories';

export const ProductsScreen = () => {
  return (
    <div>
      <div className='productsList__bannerDiv'>
        <img
          className='productsList__banner'
          src={`/assets/banners/construccionBanner.jpg`}
          alt='banner'
        />
      </div>
      <SearchFilter />
      <Categories />
    </div>
  );
};
