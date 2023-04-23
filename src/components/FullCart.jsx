import CartItemList from './CartItemList';
import CartSummary from './CartSummary';

function FullCart() {
  return (
    <div className="mx-auto max-w-6xl px-3 pt-4">
      <div className="flex flex-col gap-4 md:justify-center lg:flex-row">
        <div className="">
          <CartItemList />
        </div>
        <div className="w-full">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default FullCart;
