import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // const query = queryString.parse(location.search);
  const { q = '' } = queryString.parse(location.search);
  console.log(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchValue}`);
  };

  // const handleReset = () => {};

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          name=''
          id=''
          placeholder='Cemento...'
          autoComplete='none'
        />
      </form>
      {}
    </div>
  );
};
