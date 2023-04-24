import { useCartDispatch } from '../state/CartProvider';

function Item({ item }) {
  const dispatch = useCartDispatch();

  return (
    <div className="flex items-center justify-center gap-4 rounded border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-600 dark:bg-gray-700">
      <div className="w-3/6">
        <p className="text-gray-800 dark:text-white">
          {item.name} - <span className="italic text-gray-600 dark:text-gray-200">{item.amount}</span>
        </p>
      </div>
      <div className="w-2/6 text-gray-800 dark:text-gray-100 sm:w-1/6">€{item.price.toFixed(2)}</div>
      <div>
        <button
          className="truncate rounded border border-green-900/25 px-4 py-2 text-green-900 transition-colors hover:bg-green-900 hover:text-white active:bg-green-700 dark:border-green-100/25 dark:text-green-400 hover:dark:bg-green-400 hover:dark:text-green-950 active:dark:bg-green-500"
          type="button"
          onClick={() =>
            dispatch({
              type: 'increase',
              payload: {
                ...item,
              },
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
