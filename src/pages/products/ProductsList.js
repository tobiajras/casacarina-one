// import { getElementByCategory } from '../../selectors/getElementByCategory';
// import { getElementByTitle } from '../../selectors/getElementByTitle';
// import { getElementByCategory } from '../../selectors/getElementByCategory';
import { useLocation } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useState, useEffect } from 'react';

import queryString from 'query-string';
import { SearchFilter } from '../../components/Search/SearchFilter';

import axios from 'axios';

export const ProductsList = () => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);
  const ubicacion = queryString.parse(location.search);
  console.log(ubicacion);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const res = await axios.get('/casacarinaDataProductos.json');
      const { data } = res;
      getByCategory(data);
      getByDescription(data);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const getByCategory = (data) => {
    if (c !== '') {
      setProducts(
        data.filter(
          (oneData) => oneData.LISTA.toLowerCase() === c.toLowerCase()
        )
      );
    }
  };

  const getByDescription = (data) => {
    if (q !== '') {
      setProducts(
        data.filter((oneData) =>
          oneData.DESCRIPCION.toLowerCase().includes(q.toLowerCase())
        )
      );
    }
  };

  console.log(products);
  console.log(isLoading);

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
            <ProductCard key={product.CODIGO} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
