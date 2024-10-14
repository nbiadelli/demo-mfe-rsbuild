import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Cards from './Cards';
import { mockProducts } from './Cards.mockdata';

let mockEvent: {
  eventBus: {
    subscribe: jest.Mock;
    dispatch: jest.Mock;
    unsubscribe: jest.Mock;
  };
};
beforeAll(() => {
  mockEvent = {
    eventBus: {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      unsubscribe: jest.fn(),
    },
  };
  Object.defineProperty(window, 'eventBus', { value: mockEvent.eventBus });
});

describe('render padrão', () => {
  let setStateMock: jest.Mock;
  beforeEach(() => {
    setStateMock = jest.fn();

    const useStateMock: () => [
      unknown,
      React.Dispatch<React.SetStateAction<unknown>>,
    ] = () => [mockProducts, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ products: [mockProducts] }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renderiza Cards com 2 produtos', () => {
    render(<Cards />);
    expect(screen.getByText(/Powder Canister/i)).toBeInTheDocument();
    expect(screen.getByText(/Red Nail Polish/i)).toBeInTheDocument();
  });

  test("renderiza Cards com 2 produtos e clica em 'Add to cart' 2 vezes no primeiro produto", () => {
    render(<Cards />);

    const addToCart = within(screen.getByTestId('card-3')).getByText(
      /add to cart/i,
    );
    addToCart.click();
    expect(mockEvent.eventBus.dispatch).toHaveBeenCalledWith(
      'ADD_PRODUCT_CART',
      mockProducts.find((x) => x.id === 3),
    );
    addToCart.click();
    expect(mockEvent.eventBus.dispatch).toHaveBeenNthCalledWith(
      2,
      'ADD_PRODUCT_CART',
      mockProducts.find((x) => x.id === 3),
    );
  });
});
