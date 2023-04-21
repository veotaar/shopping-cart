import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

function Navbar() {
  const [activePage, setActivePage] = useState('/');
  const { pathname } = useLocation();

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <nav className="border-b border-gray-300 font-bold drop-shadow-sm">
      <ul className="flex items-center justify-start gap-10  px-12 py-4 text-gray-900">
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
          <Link to="/cart">My Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
