import { useCartDispatch } from '../state/CartProvider';

function Item({ item }) {
  const dispatch = useCartDispatch();

  return (
    <div className="flex items-center justify-center gap-4 rounded border border-gray-200 bg-white p-2 shadow-sm">
      <div className="w-3/6">
        <p className="text-gray-800">
          {item.name} - <span className="italic text-gray-600">{item.amount}</span>
        </p>
      </div>
      <div className="w-2/6 text-gray-800 sm:w-1/6">€{item.price.toFixed(2)}</div>
      <div>
        <button
          className="truncate rounded bg-green-100 px-4 py-2 text-green-900 transition-colors hover:bg-green-900 hover:text-white active:bg-green-700"
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
