import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ProductsList } from '../../pages/products/ProductsList';

export const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  console.log(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          name=''
          id=''
          placeholder='Arena...'
          autoComplete='none'
        />
      </form>
      <ProductsList searchValue={searchValue} />
    </div>
  );
};
