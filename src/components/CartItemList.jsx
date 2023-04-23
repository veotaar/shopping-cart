import CartItem from './CartItem';
import { useItemsInCart } from '../state/CartProvider';

function CartItemList() {
  const items = useItemsInCart();

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartItemList;
