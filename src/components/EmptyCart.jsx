import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="pt-10 text-center">
      <h1 className="mb-4 text-2xl text-gray-800 dark:text-gray-100">Your cart is empty.</h1>
      <Link className="self-start" to="/shop">
        <button
          className="rounded bg-green-600 px-6 py-2 text-lg font-bold text-white hover:bg-green-700"
          type="button"
        >
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
