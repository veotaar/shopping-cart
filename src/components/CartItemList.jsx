import CartItem from './CartItem';
import { useItemsInCart, useCartDispatch, useCartTotalPrice } from '../state/CartProvider';

function CartItemList() {
  const items = useItemsInCart();
  const dispatch = useCartDispatch();
  const itemsTotal = useCartTotalPrice();

  return (
    <div className="flex flex-col sm:max-w-2xl">
      <h1 className="mb-2 text-xl font-bold">My Cart</h1>

      <div className="flex  flex-col gap-2 rounded border border-gray-300 bg-white p-2 shadow">
        <p>{itemsTotal >= 25 ? 'Free shipping applied!' : 'Free shipping on orders of €25 or more.'}</p>

        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <button
          className="self-start text-gray-600 hover:font-bold hover:text-red-700"
          onClick={() => dispatch({ type: 'reset' })}
          type="button"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartItemList;
