import { CartProvider } from './CartContext';
import NavbarComponent from './NavbarComponent';

export default function Navbar() {
  return (
    <CartProvider>
      <NavbarComponent />
    </CartProvider>
  );
}
