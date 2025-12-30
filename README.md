# 🍌 BananaChips - Premium E-Commerce Store

Professional e-commerce website for selling premium banana chips online with full shopping cart functionality and order management.

## ✨ Features

### 🛒 E-Commerce Functionality
- **Shopping Cart** - Add/remove items, update quantities
- **Product Catalog** - 6 different flavors of banana chips
- **Order Management** - Complete checkout process with customer details
- **Local Storage** - Cart persists across sessions
- **Real-time Updates** - Instant cart updates with toast notifications

### 🎨 Design & UX
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Clean, professional design with banana-themed colors
- **Smooth Animations** - Product cards, buttons, and transitions
- **Toast Notifications** - User-friendly feedback for all actions

### 📦 Product Features
- Classic Salted Banana Chips - ₹149
- Spicy Masala Banana Chips - ₹169
- Sweet Jaggery Banana Chips - ₹179
- Pepper Banana Chips - ₹159
- Coconut Oil Fried Chips - ₹189
- Family Pack Mixed Flavors - ₹499

### 🚀 Technical Features
- **Next.js 14** - Latest React framework
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React Context** - Global state management
- **React Hot Toast** - Beautiful notifications
- **LocalStorage API** - Persistent cart data

## 📄 Pages

1. **Home** (`/`) - Hero section, features, best sellers, testimonials
2. **Products** (`/products`) - Full product catalog
3. **Cart** (`/cart`) - Shopping cart and checkout
4. **About** (`/about`) - Company story and values
5. **Contact** (`/contact`) - Contact form and information

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

### Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Select this repository
4. Deploy automatically

## 📱 Features Breakdown

### Shopping Cart
- Add products with one click
- Update quantities with +/- buttons
- Remove items individually
- Clear entire cart
- Persistent storage (survives page refresh)
- Real-time total calculation
- Free delivery on orders ₹500+

### Checkout Process
1. Review cart items
2. Fill customer details (name, email, phone, address)
3. Confirm order
4. Cash on Delivery payment
5. Order confirmation

### Customer Experience
- **Fast Loading** - Optimized Next.js performance
- **Mobile Friendly** - Responsive on all devices
- **Easy Navigation** - Clear menu and links
- **Visual Feedback** - Toast notifications for actions
- **Professional Design** - Trust-building UI

## 🎯 Business Features

- **Free Delivery** - On orders above ₹500
- **Multiple Flavors** - 6 different varieties
- **Bulk Packs** - Family pack available
- **Contact Support** - Multiple contact methods
- **Social Media** - Facebook, Instagram, Twitter links

## 📊 Order Data Structure

```typescript
{
  items: CartItem[],
  total: number,
  customer: {
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    pincode: string
  },
  orderDate: string
}
```

## 🔧 Customization

### Add New Products
Edit `app/data/products.ts`:
```typescript
{
  id: 7,
  name: 'Your Product Name',
  price: 199,
  image: 'image-url',
  description: 'Product description',
  weight: '200g'
}
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#f59e0b',    // Amber
  secondary: '#fbbf24',  // Light Amber
  accent: '#92400e',     // Dark Brown
}
```

### Update Contact Info
Edit `app/components/Footer.tsx` and `app/contact/page.tsx`

## 📞 Support

- **Email**: orders@bananachips.com
- **Phone**: +91 98765 43210
- **Address**: Mumbai, India

## 📝 License

This project is open source and available for commercial use.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Perfect for small businesses looking to sell products online! 🚀