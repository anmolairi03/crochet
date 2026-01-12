import { Product } from '../types';

// Mock product data for the handmade yarn products
export const products: Product[] = [
  // Keyrings
  {
    id: 'kr-001',
    name: 'Crochet Heart Keyring',
    description: 'Adorable hand-crocheted heart keyring in soft pastel pink. Perfect for adding a touch of handmade charm to your keys.',
    price: 8.99,
    category: 'keyrings',
    images: ['https://i.pinimg.com/736x/31/f5/de/31f5de25012d8c9268535c689926bdff.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: 'kr-002',
    name: 'Yarn Flower Keyring',
    description: 'Colorful crochet flower keyring with vibrant petals. Each one is uniquely crafted with love.',
    price: 9.99,
    category: 'keyrings',
    images: ['https://i.pinimg.com/1200x/a7/28/40/a728404cde6a23108fab83db5fc29b24.jpg'],
    inStock: true,
  },
  {
    id: 'kr-003',
    name: 'Amigurumi Bear Keyring',
    description: 'Cute little crocheted bear keyring. A perfect companion for your keys!',
    price: 12.99,
    category: 'keyrings',
    images: ['https://images.pexels.com/photos/6344235/pexels-photo-6344235.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'],
    inStock: true,
    featured: true,
  },
  {
    id: 'kr-004',
    name: 'Baby Groot Keychain with Rose',
    description: 'Adorable hand-crocheted Baby Groot keyring made from light brown yarn with textured bark-like details. Features green leaf accents and holds a delicate red rose. Perfect for Guardians of the Galaxy fans!',
    price: 15.99,
    category: 'keyrings',
    images: ['blob:https://web.whatsapp.com/6b2e25cc-e64a-43fc-ab07-4cbd42a5fd53'],
    inStock: true,
    featured: true,
  },
  {
    id: 'kr-005',
    name: 'Evil Eye Keychain',
    description: 'Handmade crocheted evil eye amulet keychain in beautiful blue and white colors. Features concentric circles with dark blue outer ring, white segmented ring, medium blue ring, and dark navy center. Includes a matching dark blue tassel. Perfect protective charm for your keys, car, or bag!',
    price: 12.99,
    category: 'keyrings',
    images: ['https://i.pinimg.com/1200x/86/83/44/8683446dbd489840cc4921ac73905a45.jpg'],
    inStock: true,
    featured: true,
  },
  
  // Bags
  {
    id: 'bg-001',
    name: 'Handmade Tote Bag',
    description: 'Spacious crochet tote bag with sturdy handles. Perfect for shopping, beach trips, or everyday use. Made with premium yarn.',
    price: 45.99,
    category: 'bags',
    images: ['https://i.pinimg.com/736x/06/b2/66/06b2666221bf516b20b5057ce98f59d2.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: 'bg-002',
    name: 'Crochet Market Bag',
    description: 'Eco-friendly market bag with stretchy design. Holds groceries securely while looking stylish.',
    price: 38.99,
    category: 'bags',
    images: ['https://i.pinimg.com/736x/85/fe/35/85fe3510d34aa494bba7cddbe7dd3cae.jpg'],
    inStock: true,
  },
  {
    id: 'bg-003',
    name: 'Granny Square Crossbody Bag',
    description: 'Vintage-inspired granny square crossbody bag. Features classic crochet patterns with modern functionality.',
    price: 52.99,
    category: 'bags',
    images: ['https://i.pinimg.com/736x/f0/ce/c9/f0cec9f14b21c4a5f6045a6ea0f836ba.jpg'],
    inStock: true,
  },
  {
    id: 'bg-004',
    name: 'Knit Backpack',
    description: 'Cozy knitted backpack perfect for daily adventures. Comfortable straps and multiple pockets.',
    price: 65.99,
    category: 'bags',
    images: ['https://i.pinimg.com/736x/a7/04/f7/a704f7c00d1b171f67b3789d0506b64a.jpg'],
    inStock: true,
  },
  
  // Flowers
  {
    id: 'fl-001',
    name: 'Crochet Rose Bouquet',
    description: 'Beautiful handcrafted crochet roses in a variety of colors. Never wilt, always beautiful! Set of 5 roses.',
    price: 24.99,
    category: 'flowers',
    images: ['https://i.pinimg.com/1200x/61/eb/71/61eb71cc4d16141bf3b8a1d88cc2b4ad.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: 'fl-002',
    name: 'Sunflower Collection',
    description: 'Bright and cheerful crochet sunflowers. Perfect for home decoration or as a gift. Set of 3.',
    price: 18.99,
    category: 'flowers',
    images: ['/api/placeholder/350/350'],
    inStock: true,
  },
  {
    id: 'fl-005',
    name: 'Multi-Layer Crochet Flower Appliques',
    description: 'Set of three vibrant, multi-layered crocheted flower appliques. Each flower features intricate layers with beautiful color combinations - lavender, orange, yellow, and green. Perfect for adding handmade charm to bags, clothing, or home decor. These dimensional flowers showcase detailed crochet work with scalloped petals.',
    price: 22.99,
    category: 'flowers',
    images: ['https://i.pinimg.com/736x/f3/41/55/f34155a9b3af11de70a59ee4c24fa0aa.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: 'fl-003',
    name: 'Lavender Sprig',
    description: 'Delicate crochet lavender sprigs. Brings a touch of nature indoors without any maintenance.',
    price: 12.99,
    category: 'flowers',
    images: ['https://i.pinimg.com/736x/8b/5e/a7/8b5ea7f3e64827f62e3fb35bc1a872ae.jpg'],
    inStock: true,
  },
  {
    id: 'fl-004',
    name: 'Mixed Flower Arrangement',
    description: 'Elegant mix of crochet flowers including daisies, tulips, and peonies. Arranged in a decorative vase.',
    price: 35.99,
    category: 'flowers',
    images: ['https://images.pexels.com/photos/6344236/pexels-photo-6344236.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'],
    inStock: true,
  },
  
  // Buckets
  {
    id: 'bk-001',
    name: 'Crochet Storage Bucket',
    description: 'Stylish crochet bucket perfect for organizing yarn, toys, or decorative items. Durable and beautiful.',
    price: 28.99,
    category: 'buckets',
    images: ['https://images.pexels.com/photos/6344237/pexels-photo-6344237.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: 'bk-002',
    name: 'Colorful Yarn Basket',
    description: 'Large crochet basket with vibrant colors. Great for storing blankets, magazines, or craft supplies.',
    price: 42.99,
    category: 'buckets',
    images: ['https://images.pexels.com/photos/6344237/pexels-photo-6344237.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'],
    inStock: true,
    featured: true,
  },
  {
    id: 'bk-003',
    name: 'Minimalist Storage Bin',
    description: 'Clean, modern crochet storage bin in neutral tones. Fits perfectly in any room decor.',
    price: 32.99,
    category: 'buckets',
    images: ['https://images.pexels.com/photos/6344237/pexels-photo-6344237.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'],
    inStock: true,
  },
  
  // Decor
  {
    id: 'dc-001',
    name: 'Crochet Wall Hanging',
    description: 'Beautiful macramé-style wall hanging with crochet elements. Adds texture and warmth to any wall.',
    price: 55.99,
    category: 'decor',
    images: ['https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop'],
    inStock: true,
    featured: true,
  },
  {
    id: 'dc-002',
    name: 'Cozy Throw Pillow Cover',
    description: 'Hand-knitted pillow cover with intricate patterns. Soft and warm, perfect for your couch or bed.',
    price: 38.99,
    category: 'decor',
    images: ['https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: 'dc-003',
    name: 'Crochet Table Runner',
    description: 'Elegant crochet table runner with lace patterns. Perfect for special occasions or everyday elegance.',
    price: 45.99,
    category: 'decor',
    images: ['/api/placeholder/500/300'],
    inStock: true,
  },
  {
    id: 'dc-004',
    name: 'Yarn Wreath',
    description: 'Seasonal crochet wreath that can be customized for any holiday or season. A timeless decorative piece.',
    price: 48.99,
    category: 'decor',
    images: ['/api/placeholder/400/400'],
    inStock: true,
  },
  
  // Accessories
  {
    id: 'ac-001',
    name: 'Crochet Headband',
    description: 'Comfortable and stylish crochet headband. Perfect for keeping hair in place while adding a handmade touch.',
    price: 15.99,
    category: 'accessories',
    images: ['/api/placeholder/300/300'],
    inStock: true,
  },
  {
    id: 'ac-002',
    name: 'Knit Scarf',
    description: 'Warm and cozy hand-knitted scarf in soft yarn. Perfect for chilly days and a thoughtful gift.',
    price: 32.99,
    category: 'accessories',
    images: ['/api/placeholder/400/200'],
    inStock: true,
    featured: true,
  },
  {
    id: 'ac-003',
    name: 'Crochet Phone Case',
    description: 'Protective and cute crochet phone case. Customizable colors to match your style.',
    price: 18.99,
    category: 'accessories',
    images: ['/api/placeholder/300/300'],
    inStock: true,
  },
  {
    id: 'ac-004',
    name: 'Hand-Knit Beanie',
    description: 'Warm and stylish knitted beanie. One size fits most, perfect for winter adventures.',
    price: 28.99,
    category: 'accessories',
    images: ['/api/placeholder/300/300'],
    inStock: true,
  },
  {
    id: 'ac-005',
    name: 'Crochet Coasters Set',
    description: 'Set of 6 beautiful crochet coasters. Protect your furniture while adding handmade charm to your home.',
    price: 22.99,
    category: 'accessories',
    images: ['/api/placeholder/350/350'],
    inStock: true,
  },
];

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Category display names
export const categoryNames: Record<string, string> = {
  keyrings: 'Keyrings',
  bags: 'Bags',
  flowers: 'Flowers',
  buckets: 'Buckets',
  decor: 'Home Decor',
  accessories: 'Accessories',
};

