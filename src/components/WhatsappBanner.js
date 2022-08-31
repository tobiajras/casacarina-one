import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const WhatsappBanner = () => {
  return (
    <div className='whatsappBanner__parentDiv'>
      <img
        className='whatsappBanner__bannerImg'
        src='/assets/banners/whatsappBanner.png'
        alt='Whatsapp Banner'
      />
      <div className='whatsappBanner__consultaDiv'>
        <div className='whatsappBanner__consultaText'>
          <h5>Envianos tu consulta por Whataspp</h5>
          <div className='whatsappBanner__consultaHashtag'>
            <h6>#Pedidos</h6>
            <h6>#Precios</h6>
          </div>
        </div>
        <a
          className='whatsappBanner__consultaLogo'
          href='https://wa.me/5491135560618/?text=Hola, queria solicitar lista de precios. Gracias'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          <h6>CONSULTAR</h6>
        </a>
      </div>
    </div>
  );
};
