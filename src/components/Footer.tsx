import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-4">
              Crocsets
            </h3>
            <p className="text-sm">
              Handmade yarn creations crafted with love. Bringing warmth and beauty to your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-400 transition-colors font-cute">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-pink-400 transition-colors font-cute">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-pink-400 transition-colors font-cute">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/keyrings" className="hover:text-pink-400 transition-colors font-cute">
                  Keyrings
                </Link>
              </li>
              <li>
                <Link to="/products/bags" className="hover:text-pink-400 transition-colors font-cute">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products/flowers" className="hover:text-pink-400 transition-colors font-cute">
                  Flowers
                </Link>
              </li>
              <li>
                <Link to="/products/decor" className="hover:text-pink-400 transition-colors font-cute">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@crocsets.com</li>
              <li>Phone: (555) 123-4567</li>
              <li className="pt-2">
                <span className="text-xs text-gray-500">
                  Made with love for craft lovers
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Crocsets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

