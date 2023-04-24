import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useCartAmount } from '../state/CartProvider';

function Navbar() {
  const [activePage, setActivePage] = useState('/');
  const { pathname } = useLocation();

  const totalItemCountInCart = useCartAmount();

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <nav className="sticky top-0 flex h-12 items-center border-b border-gray-300 bg-white font-bold drop-shadow-sm dark:border-gray-800 dark:bg-gray-700">
      <div className="w-full lg:mx-auto lg:max-w-6xl">
        <ul className="flex flex-1 items-center justify-start  gap-10  px-3 text-gray-900 dark:text-gray-50">
          <li
            className={cn(
              {
                'border-b-2': activePage === '/',
                'border-green-700': activePage === '/',
                'text-green-700': activePage === '/',
                'border-b-gray-900': activePage !== '/',
                'dark:border-green-400': activePage === '/',
                'dark:text-green-400': activePage === '/',
                'dark:border-b-gray-600': activePage !== '/',
              },
              'hover:border-green-700 hover:text-green-700 hover:dark:border-green-400 hover:dark:text-green-400'
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
                'dark:border-green-400': activePage === '/shop',
                'dark:text-green-400': activePage === '/shop',
                'dark:border-b-gray-600': activePage !== '/shop',
              },
              'hover:border-green-700 hover:text-green-700 hover:dark:border-green-400 hover:dark:text-green-400'
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
                'dark:border-green-400': activePage === '/cart',
                'dark:text-green-400': activePage === '/cart',
                'dark:border-b-gray-600': activePage !== '/cart',
              },
              'ml-auto hover:border-green-700 hover:text-green-700 hover:dark:border-green-400 hover:dark:text-green-400'
            )}
          >
            <Link to="/cart">
              <p className="truncate">
                My Cart{' '}
                <span className="text-green-700 dark:text-green-400">
                  {totalItemCountInCart > 0 ? `(${totalItemCountInCart})` : null}
                </span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
