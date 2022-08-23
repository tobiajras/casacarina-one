import { useLocation } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useState, useEffect } from 'react';

import queryString from 'query-string';
import { SearchFilter } from '../../components/Search/SearchFilter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

export const ProductsList = () => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const { c = '' } = queryString.parse(location.search);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const productsForPage = 20;

  const filteredProducts = () => {
    return products.slice(currentPage, currentPage + productsForPage);
  };

  const previousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - productsForPage);
  };

  const nextPage = () => {
    if (products.length > currentPage + productsForPage)
      setCurrentPage(currentPage + productsForPage);
  };

  console.log(currentPage);
  console.log(productsForPage);
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const res = await axios.get('/casacarinaDataProductos.json');
      const { data } = res;
      getByCategory(data);
      getByDescription(data);
      setCurrentPage(0);
      setIsLoading(false);
    };
    getProducts();
  }, [q]); //  eslint-disable-line react-hooks/exhaustive-deps

  const getByCategory = (data) => {
    if (c !== '') {
      setProducts(
        data.filter(
          (oneData) =>
            oneData.LISTA.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') ===
            c
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
        )
      );
    }
  };

  const getByDescription = (data) => {
    if (q !== '') {
      setProducts(
        data.filter((oneData) =>
          oneData.DESCRIPCION.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(
              q
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            )
        )
      );
    }
  };

  console.log(products);
  console.log(isLoading);

  if (isLoading) {
    return (
      <div>
        <h4>Cargando...</h4>
      </div>
    );
  } else if (products.length >= 1) {
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
            {filteredProducts().map((product) => (
              <ProductCard key={product.CODIGO} {...product} />
            ))}
          </div>
        </div>
        <div className='productList__pagination'>
          <button onClick={previousPage}>
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <button onClick={nextPage}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h4>Sin resultados</h4>
    </div>
  );
};
