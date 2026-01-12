import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, categoryNames } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const { category } = useParams<{ category: string }>();
  const categoryKey = category || 'all';
  const products = getProductsByCategory(categoryKey);
  const categoryName = categoryNames[categoryKey] || 'All Products';

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-800 mb-2">
            {categoryName}
          </h1>
          <p className="text-gray-600">
            {products.length} {products.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No products found in this category.</p>
            <Link to="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;

