import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-babyPurple-200 to-babyBlue-100 text-babyPurple-800 mt-16 border-t-2 border-babyPurple-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-babyPurple-700 font-display font-bold text-xl mb-4">
              Crocsets
            </h3>
            <p className="text-sm font-hand">
              Handmade yarn creations crafted with love. Bringing warmth and beauty to your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-babyPurple-700 font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-hand">
              <li>
                <Link to="/" className="hover:text-babyPink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-babyPink-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-babyPink-600 transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-babyPurple-700 font-display font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm font-hand">
              <li>
                <Link to="/products/keyrings" className="hover:text-babyPink-600 transition-colors">
                  Keyrings
                </Link>
              </li>
              <li>
                <Link to="/products/bags" className="hover:text-babyPink-600 transition-colors">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products/flowers" className="hover:text-babyPink-600 transition-colors">
                  Flowers
                </Link>
              </li>
              <li>
                <Link to="/products/decor" className="hover:text-babyPink-600 transition-colors">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-babyPurple-700 font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-hand">
              <li>Email: hello@crocsets.com</li>
              <li>Phone: (555) 123-4567</li>
              <li className="pt-2">
                <span className="text-xs text-babyPurple-600">
                  Made with love for craft lovers
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-babyPurple-300 mt-8 pt-8 text-center text-sm text-babyPurple-700 font-hand">
          <p>&copy; {new Date().getFullYear()} Crocsets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

