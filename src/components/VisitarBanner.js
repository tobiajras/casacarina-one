import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const VisitarBanner = () => {
  return (
    <div className='visitarBanner__parentDiv'>
      <div className='visitarBanner__consultaDiv'>
        <div className='visitarBanner__consultaText'>
          <h5>Mas de 40 años</h5>
          <h5>de Experiencia</h5>
          <div className='visitarBanner__consultaHashtag'>
            <h6>#Lomas de Zamora</h6>
          </div>
        </div>
        <a
          className='visitarBanner__consultaLogo'
          href='https://www.google.com/maps/place/Casa+Carina/@-34.7394597,-58.4592977,15z/data=!4m5!3m4!1s0x0:0xda0c8e4831dd87e0!8m2!3d-34.7394597!4d-58.4592977'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            className='visitarBanner__icono'
            icon={faLocationDot}
          />
          <h6>VISITAR</h6>
        </a>
      </div>
    </div>
  );
};
