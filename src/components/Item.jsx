import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import cn from 'classnames';

function Item({ item }) {
  const [addedAmount, setAddedAmount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-4 border border-gray-200 p-2 shadow-sm">
      <div className="w-3/6">
        <p className="text-gray-800">
          {item.name} - <span className="italic text-gray-600">{item.amount}</span>
        </p>
      </div>
      <div className="w-2/6 text-gray-800 sm:w-1/6">{item.price.toFixed(2)} €</div>
      <div className="flex w-2/6 items-center justify-center gap-1">
        <button
          className={cn(
            { hidden: addedAmount < 1 },
            'rounded-full bg-green-700  px-2 py-2 text-xl text-white hover:bg-green-900'
          )}
          type="button"
          onClick={() => setAddedAmount(addedAmount - 1)}
        >
          <AiOutlineMinus />
        </button>
        <div
          className={cn(
            { hidden: addedAmount < 1 },
            'w-8 rounded-full border border-gray-300 bg-gray-100 p-1 text-center sm:w-12'
          )}
        >
          {addedAmount}
        </div>
        <button
          className="rounded-full bg-green-700 px-2 py-2 text-xl text-white hover:bg-green-900"
          type="button"
          onClick={() => setAddedAmount(addedAmount + 1)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default Item;
