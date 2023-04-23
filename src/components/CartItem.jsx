import { useCallback, useEffect, useState } from 'react';
import { useCartDispatch } from '../state/CartProvider';

function CartItem({ item }) {
  const dispatch = useCartDispatch();
  const [amountString, setAmountString] = useState('1');

  useEffect(() => {
    setAmountString(item.amountInCart);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setAmountInCart = useCallback(
    (amount) => {
      dispatch({
        type: 'update',
        payload: {
          ...item,
          amountInCart: amount,
        },
      });
    },
    [dispatch, item]
  );

  return (
    <div className="flex">
      <p>{item.name}</p>
      <div>
        <button type="button">-</button>
        <input
          type="text"
          value={amountString}
          onChange={(e) => {
            const received = e.target.value;
            if (received === '') {
              setAmountString('');
              setAmountInCart(1);
            } else if (received !== '0' && !Number.isNaN(Number(received))) {
              setAmountString(received);
              setAmountInCart(Number(received));
            }
          }}
          onBlur={() => {
            if (amountString === '') {
              setAmountString('1');
            }
          }}
        />
        <button type="button">+</button>
      </div>
      <p>{(item.price * item.amountInCart).toFixed(2)}</p>
      <p>delete</p>
    </div>
  );
}

export default CartItem;
