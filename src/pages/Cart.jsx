import { useCartAmount } from '../state/CartProvider';
import FullCart from '../components/FullCart';
import EmptyCart from '../components/EmptyCart';

function Cart() {
  const totalItemCountInCart = useCartAmount();

  return (
    <div className="min-h-[calc(100vh-3rem)] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-50 to-gray-100">
      {totalItemCountInCart < 1 ? <EmptyCart /> : <FullCart />}
    </div>
  );
}

export default Cart;
