'use client'

import Link from 'next/link'
import { FaTruck, FaLeaf, FaStar, FaShieldAlt } from 'react-icons/fa'
import { products } from './data/products'
import { useCart } from './context/CartContext'

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                Crispy, Delicious<br />
                <span className="text-amber-600">Banana Chips</span>
              </h1>
              <p className="text-xl text-amber-800 mb-8">
                Made from premium Kerala bananas. Fresh, crispy, and delivered to your doorstep!
              </p>
              <div className="flex gap-4">
                <Link href="/products" className="btn-primary">
                  Shop Now
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="text-9xl text-center animate-bounce">
                🍌
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-amber-600 text-3xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600">No artificial flavors or preservatives</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-amber-600 text-3xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
              <p className="text-gray-600">On orders above ₹500</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-amber-600 text-3xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked Kerala bananas</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-amber-600 text-3xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Safe Packaging</h3>
              <p className="text-gray-600">Hygienic & sealed packs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
            Our Best Sellers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden product-card">
                <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-8xl">🍌</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                    <span className="text-gray-500">{product.weight}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best banana chips I've ever tasted! Crispy and fresh every time."
              </p>
              <p className="font-bold text-amber-900">- Priya Sharma</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The spicy masala flavor is amazing! My family loves it."
              </p>
              <p className="font-bold text-amber-900">- Rajesh Kumar</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Fast delivery and excellent packaging. Highly recommended!"
              </p>
              <p className="font-bold text-amber-900">- Anita Desai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}