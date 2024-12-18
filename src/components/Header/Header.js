import React from "react";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Fix: Named import

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-red-600">SSR</span>Chem
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-semibold">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a href="tel:+919666884325">
            <FaPhoneAlt className="text-blue-600" />
          </a>

          <a href="tel:+919666884325">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Contact Us
            </button>
          </a>


        </div>
      </div>
    </header>
  );
}

export default Header;