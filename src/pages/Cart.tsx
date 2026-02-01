import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 bg-gradient-to-br from-babyPink-50 via-beige-50 to-babyBlue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-babyPurple-700 mb-8">Shopping Cart</h1>
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-babyBlue-100">
            <svg
              className="mx-auto h-24 w-24 text-babyBlue-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="text-xl text-babyPurple-700 mb-4 font-hand">Your cart is empty</p>
            <button onClick={() => navigate('/products')} className="btn-primary">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-babyPink-50 via-beige-50 to-babyBlue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-babyPurple-700 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="card p-6 bg-white border border-babyBlue-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.product.images[0] || '/api/placeholder/200/200'}
                    alt={item.product.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg bg-babyBlue-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-babyPurple-700 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 font-hand">
                      {item.product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold bg-gradient-to-r from-babyPink-500 to-babyPurple-500 bg-clip-text text-transparent">
                          {formatPrice(item.product.price)}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 border-2 border-babyPurple-300 rounded flex items-center justify-center hover:border-babyPink-500 hover:bg-babyPink-50 transition-colors font-hand"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold font-hand">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 border-2 border-babyPurple-300 rounded flex items-center justify-center hover:border-babyPink-500 hover:bg-babyPink-50 transition-colors font-hand"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-babyPurple-700">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-sm text-babyPink-600 hover:text-babyPink-800 mt-2 font-hand"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-babyPink-600 hover:text-babyPink-800 font-hand font-medium"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24 bg-white border border-babyBlue-100">
              <h2 className="text-2xl font-display font-bold text-babyPurple-700 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 font-hand">
                <div className="flex justify-between text-babyPurple-700">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-babyPurple-700">
                  <span>Shipping</span>
                  <span className="font-semibold">{formatPrice(5.99)}</span>
                </div>
                <div className="border-t border-babyPurple-200 pt-4 flex justify-between text-xl font-bold text-babyPurple-700">
                  <span>Total</span>
                  <span>{formatPrice(getTotalPrice() + 5.99)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary w-full py-3 text-lg mb-4"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/products')}
                className="btn-secondary w-full py-3"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

