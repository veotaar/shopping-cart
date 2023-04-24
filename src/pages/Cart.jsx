import { useCartAmount } from '../state/CartProvider';
import FullCart from '../components/FullCart';
import EmptyCart from '../components/EmptyCart';

function Cart() {
  const totalItemCountInCart = useCartAmount();

  return (
    <div className="min-h-[calc(100vh-3rem)] bg-gray-50 dark:bg-gray-800">
      {totalItemCountInCart < 1 ? <EmptyCart /> : <FullCart />}
    </div>
  );
}

export default Cart;
