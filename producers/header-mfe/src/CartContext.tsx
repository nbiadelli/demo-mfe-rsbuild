import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from 'react';
import { Product } from './models/products';

interface CartContextType {
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = useCallback(
    (product: Product) => {
      setProducts((prevCart) => [...prevCart, product]);
    },
    [products],
  );

  const removeFromCart = useCallback((productId: number) => {
    setProducts((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  }, []);

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
