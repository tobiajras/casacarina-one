import { productos } from '../data/productosData';

export const getElementByCategory = (category) => {
  return productos.filter((producto) => producto.category === category);
};
