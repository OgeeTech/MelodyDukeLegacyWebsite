
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-royal">
              <span className="text-gold">King Duke</span> Melody Band
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="font-medium hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium hover:text-gold transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-gold transition-colors">
              Contact
            </Link>
            {/* <Link to="/admin" className="font-medium hover:text-gold transition-colors flex items-center">
              <Settings className="h-4 w-4 mr-1" /> Admin
            </Link> */}
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-royal" />
            ) : (
              <Menu className="h-6 w-6 text-royal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link
              to="/"
              className="block py-2 font-medium hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 font-medium hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block py-2 font-medium hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 font-medium hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* <Link
              to="/admin"
              className="block py-2 font-medium hover:text-gold transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className="h-4 w-4 mr-1" /> Admin
            </Link> */}
            <Link
              to="/contact"
              className="inline-block btn-primary my-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
