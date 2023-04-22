import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useCart } from '../state/CartProvider';

function Navbar() {
  const [activePage, setActivePage] = useState('/');
  const { pathname } = useLocation();

  const cartItems = useCart();
  const totalItemCountInCart = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amountInCart,
    0
  );

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <nav className="flex h-12 items-center border-b border-gray-300 font-bold drop-shadow-sm">
      <ul className="flex flex-1 items-center justify-start gap-10  px-12  text-gray-900">
        <li
          className={cn(
            {
              'border-b-2': activePage === '/',
              'border-green-700': activePage === '/',
              'text-green-700': activePage === '/',
              'border-b-gray-900': activePage !== '/',
            },
            'hover:border-green-700 hover:text-green-700'
          )}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={cn(
            {
              'border-b-2': activePage === '/shop',
              'border-green-700': activePage === '/shop',
              'text-green-700': activePage === '/shop',
              'border-b-gray-900': activePage !== '/shop',
            },
            'hover:border-green-700 hover:text-green-700'
          )}
        >
          <Link to="/shop">Shop</Link>
        </li>
        <li
          className={cn(
            {
              'border-b-2': activePage === '/cart',
              'border-green-700': activePage === '/cart',
              'text-green-700': activePage === '/cart',
              'border-b-gray-900': activePage !== '/cart',
            },
            'ml-auto hover:border-green-700 hover:text-green-700'
          )}
        >
          <Link to="/cart">
            My Cart{' '}
            <span className="text-green-700">{totalItemCountInCart > 0 ? `(${totalItemCountInCart})` : null}</span>{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
