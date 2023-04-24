import { AiOutlineMinus } from 'react-icons/ai';
import { useCartTotalPrice } from '../state/CartProvider';

function CartSummary() {
  const totalPrice = useCartTotalPrice();
  const shippingPrice = 5;

  const sharedClasses = 'flex justify-between';

  const freeShipping = (
    <div className={sharedClasses}>
      <p>Free Shipping:</p>
      <p className="flex items-center text-gray-900 dark:text-gray-100">
        <AiOutlineMinus />€{shippingPrice.toFixed(2)}
      </p>
    </div>
  );

  return (
    <div className="w-full rounded border border-gray-300 bg-white p-4 shadow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 sm:max-w-md lg:mt-9">
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
        <p className="font-bold text-orange-700 dark:text-orange-500">
          {totalPrice >= 25
            ? `€${Number(totalPrice).toFixed(2)}`
            : `€${(Number(totalPrice) + shippingPrice).toFixed(2)}`}
        </p>
      </div>
      <button className="mt-3 w-full rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800" type="button">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
