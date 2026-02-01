import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { categoryImages } from '../data/categoryImages';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000677c71fa9583d97a1ac4ab35&ts=491056&p=fs&cid=1&sig=f6ce811d0025d9352ae7b1fd972f1c23e375aa11d998ccabd3b296af2387363c&v=0"
            alt="Crochet by Shaloo Airi"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-babyPink-50/85 via-beige-50/85 to-babyBlue-50/85"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-babyPink-400 to-babyPurple-400 border-4 border-white shadow-2xl flex items-center justify-center">
                  <span className="text-4xl md:text-5xl">🧶</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-babyBlue-400 to-babyPink-300 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-babyPurple-600 via-babyPink-500 to-babyBlue-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              Handmade Crochet Creations
            </h1>
            <p className="text-xl text-babyPurple-700 mb-8 font-hand font-semibold drop-shadow-md">
              Discover beautiful crochet and knitting products crafted with love and care.
              From keyrings to home decor, find your perfect handmade treasure.
            </p>
            <Link to="/products" className="btn-primary text-lg px-8 py-3 inline-block shadow-2xl">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-babyBlue-50 to-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-babyPurple-700">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <CategoryCard
              title="Keyrings"
              link="/products/keyrings"
              imageUrl={categoryImages.keyrings}
            />
            <CategoryCard
              title="Bags"
              link="/products/bags"
              imageUrl={categoryImages.bags}
            />
            <CategoryCard
              title="Flowers"
              link="/products/flowers"
              imageUrl={categoryImages.flowers}
            />
            <CategoryCard
              title="Buckets"
              link="/products/buckets"
              imageUrl={categoryImages.buckets}
            />
            <CategoryCard
              title="Decor"
              link="/products/decor"
              imageUrl={categoryImages.decor}
            />
            <CategoryCard
              title="Accessories"
              link="/products/accessories"
              imageUrl={categoryImages.accessories}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-b from-babyPink-50 to-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-babyPurple-700">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-babyBlue-50 via-white to-babyPurple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-babyPurple-700">
              Why Choose Handmade?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-hand">
              Every item in our collection is carefully handcrafted with attention to detail
              and a passion for the art of crochet and knitting. We believe in creating
              products that bring warmth, beauty, and a personal touch to your everyday life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-hand">
              From cozy accessories to decorative pieces, each creation tells a story
              and adds a unique charm to your home or wardrobe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  link: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, link, imageUrl }) => {
  return (
    <Link
      to={link}
      className="card p-0 text-center hover:scale-105 transition-transform duration-300 overflow-hidden group bg-gradient-to-br from-white to-babyBlue-50"
    >
      <div className="relative h-48 overflow-hidden bg-babyBlue-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-babyPurple-700/70 via-babyPurple-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display font-bold text-white text-lg drop-shadow-lg">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Home;

