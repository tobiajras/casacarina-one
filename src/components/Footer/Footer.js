import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className='footer__footer'>
      <div className='footer__divParent'>
        <div className='footer__firstDiv'>
          <h4 className='footer__h4'>CONTACTO</h4>
          <div className='footer__contactDiv'>
            <a
              className='footer__aContact'
              href='https://www.google.com/maps/place/Casa+Carina/@-34.7394597,-58.4592977,15z/data=!4m5!3m4!1s0x0:0xda0c8e4831dd87e0!8m2!3d-34.7394597!4d-58.4592977'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                className='footer__contactIcon'
                icon={faLocationDot}
              />
              <span>Homero 2762, Lomas de Zamora</span>
            </a>
            <a className='footer__aContact' href='tel:+5411427314'>
              <FontAwesomeIcon className='footer__contactIcon' icon={faPhone} />
              <span>4273-1474</span>
            </a>
          </div>
        </div>
        <div className='footer__secondDiv'>
          <h4 className='footer__h4'>MENU</h4>
          <div className='footer__menuDiv'>
            <Link to={'/'} className='footer__linksMenu'>
              <FontAwesomeIcon
                className='footer__contactIcon'
                icon={faAngleRight}
              />
              Inicio
            </Link>
            <Link to={'productos'} className='footer__linksMenu'>
              <FontAwesomeIcon
                className='footer__contactIcon'
                icon={faAngleRight}
              />
              Productos
            </Link>
            <Link to={'nosotros'} className='footer__linksMenu'>
              <FontAwesomeIcon
                className='footer__contactIcon'
                icon={faAngleRight}
              />
              Nosotros
            </Link>
            <Link to={'contacto'} className='footer__linksMenu'>
              <FontAwesomeIcon
                className='footer__contactIcon'
                icon={faAngleRight}
              />
              Contacto
            </Link>
          </div>
        </div>
        <div className='footer__thirdtDiv'>
          <h4 className='footer__h4'>REDES</h4>
          <div className='footer__iconsDiv'>
            <h4 className='foooter__iconsDivH4'>
              Seguinos en nuestras redes sociales:
            </h4>
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
