import { Link } from 'react-router-dom';
import cn from 'classnames';

function Home() {
  const gradientClasses = 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-50 to-gray-100';
  return (
    <div className={cn('flex h-[calc(100vh-3rem)] justify-center pt-16', gradientClasses)}>
      <div className="max-w-2xl">
        <h1 className="mb-6 text-4xl font-bold text-gray-800 lg:text-6xl">
          From farm to table,
          <br />
          without the hassle.
        </h1>
        <Link className="self-start" to="/shop">
          <button
            className="rounded bg-green-600 px-6 py-2 text-lg font-bold text-white hover:bg-green-700"
            type="button"
          >
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
