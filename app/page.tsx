import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
              alt="Delicious burrito"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Nick's Burritos</h1>
            <p className="text-xl md:text-2xl mb-8">Authentic Mexican Food in Los Alamitos</p>
            <Link href="#menu" className="btn-primary text-lg">
              View Menu
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Nick's Burritos, we've been serving authentic Mexican cuisine to the Los Alamitos community since 1990. Our commitment to quality ingredients and traditional recipes has made us a local favorite.
                </p>
                <p className="text-lg text-gray-600">
                  Every dish is prepared with love and care, using only the freshest ingredients and time-honored cooking techniques. From our famous burritos to our homemade salsas, we take pride in delivering an authentic Mexican dining experience.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                  alt="Restaurant interior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-primary font-bold">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    <strong>Address:</strong><br />
                    123 Main Street<br />
                    Los Alamitos, CA 90720
                  </p>
                  <p className="text-lg">
                    <strong>Hours:</strong><br />
                    Monday - Friday: 10:00 AM - 9:00 PM<br />
                    Saturday - Sunday: 9:00 AM - 9:00 PM
                  </p>
                  <p className="text-lg">
                    <strong>Phone:</strong><br />
                    (562) 555-0123
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
                  alt="Location"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const menuItems = [
  {
    name: "Classic Burrito",
    description: "Your choice of meat, rice, beans, and cheese wrapped in a flour tortilla",
    price: "12.99"
  },
  {
    name: "California Burrito",
    description: "Carne asada, french fries, cheese, and guacamole",
    price: "14.99"
  },
  {
    name: "Fish Tacos",
    description: "Grilled fish with cabbage slaw and chipotle sauce",
    price: "13.99"
  },
  {
    name: "Enchiladas",
    description: "Three enchiladas with your choice of meat and sauce",
    price: "13.99"
  },
  {
    name: "Quesadilla",
    description: "Grilled flour tortilla with cheese and your choice of meat",
    price: "11.99"
  },
  {
    name: "Nachos",
    description: "Tortilla chips topped with beans, cheese, and your choice of meat",
    price: "12.99"
  }
] 