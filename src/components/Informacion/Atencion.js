import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

export const Atencion = () => {
  return (
    <div className='atencion__atencionDiv'>
      <div className='atencion__iconoAtencionDiv'>
        <FontAwesomeIcon
          className='atencion__iconoAtencion'
          icon={faUsersViewfinder}
        />
      </div>
      <div className='atencion__detalleAtencionDiv'>
        <h4>Atención Personalizada</h4>
        <p>Excelente atención y a disposición</p>
      </div>
    </div>
  );
};
