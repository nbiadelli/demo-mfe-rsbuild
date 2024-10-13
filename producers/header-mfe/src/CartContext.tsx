import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from 'react';
import { Product } from './models/products';
import { CartContextType, ProductCart } from './models/productsCart';

const CartContext = createContext<CartContextType | undefined>(undefined);
document.body.onclick = () => {
  const dropdown: HTMLElement | null = document.querySelector('.dropdown');
  dropdown?.classList.remove('dropdown-open');
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductCart[]>([]);

  const addToCart = useCallback((product: Product) => {
    setProducts((prevProducts) => {
      const existingProductIndex = prevProducts.findIndex(
        (p) => p.product.id === product.id,
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex].quantity += 1;
        updatedProducts[existingProductIndex].value =
          updatedProducts[existingProductIndex].quantity * product.price;
        return updatedProducts;
      } else {
        return [
          ...prevProducts,
          { product, quantity: 1, value: product.price },
        ];
      }
    });
  }, []);

  const removeFromCart = useCallback(
    (event: Event, productId: number) => {
      // necessário para impedir de fechar o dropdown quando um item é removido.
      event.stopPropagation()
      const dropdown: HTMLElement | null = document.querySelector('.dropdown');
      dropdown?.classList.add('dropdown-open');
      setProducts((prevCartItems) =>
        prevCartItems.filter((x) => x.product.id !== productId),
      );
    },
    [setProducts],
  );

  const decremnentProduct = useCallback((productId: number) => {
    setProducts((prevCart) =>
      prevCart.map((productCart) =>
        productCart.product.id === productId
          ? {
              ...productCart,
              quantity: Math.max(0, productCart.quantity - 1),
              value: Math.max(0, productCart.value - productCart.product.price),
            }
          : productCart,
      ),
    );
  }, []);

  return (
    <CartContext.Provider
      value={{ products, addToCart, decremnentProduct, removeFromCart }}
    >
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
