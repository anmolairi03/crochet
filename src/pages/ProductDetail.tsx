import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, categoryNames } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { formatPrice } from '../utils/currency';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = id ? getProductById(id) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/products')} className="btn-primary">
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Optional: Show success message or navigate to cart
  };

  const images = product.images.length > 0 ? product.images : ['/api/placeholder/500/500'];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-primary-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/products" className="text-primary-600 hover:underline">Products</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link
            to={`/products/${product.category}`}
            className="text-primary-600 hover:underline"
          >
            {categoryNames[product.category]}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImageIndex === index
                        ? 'border-primary-600'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-display font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {categoryNames[product.category]}
              </span>
              {product.featured && (
                <span className="inline-block bg-accent-100 text-accent-800 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-600 font-semibold flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-semibold flex items-center">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            {product.inStock && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-primary-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-primary-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            {product.inStock ? (
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full py-3 text-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate('/cart')}
                  className="btn-secondary w-full py-3 text-lg"
                >
                  View Cart
                </button>
              </div>
            ) : (
              <button
                disabled
                className="btn-primary w-full py-3 text-lg opacity-50 cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

