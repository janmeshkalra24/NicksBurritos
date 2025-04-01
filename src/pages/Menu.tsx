import React from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: string;
}

export function Menu() {
  const menuItems: MenuItem[] = [
    // Breakfast
    {
      name: "Breakfast Burrito",
      price: "$9.99",
      description: "Eggs, potatoes, cheese & choice of meat",
      category: "Breakfast"
    },
    {
      name: "Chorizo & Eggs",
      price: "$10.99",
      description: "Served with rice, beans & tortillas",
      category: "Breakfast"
    },
    {
      name: "Huevos Rancheros",
      price: "$10.99",
      description: "Eggs over easy, served on corn tortillas with ranchera sauce",
      category: "Breakfast"
    },
    {
      name: "Chilaquiles",
      price: "$11.99",
      description: "Tortilla chips, ranchera sauce, eggs, cheese & sour cream",
      category: "Breakfast"
    },
    // Burritos
    {
      name: "Regular Burrito",
      price: "$9.99",
      description: "Choice of meat, rice, beans & cheese",
      category: "Burritos"
    },
    {
      name: "Super Burrito",
      price: "$11.99",
      description: "Choice of meat, rice, beans, cheese, guacamole & sour cream",
      category: "Burritos"
    },
    {
      name: "Wet Burrito",
      price: "$12.99",
      description: "Super burrito covered with red or green sauce & melted cheese",
      category: "Burritos"
    },
    {
      name: "Veggie Burrito",
      price: "$9.99",
      description: "Rice, beans, cheese, lettuce, tomato & guacamole",
      category: "Burritos"
    },
    // Plates
    {
      name: "Two Taco Plate",
      price: "$12.99",
      description: "Choice of meat",
      category: "Plates"
    },
    {
      name: "Two Enchilada Plate",
      price: "$13.99",
      description: "Choice of meat, red or green sauce",
      category: "Plates"
    },
    {
      name: "Chile Relleno Plate",
      price: "$13.99",
      description: "Two cheese-stuffed poblano peppers",
      category: "Plates"
    },
    {
      name: "Fajitas Plate",
      price: "$15.99",
      description: "Choice of meat with grilled peppers & onions",
      category: "Plates"
    }
  ];

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of authentic Mexican dishes, made with fresh ingredients and traditional recipes
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-8 text-orange-900">{category}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <span className="text-orange-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-orange-900">Daily Specials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Happy Hour</h3>
              <p className="text-gray-600 mb-4">Monday-Friday, 2-5pm</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>$2 off all burritos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>$1 off draft beers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Free chips & salsa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Taco Tuesday</h3>
              <p className="text-gray-600 mb-4">Every Tuesday</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>$1.50 tacos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>$5 margaritas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Free guacamole</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Weekend Brunch</h3>
              <p className="text-gray-600 mb-4">Saturday & Sunday, 9am-2pm</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Bottomless mimosas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Free coffee refills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  <span>Kids eat free</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 