export const ProductCard = ({ title, price, src }) => {
  return (
    <div className='productCard__parentDiv'>
      <div className='productCard__imgDiv'>
        <img className='productCard__img' src={src} alt='' />
      </div>
      <div className='productCard__titleDiv'>
        <h3>{title}</h3>
      </div>
      <div className='productCard__priceDiv'>
        <h4>${price}</h4>
      </div>
    </div>
  );
};
