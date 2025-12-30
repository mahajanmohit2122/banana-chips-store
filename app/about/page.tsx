import { FaLeaf, FaHeart, FaStar, FaTruck } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">About Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <span className="text-8xl">🍌</span>
          </div>
          
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to BananaChips, your trusted source for premium quality banana chips! 
            We started our journey with a simple mission: to bring the authentic taste of 
            Kerala's finest banana chips to homes across India.
          </p>
          <p className="text-gray-700 mb-6">
            Using traditional recipes passed down through generations and the finest Kerala 
            bananas, we create crispy, delicious chips that remind you of home-cooked goodness.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <FaLeaf className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-bold text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600">
                We use only natural ingredients with no artificial flavors, colors, or preservatives.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <FaHeart className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-bold text-lg mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Each batch is carefully prepared with attention to quality and taste.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <FaStar className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We handpick the finest Kerala bananas to ensure superior taste and crunch.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <FaTruck className="text-amber-600 text-3xl mb-3" />
              <h3 className="font-bold text-lg mb-2">Fresh Delivery</h3>
              <p className="text-gray-600">
                Your chips are packed fresh and delivered quickly to maintain crispiness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
          <p className="text-lg">
            We promise to deliver the crispiest, most delicious banana chips made with 
            love and care. Your satisfaction is our priority!
          </p>
        </div>
      </div>
    </div>
  )
}