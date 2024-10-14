import React, { ReactNode } from 'react';
import { CartContextType } from './models/productsCart';
export declare const CartContext: React.Context<CartContextType | undefined>;
export declare const CartProvider: React.FC<{
  children: ReactNode;
}>;
export declare const useCartContext: () => CartContextType;
