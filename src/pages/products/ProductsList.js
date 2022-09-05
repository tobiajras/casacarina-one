import { useLocation, useNavigate } from 'react-router-dom';
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
import { AutoCarousel2 } from '../../components/AutoCarousel2/AutoCarousel2';

import { CircularProgress, Alert } from '@mui/material';

export const ProductsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search); // search query
  const { c = '' } = queryString.parse(location.search); // category query
  const { i = 0 } = queryString.parse(location.search); // index query (pagination)
  const indexPage = parseInt(i); // queryParam i (string) to a number

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 20;
  const search = location.search;

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const res = await axios.get('/casacarinaDataProductos.json');
      const { data } = res;
      filterData(q, c, data).then(
        setProducts((products) =>
          products.slice(indexPage, indexPage + productsPerPage)
        )
      );
      setIsLoading(false);
    };
    getProducts();
  }, [search]); //  eslint-disable-line react-hooks/exhaustive-deps

  const filterData = (q, c, dataFetch) => {
    if (q !== '') {
      setProducts(
        dataFetch.filter((oneData) =>
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
    } else if (c !== '') {
      setProducts(
        dataFetch.filter(
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
    return new Promise((resolve) => {
      resolve(dataFetch);
    });
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - productsPerPage);
      navigate(`/productos/busqueda?q=${q}&c=${c}&i=${currentPage - 20}`);
    }
  };

  const nextPage = () => {
    if (products.length === productsPerPage) {
      setCurrentPage(currentPage + productsPerPage);
      navigate(`/productos/busqueda?q=${q}&c=${c}&i=${currentPage + 20}`);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [q, c]);

  if (isLoading) {
    return (
      <div className='productsList__loadingDiv'>
        <CircularProgress style={{ color: '#1f263f' }} />
      </div>
    );
  } else if (products.length >= 1) {
    return (
      <div>
        <SearchFilter />
        <div className='productsList__parentDiv'>
          <div className='productsList__gridDiv'>
            {products.map((product) => (
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
        <AutoCarousel2 />
      </div>
    );
  }
  return (
    <div>
      <SearchFilter />
      <div className='productList__noResults'>
        <Alert severity='error'>
          No se encontraron coincidencias con "{q}"
        </Alert>
      </div>
    </div>
  );
};
