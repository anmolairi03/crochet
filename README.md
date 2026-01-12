# Crocsets - Handmade Yarn Shopping Platform

A modern, responsive e-commerce platform for handmade yarn products including keyrings, bags, flowers, buckets, decorative items, and accessories.

## 🛠 Tech Stack

### Core Technologies
- **React 18** - Modern UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **React Router v6** - Client-side routing for navigation

### Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Color Palette** - Warm, cozy colors inspired by handmade crafts
- **Google Fonts** - Inter (body) and Playfair Display (headings)

### State Management
- **React Context API** - Lightweight state management for cart functionality

## 📁 Project Structure

```
crocsets/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx     # Navigation and cart icon
│   │   ├── Footer.tsx     # Site footer with links
│   │   └── ProductCard.tsx # Product display card
│   ├── context/            # React Context providers
│   │   └── CartContext.tsx # Shopping cart state management
│   ├── data/               # Mock data and utilities
│   │   └── products.ts     # Product catalog and helpers
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page with featured products
│   │   ├── ProductListing.tsx # Category/product listing
│   │   ├── ProductDetail.tsx  # Individual product page
│   │   ├── Cart.tsx        # Shopping cart page
│   │   └── Checkout.tsx   # Checkout form (UI only)
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Shared types and interfaces
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## ✨ Features

### Core Functionality
- ✅ **Home Page** - Hero section, category navigation, featured products
- ✅ **Product Listing** - Grid layout with category filtering
- ✅ **Product Detail** - Full product information with image gallery
- ✅ **Shopping Cart** - Add, remove, update quantities
- ✅ **Checkout Flow** - Complete checkout form (UI only, mock data)
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized

### Product Categories
- Keyrings
- Bags
- Flowers
- Buckets
- Home Decor
- Accessories

### Design Features
- Warm, cozy color palette
- Clean, modern UI
- Smooth transitions and hover effects
- Accessible navigation
- Sticky header with cart badge

## 🎨 Design System

### Color Palette
- **Primary**: Warm oranges and terracottas (`primary-*`)
- **Accent**: Soft purples (`accent-*`)
- **Warm**: Cozy creams and beiges (`warm-*`)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`)
- Card component with hover effects
- Consistent spacing and layout

## 🔧 Customization

### Adding Products
Edit `src/data/products.ts` to add new products. Each product needs:
- Unique ID
- Name, description, price
- Category (must match type definition)
- Images array
- Stock status

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Tailwind classes in components
- Color scheme: `tailwind.config.js`

### Extending Functionality
- Add authentication: Create AuthContext similar to CartContext
- Add backend: Replace mock data with API calls
- Add payment: Integrate Stripe/PayPal in Checkout component
- Add search: Implement search functionality in ProductListing

## 💳 Payment Integration

### Razorpay Setup

1. **Get Razorpay Keys:**
   - Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Go to Settings → API Keys
   - Copy your Test/Live Key ID

2. **Configure Environment:**
   - Create a `.env` file in the root directory
   - Add your Razorpay key:
     ```
     VITE_RAZORPAY_KEY=rzp_test_YOUR_KEY_HERE
     ```
   - For production, use Live Mode keys

3. **Payment Flow:**
   - Users fill shipping information
   - Click "Pay with Razorpay" button
   - Razorpay payment modal opens
   - Users can pay via UPI, Cards, Wallets, etc.
   - On successful payment, order is confirmed

4. **Backend Integration (Recommended):**
   - For production, implement payment verification on your backend
   - Update `src/utils/razorpay.ts` to call your backend API
   - Verify payment signatures server-side for security

## 📝 Notes

- Product images use placeholder URLs (replace with actual images)
- Cart state is stored in memory (clears on page refresh)
- Payment verification should be done on backend in production

## 🤝 Contributing

This is a demonstration project. Feel free to fork and extend it for your own use!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ for craft lovers and handmade enthusiasts**

