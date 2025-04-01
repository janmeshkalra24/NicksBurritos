import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Utensils } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Delicious Mexican Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Authentic Mexican Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the true flavors of Mexico with our handcrafted burritos, tacos, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/contact"
              className="bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Daily</h3>
              <p className="text-gray-600">
                Monday - Friday: 8am - 9pm<br />
                Saturday - Sunday: 9am - 10pm
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Burrito Street<br />
                San Francisco, CA 94105
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                (555) 123-4567<br />
                (555) 987-6543
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-orange-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, Nick's Burritos has been serving authentic Mexican cuisine to our community for over 25 years. Our commitment to quality ingredients and traditional recipes has made us a beloved local institution.
              </p>
              <p className="text-gray-600 mb-8">
                Every dish we serve is crafted with care, using only the finest ingredients and time-honored techniques. From our signature burritos to our fresh-made salsas, we take pride in bringing the authentic flavors of Mexico to your table.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
              >
                Learn more about us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/about-section.jpg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-orange-900">Featured Items</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/featured-1.jpg"
                  alt="Super Burrito"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Super Burrito</h3>
                <p className="text-gray-600 mb-4">
                  Our signature burrito packed with your choice of meat, rice, beans, cheese, guacamole & sour cream
                </p>
                <span className="text-orange-600 font-bold">$11.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/featured-2.jpg"
                  alt="Taco Plate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Taco Plate</h3>
                <p className="text-gray-600 mb-4">
                  Two tacos with your choice of meat, served with rice, beans, and tortillas
                </p>
                <span className="text-orange-600 font-bold">$12.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/featured-3.jpg"
                  alt="Enchilada Plate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enchilada Plate</h3>
                <p className="text-gray-600 mb-4">
                  Two enchiladas with your choice of meat and sauce, served with rice and beans
                </p>
                <span className="text-orange-600 font-bold">$13.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today and experience the authentic flavors of Mexico
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}