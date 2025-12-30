'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate order placement
    const orderDetails = {
      items: cart,
      total: getTotalPrice(),
      customer: formData,
      orderDate: new Date().toISOString()
    }
    
    console.log('Order placed:', orderDetails)
    
    toast.success('Order placed successfully! We will contact you soon.')
    clearCart()
    setShowCheckout(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: ''
    })
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-amber-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some delicious banana chips to get started!</p>
        <Link href="/products" className="btn-primary">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-6">
                <span className="text-4xl">🍌</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                <p className="text-gray-600">{item.weight}</p>
                <p className="text-amber-600 font-bold mt-2">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-amber-100 p-2 rounded hover:bg-amber-200"
                  >
                    <FaMinus className="text-amber-600" />
                  </button>
                  <span className="w-12 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-amber-100 p-2 rounded hover:bg-amber-200"
                  >
                    <FaPlus className="text-amber-600" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-100 p-3 rounded hover:bg-red-200"
                >
                  <FaTrash className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">₹{getTotalPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-bold text-green-600">
                  {getTotalPrice() >= 500 ? 'FREE' : '₹50'}
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-amber-600">
                  ₹{getTotalPrice() >= 500 ? getTotalPrice() : getTotalPrice() + 50}
                </span>
              </div>
            </div>

            {getTotalPrice() < 500 && (
              <p className="text-sm text-amber-600 mb-4 bg-amber-50 p-3 rounded">
                Add ₹{500 - getTotalPrice()} more for free delivery!
              </p>
            )}

            <button
              onClick={() => setShowCheckout(true)}
              className="w-full btn-primary mb-3"
            >
              Proceed to Checkout
            </button>
            
            <Link href="/products" className="block text-center text-amber-600 hover:text-amber-700">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Checkout</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Address *</label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Order Total:</p>
                <p className="text-2xl font-bold text-amber-600">
                  ₹{getTotalPrice() >= 500 ? getTotalPrice() : getTotalPrice() + 50}
                </p>
                <p className="text-xs text-gray-500 mt-2">Cash on Delivery</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}