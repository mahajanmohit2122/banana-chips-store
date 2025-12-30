import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-2">🍌</span>
              BananaChips
            </h3>
            <p className="text-amber-100">
              Premium quality banana chips made from fresh bananas. Crispy, delicious, and delivered fresh to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-amber-100 hover:text-white transition">Home</a></li>
              <li><a href="/products" className="text-amber-100 hover:text-white transition">Products</a></li>
              <li><a href="/about" className="text-amber-100 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-amber-100 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-amber-100">
                <FaPhone className="mr-3" />
                +91 98765 43210
              </li>
              <li className="flex items-center text-amber-100">
                <FaEnvelope className="mr-3" />
                orders@bananachips.com
              </li>
              <li className="flex items-center text-amber-100">
                <FaMapMarkerAlt className="mr-3" />
                Mumbai, India
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-700 p-3 rounded-full hover:bg-amber-600 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-amber-700 p-3 rounded-full hover:bg-amber-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-amber-700 p-3 rounded-full hover:bg-amber-600 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2025 BananaChips. All rights reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}