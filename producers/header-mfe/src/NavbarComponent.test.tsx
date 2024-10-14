import { render, screen } from '@testing-library/react';
import NavbarComponent from './NavbarComponent';
import { CartProvider, CartContext } from './CartContext';
import { CartContextType, ProductCart } from './models/productsCart';
import { mockProduct } from './NavbarComponent.mockdata';

const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }: { providerProps?: CartContextType } = {},
) => {
  return render(
    <CartContext.Provider value={providerProps}>{ui}</CartContext.Provider>,
    renderOptions,
  );
};

beforeAll(() => {
  const mockEvent = {
    eventBus: {
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    },
  };
  Object.defineProperty(window, 'eventBus', { value: mockEvent.eventBus });
});

describe('render padrão', () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <NavbarComponent />
      </CartProvider>,
    );
  });

  test('renderiza NavbarComponent', () => {
    const linkElement = screen.getByText(/NatyShop/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renderiza cart dropdown com 0 produtos', () => {
    const cartDropdown = screen.getByTestId('btn-cart');
    cartDropdown.click();
    const zeroItem = screen.getByText(/0 Item/);
    expect(zeroItem).toBeInTheDocument();
  });
});

describe('render customizado', () => {
  test('renderiza cart dropdown com 1 produto', () => {
    customRender(<NavbarComponent />, {
      providerProps: {
        products: [
          { product: mockProduct, quantity: 1, value: 10 },
        ] as ProductCart[],
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
        decremnentProduct: jest.fn(),
      },
    });

    const cartDropdown = screen.getByTestId('btn-cart');
    cartDropdown.click();
    const item = screen.getByText(/1 Item/);
    expect(item).toBeInTheDocument();
  });

  test('renderiza cart dropdown com 1 produto e incrementa a quantidade', () => {
    const providerProps = {
      products: [
        { product: mockProduct, quantity: 1, value: 10 },
      ] as ProductCart[],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      decremnentProduct: jest.fn(),
    };
    customRender(<NavbarComponent />, { providerProps });

    screen.getByTestId('btn-cart').click();
    screen.getByTestId('btn-add-to-cart').click();
    expect(providerProps.addToCart).toHaveBeenCalledWith(
      expect.objectContaining(mockProduct),
    );
  });

  test('renderiza cart dropdown com 4 produtos e decrementa a quantidade', () => {
    const providerProps = {
      products: [
        { product: mockProduct, quantity: 4, value: 10 },
      ] as ProductCart[],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      decremnentProduct: jest.fn(),
    };
    customRender(<NavbarComponent />, { providerProps });

    screen.getByTestId('btn-cart').click();
    screen.getByTestId('btn-decr-to-cart').click();
    expect(providerProps.decremnentProduct).toHaveBeenCalledWith(
      mockProduct.id,
    );
  });

  test('renderiza cart dropdown com 1 produto e remove', () => {
    const providerProps = {
      products: [
        { product: mockProduct, quantity: 1, value: 10 },
      ] as ProductCart[],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      decremnentProduct: jest.fn(),
    };
    customRender(<NavbarComponent />, { providerProps });

    screen.getByTestId('btn-cart').click();
    screen.getByTestId('btn-remove-item').click();
    expect(providerProps.removeFromCart).toHaveBeenCalledWith(
      expect.anything(),
      mockProduct.id,
    );
  });
});
