import Item from './Item';
import { useCart, useCartDispatch } from '../state/CartProvider';

function ItemList() {
  const cartItems = useCart();
  const dispatch = useCartDispatch();
  return (
    <div className="mx-auto flex w-full flex-col gap-2 px-4 pt-4 sm:max-w-3xl">
      {cartItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <button
        onClick={() => dispatch({ type: 'increaseall' })}
        className="truncate rounded border border-green-900/25 p-3 text-lg text-green-900 transition-colors hover:bg-green-900 hover:text-white active:bg-green-700"
        type="button"
      >
        Add All to Cart
      </button>
    </div>
  );
}

export default ItemList;
