import React, { ReactNode } from 'react';
import { Product } from './models/products';
interface CartContextType {
    products: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}
export declare const CartProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useCartContext: () => CartContextType;
export {};
