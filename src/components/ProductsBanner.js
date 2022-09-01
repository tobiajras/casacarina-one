import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ProductsBanner = () => {
  return (
    <div className='productsBanner__parentDiv'>
      <img
        className='productsBanner__bannerImg'
        src='/assets/banners/productsBanner.jpg'
        alt='products Banner'
      />
      <div className='productsBanner__containerDiv'>
        <div className='productsBanner__hogarDiv'>
          <h4>"Todo para</h4>
          <h4 className='productsBanner__secondH4'>el Hogar"</h4>
        </div>
        <ul className='productsBanner__listUl'>
          <li>
            <FontAwesomeIcon
              className='productsBanner__icono icono1'
              icon={faCheckCircle}
            />
            <h5>Variedad</h5>
          </li>
          <li>
            <FontAwesomeIcon
              className='productsBanner__icono icono2'
              icon={faCheckCircle}
            />
            <h5>Calidad</h5>
          </li>
          <li>
            <FontAwesomeIcon
              className='productsBanner__icono icono3'
              icon={faCheckCircle}
            />
            <h5>Precios</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};
