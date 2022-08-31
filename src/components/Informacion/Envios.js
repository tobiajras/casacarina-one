import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export const Envios = () => {
  return (
    <div className='horarios__horariosDiv'>
      <div className='horarios__iconoHorariosDiv'>
        <FontAwesomeIcon className='horarios__iconoHorarios' icon={faTruck} />
      </div>
      <div className='horarios__detalleHorariosDiv'>
        <h4>Entregas a Domicilio</h4>
        <p>Consultanos zona de entrega y realiza tu pedido</p>
      </div>
    </div>
  );
};
