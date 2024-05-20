// @ts-ignore
import PRODUCTS from "../assets/data/products";
import { Product } from "../store/initialState";

const products: Product[] = PRODUCTS;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: products });
    }, 1000); 
  });
};
