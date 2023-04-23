import { createContext, useContext, useReducer } from 'react';
import { initialCart } from './data';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

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
    case 'increase': {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            amountInCart: action.payload.amountInCart + 1,
          };
        }
        return item;
      });
    }
    case 'decrease': {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            amountInCart: action.payload.amountInCart - 1,
          };
        }
        return item;
      });
    }
    case 'delete': {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            amountInCart: 0,
          };
        }
        return item;
      });
    }
    case 'reset': {
      return initialCart;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    // prettier-ignore
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export function useCartAmount() {
  const cart = useContext(CartContext);
  const totalItemCountInCart = cart.reduce((accumulator, currentValue) => accumulator + currentValue.amountInCart, 0);
  return totalItemCountInCart;
}

export function useCartTotalPrice() {
  const cart = useContext(CartContext);
  const orderTotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amountInCart * currentValue.price,
    0
  );
  return orderTotal.toFixed(2);
}

export function useItemsInCart() {
  const cart = useContext(CartContext);
  const filteredCart = cart.filter((item) => item.amountInCart >= 1);
  return filteredCart;
}
