import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer>
      <div className='footer__divParent'>
        <div className='footer__firstDiv'>
          <img
            src='/assets/logoCasacarina.svg'
            alt='casacarinaLogo'
            className='footer__casacarinaLogo'
          />
          <span>Homero 2762, entre Zuberoa y Bayona</span>
          <span>Lomas de Zamora</span>
          <span>4273-1474</span>
          <span>7500-8000</span>
        </div>
        <div className='footer__secondDiv'>
          <h4 className='footer__h4'>MENU</h4>
          <div className='footer__menuDiv'>
            <Link to={'/'} className='footer__linksMenu'>
              > Inicio
            </Link>
            <Link to={'productos'} className='footer__linksMenu'>
              > Productos
            </Link>
            <Link to={'nosotros'} className='footer__linksMenu'>
              > Nosotros
            </Link>
            <Link to={'contacto'} className='footer__linksMenu'>
              > Contacto
            </Link>
          </div>
        </div>
        <div className='footer__thirdtDiv'>
          <h4 className='footer__h4'>REDES</h4>
          <div className='footer__iconsDiv'>
            <a
              href='https://wa.me/5491135560618/?text=Hola, queria solicitar lista de precios. Gracias'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className='footer__icons' icon={faWhatsapp} />
            </a>
            <a
              href='https://www.facebook.com/CasaCarinaLomas/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className='footer__icons' icon={faFacebook} />
            </a>
            <a
              href='https://www.instagram.com/casacarinaok'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className='footer__icons' icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer__copyDiv'>
        <h5>Copyright © 2022 Casa Carina</h5>
      </div>
    </footer>
  );
};
