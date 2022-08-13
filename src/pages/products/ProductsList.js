import { getElementByCategory } from '../../selectors/getElementByCategory';
import { getElementByTitle } from '../../selectors/getElementByTitle';
import { useParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { SearchFilter } from '../../components/Search/SearchFilter';

export const ProductsList = ({ searchValue }) => {
  let params = useParams();
  console.log(params.title);
  // const products = getElementByCategory(params.title);
  const products = getElementByTitle(searchValue);
  return (
    <div>
      {/* <div className='productsList__bannerDiv'>
        <img
          className='productsList__banner'
          src={`/assets/banners/${params.title}Banner.jpg`}
          alt='banner'
        />
      </div> */}
      <div className='productsList__parentDiv'>
        <div className='productsList__gridDiv'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
