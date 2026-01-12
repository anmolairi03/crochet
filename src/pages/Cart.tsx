import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-gray-800 mb-8">Shopping Cart</h1>
          <div className="text-center py-16 bg-white rounded-lg">
            <svg
              className="mx-auto h-24 w-24 text-gray-400 mb-4"
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
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <button onClick={() => navigate('/products')} className="btn-primary">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="card p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.product.images[0] || '/api/placeholder/200/200'}
                    alt={item.product.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          {formatPrice(item.product.price)}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-colors font-cute"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold font-cute">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-colors font-cute"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-sm text-red-600 hover:text-red-800 mt-2"
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
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">{formatPrice(5.99)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
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

