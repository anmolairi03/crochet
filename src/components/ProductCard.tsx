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
    <Link to={`/product/${product.id}`} className="card group bg-gradient-to-br from-white to-babyBlue-50">
      <div className="relative overflow-hidden bg-babyBlue-100 h-64">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-lg mb-2 text-babyPurple-700">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-hand">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-babyPink-500 to-babyPurple-500 bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-to-r from-babyPink-400 to-babyPurple-400 text-white rounded-full hover:from-babyPink-500 hover:to-babyPurple-500 transition-all font-hand font-semibold shadow-md hover:shadow-lg"
          >
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
