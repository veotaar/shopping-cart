import { AiOutlineMinus } from 'react-icons/ai';
import { useCartTotalPrice } from '../state/CartProvider';

function CartSummary() {
  const totalPrice = useCartTotalPrice();
  const shippingPrice = 5;

  const sharedClasses = 'flex justify-between';

  const freeShipping = (
    <div className={sharedClasses}>
      <p>Free Shipping:</p>
      <p className="flex items-center text-gray-900">
        <AiOutlineMinus />€{shippingPrice.toFixed(2)}
      </p>
    </div>
  );

  return (
    <div className="max-w-xs border px-4 py-4">
      <h2 className="mb-2 text-xl font-bold">Order Summary</h2>
      <div className={sharedClasses}>
        <p>Items total:</p>
        <p>€{totalPrice}</p>
      </div>
      <div className={sharedClasses}>
        <p>Shipping:</p>
        <p>€{shippingPrice.toFixed(2)}</p>
      </div>
      {totalPrice >= 25 ? freeShipping : null}
      <div className={`${sharedClasses} mt-2`}>
        <p className="font-bold">Order total:</p>
        <p className="font-bold text-orange-700">
          {totalPrice >= 25 ? `€${totalPrice}` : `€${Number(totalPrice) + shippingPrice}`}
        </p>
      </div>
      <button className="mt-3 w-full rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800" type="button">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
