import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export const Informacion = () => {
  return (
    <div className='informacion__parentDiv'>
      <div className='informacion__horariosDiv'>
        <div className='informacion__iconoHorariosDiv'>
          <FontAwesomeIcon
            className='informacion__iconoHorarios'
            icon={faClock}
          />
        </div>
        <div className='informacion__detalleHorariosDiv'>
          <h4>Lúnes a Viernes</h4>
          <div className='informacion__horaDetalleHorariosDiv'>
            <p>8:00 a 12:00hs</p>
            <p>14:00 a 17:30hs</p>
          </div>
          <h4>Sábados</h4>
          <p>8:00 a 13:00hs</p>
        </div>
      </div>
      <div className='informacion__tarjetaDiv'>
        <div className='informacion__iconoTarjetaDiv'>
          <FontAwesomeIcon
            className='informacion__iconTarjeta'
            icon={faCreditCard}
          />
        </div>
        <div className='informacion__detalleTarjetaDiv'>Detalle Tarjeta</div>
      </div>
    </div>
  );
};
