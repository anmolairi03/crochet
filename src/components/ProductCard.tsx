import { Link } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/currency";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="card group">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
