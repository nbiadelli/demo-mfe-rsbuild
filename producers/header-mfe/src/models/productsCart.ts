import { Product } from './products';

export interface ProductCart {
  product: Product;
  quantity: number;
  value: number;
}
export interface CartContextType {
  products: ProductCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (
    event: React.MouseEvent<Element, MouseEvent>,
    productId: number,
  ) => void;
  decremnentProduct: (productId: number) => void;
}
