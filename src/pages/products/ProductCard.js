export const ProductCard = ({ title, price, src }) => {
  return (
    <div className='productCard__parentDiv'>
      <div className='productCard__imgDiv'>
        <img className='productCard__img' src={src} alt='' />
      </div>
      <div className='productCard__details'>
        <div className='productCard__priceDiv'>
          <h3>${price}</h3>
        </div>
        <div className='productCard__titleDiv'>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};
