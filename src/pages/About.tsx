import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serving authentic Mexican cuisine since 1995, we're proud to bring the flavors of Mexico to our community
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-900">Our Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded by Nick Rodriguez in 1995, Nick's Burritos started as a small family-owned restaurant with a big dream: to serve the most authentic Mexican cuisine in town.
              </p>
              <p>
                What began as a humble taco stand has grown into a beloved local institution, known for our commitment to quality ingredients, traditional recipes, and warm hospitality.
              </p>
              <p>
                Today, we continue to serve our community with the same passion and dedication that Nick brought to his kitchen over 25 years ago.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="/images/restaurant-interior.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-orange-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-orange-900 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We source only the finest ingredients to ensure authentic flavors in every dish.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">Our recipes have been passed down through generations, preserving authentic Mexican cuisine.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">We're proud to be part of our local community and give back whenever we can.</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">Mon-Fri: 8am-9pm</p>
            <p className="text-gray-600">Sat-Sun: 9am-10pm</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">123 Burrito Street</p>
            <p className="text-gray-600">San Francisco, CA 94105</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
            <p className="text-gray-600">(555) 987-6543</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@nicksburritos.com</p>
            <p className="text-gray-600">catering@nicksburritos.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 