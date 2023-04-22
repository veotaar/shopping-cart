import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const initialCart = [
  {
    id: 1,
    name: 'Bananas',
    amount: '1 kg',
    price: 2.19,
    amountInCart: 0,
  },
  {
    id: 2,
    name: 'Lemons',
    amount: '5 pack',
    price: 1.4,
    amountInCart: 0,
  },
  {
    id: 3,
    name: 'Potatoes',
    amount: '3 kg',
    price: 4.49,
    amountInCart: 0,
  },
  {
    id: 4,
    name: 'Avocado',
    amount: 'each',
    price: 1.39,
    amountInCart: 0,
  },
  {
    id: 5,
    name: 'Apples',
    amount: '1.5 kg',
    price: 2.49,
    amountInCart: 0,
  },
  {
    id: 6,
    name: 'Oranges',
    amount: '2 kg',
    price: 2.99,
    amountInCart: 0,
  },
  {
    id: 7,
    name: 'Onions',
    amount: '1 kg',
    price: 1.24,
    amountInCart: 0,
  },
  {
    id: 8,
    name: 'Carrots',
    amount: '500 g',
    price: 1.09,
    amountInCart: 0,
  },
  {
    id: 9,
    name: 'Beets',
    amount: '500 g',
    price: 1.39,
    amountInCart: 0,
  },
  {
    id: 10,
    name: 'Tomatoes',
    amount: '500 g',
    price: 2.19,
    amountInCart: 0,
  },
  {
    id: 11,
    name: 'Butternut Squash',
    amount: 'each',
    price: 2.98,
    amountInCart: 0,
  },
  {
    id: 12,
    name: 'Tangerines',
    amount: '1 kg',
    price: 2.85,
    amountInCart: 0,
  },
];

function cartReducer(cart, action) {
  switch (action.type) {
    case 'update': {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
