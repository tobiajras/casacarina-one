import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ProductsBanner = () => {
  return (
    <div className='productsBanner__parentDiv'>
      <div className='productsBanner__consultaDiv'>
        <div className='productsBanner__consultaText'>
          <h5>Encontrá todo</h5>
          <h5>lo que buscás</h5>
          <div className='productsBanner__consultaHashtag'>
            <h6>#Productos</h6>
            <h6>#Calidad</h6>
          </div>
        </div>
        <Link
          className='productsBanner__consultaLogo'
          to={'/productos/busqueda?c=construccion'}
        >
          <FontAwesomeIcon className='productsBanner__icono' icon={faSearch} />
          <h6>BUSCAR</h6>
        </Link>
      </div>
    </div>
  );
};
