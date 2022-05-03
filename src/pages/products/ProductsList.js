import { getElementByCategory } from '../../selectors/getElementByCategory';
import { useParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';

export const ProductsList = () => {
  let params = useParams();
  const products = getElementByCategory(params.title);
  return (
    <div className='productsList__parentDiv'>
      <div className='productsList__gridDiv'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};