import { useCallback, useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import cn from 'classnames';
import { useCartDispatch } from '../state/CartProvider';

function CartItem({ item }) {
  const dispatch = useCartDispatch();
  const [amountString, setAmountString] = useState('1');
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

  useEffect(() => {
    setAmountString(item.amountInCart);
  }, [item.amountInCart]);

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
    <div className={cn({ 'bg-gray-50': isDeleteHovered }, 'flex items-center gap-8 sm:gap-16')}>
      <p className="truncate">{item.name}</p>
      <div className="ml-auto flex h-9 items-center border border-gray-300">
        <button
          onClick={() => {
            dispatch({
              type: 'decrease',
              payload: {
                ...item,
              },
            });
          }}
          disabled={item.amountInCart <= 1}
          className="h-full bg-gray-200 px-1 hover:bg-gray-300 disabled:opacity-50"
          type="button"
        >
          <AiOutlineMinus />
        </button>
        <input
          className="h-9 w-16 border-x border-gray-300 text-center focus:ring-inset focus:ring-green-500"
          type="text"
          value={amountString}
          onChange={(e) => {
            const received = e.target.value;
            if (received === '') {
              setAmountString('');
              // setAmountInCart(1);
            } else if (received !== '0' && !Number.isNaN(Number(received))) {
              setAmountString(received);
              setAmountInCart(Number(received));
            }
          }}
          onBlur={() => {
            if (amountString === '') {
              setAmountString('1');
              setAmountInCart(1);
            }
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: 'increase',
              payload: {
                ...item,
              },
            });
          }}
          className="h-full bg-gray-200 px-1 hover:bg-gray-300"
          type="button"
        >
          <AiOutlinePlus />
        </button>
      </div>
      <p className="w-16 text-center">€{(item.price * item.amountInCart).toFixed(2)}</p>
      <button
        onMouseEnter={() => setIsDeleteHovered(true)}
        onMouseLeave={() => setIsDeleteHovered(false)}
        onClick={() =>
          dispatch({
            type: 'delete',
            payload: {
              ...item,
            },
          })
        }
        className="text-lg text-gray-400 hover:text-gray-800"
        type="button"
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default CartItem;
