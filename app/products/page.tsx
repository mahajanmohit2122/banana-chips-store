'use client'

import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductsPage() {
  const { addToCart } = useCart()

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">
        Our Products
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our range of delicious banana chips made from premium Kerala bananas. 
        Each variety is crafted with care to bring you the perfect crunch!
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden product-card">
            <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <span className="text-8xl">🍌</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 min-h-[60px]">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                <span className="text-gray-500 bg-amber-50 px-3 py-1 rounded-full">{product.weight}</span>
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
    </div>
  )
}