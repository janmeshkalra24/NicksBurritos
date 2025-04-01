import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nick's Burritos</h3>
            <p className="text-orange-100 mb-4">
              Serving authentic Mexican cuisine since 1995. We're proud to bring the flavors of Mexico to our community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-orange-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-orange-100 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-orange-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-300 mt-1" />
                <span className="text-orange-100">
                  123 Burrito Street<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-300" />
                <span className="text-orange-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-300" />
                <span className="text-orange-100">info@nicksburritos.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-orange-100">
              <li>Monday - Friday: 8am - 9pm</li>
              <li>Saturday: 9am - 10pm</li>
              <li>Sunday: 9am - 10pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-800 mt-12 pt-8 text-center text-orange-100">
          <p>&copy; {new Date().getFullYear()} Nick's Burritos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 