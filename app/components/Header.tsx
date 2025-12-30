'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍌</span>
            <span className="text-2xl font-bold text-amber-600">BananaChips</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Contact
            </Link>
            <Link href="/cart" className="relative">
              <button className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition">
                <FaShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-amber-600">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-amber-600">
              Products
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-amber-600">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-amber-600">
              Contact
            </Link>
            <Link href="/cart" className="block py-2 text-gray-700 hover:text-amber-600">
              Cart ({cartItemsCount})
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}