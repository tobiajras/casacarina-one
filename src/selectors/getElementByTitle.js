import { productos } from '../data/productosData';

export const getElementByTitle = (title) => {
  return productos.filter((producto) => producto.title === title);
};
