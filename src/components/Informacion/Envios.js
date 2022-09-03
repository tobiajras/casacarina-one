import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export const Envios = () => {
  return (
    <div className='envios__enviosDiv'>
      <div className='envios__iconoEnviosDiv'>
        <FontAwesomeIcon className='envios__iconoEnvios' icon={faTruck} />
      </div>
      <div className='envios__detalleEnviosDiv'>
        <h4>Entregas a Domicilio</h4>
        <p>Consultanos zona de entrega y realiza tu pedido</p>
      </div>
    </div>
  );
};
