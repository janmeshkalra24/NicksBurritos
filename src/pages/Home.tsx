import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface SpecialOffer {
  title: string;
  time: string;
  items: string[];
}

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src = "https://static.wixstatic.com/media/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg/v1/fill/w_1899,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg";
    img.onload = () => setIsLoading(false);
  }, []);

  const breakfastItems: MenuItem[] = [
    { name: "Breakfast Burrito", price: "$9.99", description: "Eggs, potatoes, cheese & choice of meat" },
    { name: "Chorizo & Eggs", price: "$10.99", description: "Served with rice, beans & tortillas" },
    { name: "Huevos Rancheros", price: "$10.99", description: "Eggs over easy, served on corn tortillas with ranchera sauce" },
    { name: "Chilaquiles", price: "$11.99", description: "Tortilla chips, ranchera sauce, eggs, cheese & sour cream" }
  ];

  const burritoItems: MenuItem[] = [
    { name: "Regular Burrito", price: "$9.99", description: "Choice of meat, rice, beans & cheese" },
    { name: "Super Burrito", price: "$11.99", description: "Choice of meat, rice, beans, cheese, guacamole & sour cream" },
    { name: "Wet Burrito", price: "$12.99", description: "Super burrito covered with red or green sauce & melted cheese" },
    { name: "Veggie Burrito", price: "$9.99", description: "Rice, beans, cheese, lettuce, tomato & guacamole" }
  ];

  const plateItems: MenuItem[] = [
    { name: "Two Taco Plate", price: "$12.99", description: "Choice of meat" },
    { name: "Two Enchilada Plate", price: "$13.99", description: "Choice of meat, red or green sauce" },
    { name: "Chile Relleno Plate", price: "$13.99", description: "Two cheese-stuffed poblano peppers" },
    { name: "Fajitas Plate", price: "$15.99", description: "Choice of meat with grilled peppers & onions" }
  ];

  const specialOffers: SpecialOffer[] = [
    {
      title: "Happy Hour",
      time: "Monday-Friday, 2-5pm",
      items: ["$2 off all burritos", "$1 off draft beers", "Free chips & salsa"]
    },
    {
      title: "Taco Tuesday",
      time: "Every Tuesday",
      items: ["$1.50 tacos", "$5 margaritas", "Free guacamole"]
    },
    {
      title: "Weekend Brunch",
      time: "Saturday & Sunday, 9am-2pm",
      items: ["Bottomless mimosas", "Free coffee refills", "Kids eat free"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      initials: "JD",
      name: "John Doe",
      role: "Regular Customer",
      text: "The best burritos in town! The service is always friendly and the food is consistently delicious."
    },
    {
      initials: "AS",
      name: "Alice Smith",
      role: "Foodie",
      text: "Their breakfast burritos are to die for! Perfect combination of flavors and always fresh ingredients."
    },
    {
      initials: "MJ",
      name: "Mike Johnson",
      role: "Local",
      text: "Great atmosphere and authentic Mexican food. The happy hour deals are unbeatable!"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center">
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: 'url("https://static.wixstatic.com/media/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg/v1/fill/w_1899,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 to-orange-900/40"></div>
        </div>

        {isLoading && (
          <div className="absolute inset-0 z-0 bg-orange-100 animate-pulse"></div>
        )}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nick's Deli & Burritos
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Authentic Mexican cuisine made with fresh ingredients and served with a smile
          </p>
          <a 
            href="#menu"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Our Menu
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Menu</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our delicious selection of authentic Mexican dishes, made with fresh ingredients and traditional recipes
          </p>
          
          {/* Breakfast */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-orange-900">Breakfast</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {breakfastItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Burritos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-orange-900">Burritos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {burritoItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-orange-900">Combination Plates</h3>
            <p className="text-gray-600 mb-8">All plates served with rice, beans & tortillas</p>
            <div className="grid md:grid-cols-2 gap-8">
              {plateItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Special Offers</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Don't miss out on our daily specials and happy hour deals
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-orange-500 text-2xl font-bold mb-2">{offer.title}</div>
                <p className="text-gray-600">{offer.time}</p>
                <ul className="mt-4 text-left space-y-2">
                  {offer.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join our growing family of satisfied customers
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
                <div className="mt-4 text-orange-500">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}