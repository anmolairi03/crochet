import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Crocsets
            </div>
            <span className="text-sm text-purple-600 hidden sm:inline font-cute">
              Handmade Yarn Creations
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-purple-700 hover:text-pink-600 transition-colors font-semibold font-cute"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-purple-700 hover:text-pink-600 transition-colors font-semibold font-cute"
            >
              All Products
            </Link>
            <Link
              to="/products/keyrings"
              className="text-purple-700 hover:text-pink-600 transition-colors font-cute"
            >
              Keyrings
            </Link>
            <Link
              to="/products/bags"
              className="text-purple-700 hover:text-pink-600 transition-colors font-cute"
            >
              Bags
            </Link>
            <Link
              to="/products/flowers"
              className="text-purple-700 hover:text-pink-600 transition-colors font-cute"
            >
              Flowers
            </Link>
            <Link
              to="/products/decor"
              className="text-purple-700 hover:text-pink-600 transition-colors font-cute"
            >
              Decor
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center space-x-2 text-purple-700 hover:text-pink-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                {cartItemCount}
              </span>
            )}
            <span className="hidden sm:inline font-semibold font-cute">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

