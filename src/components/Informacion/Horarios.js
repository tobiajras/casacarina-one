import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Horarios = () => {
  return (
    <div className='horarios__horariosDiv'>
      <div className='horarios__iconoHorariosDiv'>
        <FontAwesomeIcon className='horarios__iconoHorarios' icon={faClock} />
      </div>
      <div className='horarios__detalleHorariosDiv'>
        <h4>Lúnes a Viernes</h4>
        <p>8:00 a 12:00hs y 14:00 a 17:30hs</p>
        <h4>Sábados</h4>
        <p>8:00 a 13:00hs</p>
      </div>
    </div>
  );
};
