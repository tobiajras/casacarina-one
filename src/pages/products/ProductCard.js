export const ProductCard = ({ DESCRIPCION, PRECIO, SRC }) => {
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
        <div className='productCard__priceDiv'>
          <h3>${PRECIO}</h3>
        </div>
        <div className='productCard__titleDiv'>
          <h4>{DESCRIPCION.substring(0, 45)}</h4>
        </div>
      </div>
    </div>
  );
};
