import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <header className="bg-gradient-to-r from-babyPink-50 to-babyBlue-50 shadow-lg sticky top-0 z-50 border-b-2 border-babyPurple-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-display font-bold bg-gradient-to-r from-babyPink-500 to-babyPurple-500 bg-clip-text text-transparent">
              Crocsets
            </div>
            <span className="text-sm text-babyPurple-600 hidden sm:inline font-hand font-medium">
              Handmade with Love
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand font-semibold"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand font-semibold"
            >
              All Products
            </Link>
            <Link
              to="/products/keyrings"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand"
            >
              Keyrings
            </Link>
            <Link
              to="/products/bags"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand"
            >
              Bags
            </Link>
            <Link
              to="/products/flowers"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand"
            >
              Flowers
            </Link>
            <Link
              to="/products/decor"
              className="text-babyPurple-700 hover:text-babyPink-600 transition-colors font-hand"
            >
              Decor
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center space-x-2 text-babyPurple-700 hover:text-babyPink-600 transition-colors"
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
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-babyPink-500 to-babyPurple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                {cartItemCount}
              </span>
            )}
            <span className="hidden sm:inline font-hand font-semibold">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

