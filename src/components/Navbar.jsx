import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="font-bold">
      <ul className="flex justify-start gap-10 bg-orange-700 px-12 py-4 text-white">
        <li className="hover:text-orange-100">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-100">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="ml-auto hover:text-orange-100">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
