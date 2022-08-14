// import { getElementByCategory } from '../../selectors/getElementByCategory';
import { getElementByTitle } from '../../selectors/getElementByTitle';
import { getElementByCategory } from '../../selectors/getElementByCategory';
import { useLocation } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useState, useEffect } from 'react';

import queryString from 'query-string';
import { SearchFilter } from '../../components/Search/SearchFilter';

export const ProductsList = () => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);

  useEffect(() => {
    if (c !== '') {
      setProducts(getElementByCategory(c));
    }
  }, [c]);

  useEffect(() => {
    if (q !== '') {
      setProducts(getElementByTitle(q));
    }
  }, [q]);

  const [products, setProducts] = useState([]);
  return (
    <div>
      <SearchFilter />
      {/* <div className='productsList__bannerDiv'>
        <img
          className='productsList__banner'
          src={`/assets/banners/${params.title}Banner.jpg`}
          alt='banner'
        />
      </div> */}
      <div className='productsList__parentDiv'>
        <div className='productsList__gridDiv'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
