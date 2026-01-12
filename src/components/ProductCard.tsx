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
    alert("Added to cart 🛒");
  };

  const handlePayment = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: product.price,
        }),
      });

      const data = await res.json();

      const options = {
        key: "rzp_test_S1epB425m0EfN2", // <-- same key id
        amount: data.amount,
        currency: data.currency,
        name: "Crocsets",
        description: product.name,
        order_id: data.id,
        handler: function (response: any) {
          alert("Payment Successful 🎉");
          console.log(response);
        },
        prefill: {
          name: "Arpita",
          email: "test@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#ec4899",
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (err) {
      console.log(err);
      alert("Payment Failed 😢");
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="card group">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            {formatPrice(product.price)}
          </span>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Add to Cart
            </button>

            <button
              onClick={handlePayment}
              className="px-3 py-1 bg-pink-500 text-white rounded"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
