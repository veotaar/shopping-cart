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
        className="truncate rounded border border-green-900/25 p-3 text-green-900 transition-colors hover:bg-green-900 hover:text-white active:bg-green-700 dark:border-green-100/25 dark:text-green-400 hover:dark:bg-green-400 hover:dark:text-green-950 active:dark:bg-green-500"
        type="button"
      >
        Add All to Cart
      </button>
    </div>
  );
}

export default ItemList;
