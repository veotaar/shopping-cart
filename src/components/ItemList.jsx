import Item from './Item';
import { useCart } from '../state/CartProvider';

function ItemList() {
  const cartItems = useCart();
  return (
    <div className="mx-auto flex w-full flex-col gap-3 px-4 pt-4 sm:max-w-3xl">
      {cartItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
