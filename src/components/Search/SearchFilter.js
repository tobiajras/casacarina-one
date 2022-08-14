import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [searchValue, setSearchValue] = useState(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/productos/busqueda?q=${searchValue}`);
  };

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className='searchFilter__div'>
        <form onSubmit={handleSearch} className='searchFilter__form'>
          <input
            className='searchFilter__input'
            value={searchValue}
            onChange={handleInputSearch}
            type='text'
            name=''
            id=''
            placeholder='Cemento...'
            autoComplete='none'
          />
          <FontAwesomeIcon
            className='searchFilter__icon'
            icon={faMagnifyingGlass}
          />
        </form>
      </div>
    </div>
  );
};
