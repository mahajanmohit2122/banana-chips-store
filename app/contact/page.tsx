'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    toast.success('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Have questions about our products or need help with your order? 
            We're here to help! Reach out to us through any of the following channels.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-4">
                <FaPhone className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-4">
                <FaEnvelope className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-600">orders@bananachips.com</p>
                <p className="text-gray-600">support@bananachips.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-4">
                <FaMapMarkerAlt className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Banana Street<br />
                  Andheri West, Mumbai<br />
                  Maharashtra 400058, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 p-4 rounded-full mr-4">
                <FaClock className="text-amber-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
                  rows={5}
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}