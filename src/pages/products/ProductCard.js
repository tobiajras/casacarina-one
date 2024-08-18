export const ProductCard = ({ DESCRIPCION, PRECIO, SRC }) => {
  // const precioDolar = 1040;

  return (
    <div className='productCard__parentDiv'>
      <div className='productCard__imgDiv'>
        <img
          className='productCard__img'
          src={`/assets/productos${SRC}`}
          alt='imagenProducto'
        />
      </div>
      <div className='productCard__details'>
        {/* <div className='productCard__priceDiv'>
          <h3>${Math.ceil((PRECIO * precioDolar) / 10) * 10}</h3>
        </div> */}
        <div className='productCard__titleDiv'>
          <h4>{DESCRIPCION}</h4>
        </div>
        <div className='productCard__whatsappDiv'>
          <a
            className='productCard__whatsapp'
            href={`https://wa.me/5491135560618/?text=Hola, quería saber el precio de ${DESCRIPCION}`}
            target='_blank'
            rel='noopener noreferrer'
            alt='whatsapp button'
          >
            CONSULTAR
          </a>
        </div>
      </div>
    </div>
  );
};
