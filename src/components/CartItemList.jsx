import CartItem from './CartItem';
import { useItemsInCart, useCartDispatch } from '../state/CartProvider';

function CartItemList() {
  const items = useItemsInCart();
  const dispatch = useCartDispatch();

  return (
    <div className="flex max-w-2xl flex-col">
      <div className="flex  flex-col gap-2 border-y-2 border-y-gray-300 py-2">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <button
        className="self-start text-gray-600 hover:font-bold hover:text-red-700"
        onClick={() => dispatch({ type: 'reset' })}
        type="button"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartItemList;
