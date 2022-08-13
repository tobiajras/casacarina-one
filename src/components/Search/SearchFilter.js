import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ProductsList } from '../../pages/products/ProductsList';

export const SearchFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [searchValue, setSearchValue] = useState(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchValue}`);
  };

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={searchValue}
          onChange={handleInputSearch}
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
