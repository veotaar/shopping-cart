import { useCartAmount } from '../state/CartProvider';
import CartItemList from '../components/CartItemList';

function Cart() {
  const totalItemCountInCart = useCartAmount();

  return (
    <div>
      <h1>My Cart</h1>
      {totalItemCountInCart < 1 ? <p>Your cart is empty</p> : <CartItemList />}
    </div>
  );
}

export default Cart;
