
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              <span className="text-gold">King Duke</span> Melody Band
            </h3>
            <p className="mb-4">
              A living testament to the power of dreams, inspiring millions through music,
              humanitarian efforts, and mentoring the next generation of African talents.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Spibat Road, Profs Avenue</p>
              <p className="mb-2">Orji, Owerri, Imo State</p>
              <p className="mb-2">Nigeria</p>
              <p className="mb-2">
                <a href="tel:+2347047525049" className="hover:text-gold transition-colors">
                  +234 704 752 5049
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:kingdukemelodyband@gmail.com" className="hover:text-gold transition-colors">
                  kingdukemelodyband@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-royal-light flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} King Duke Melody Band of Africa. All Rights Reserved.</p>

          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://www.youtube.com/@Kingdukemelody"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/kingdukemelodyband?igsh=MXJpZXV2ZGk3NGk1aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@kingdukemelody1?_t=ZM-8wJemIg1HxV&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="TikTok"
            >
              <Music className="h-5 w-5" />
            </a>
            <a
              href="https://web.facebook.com/king.duke.722093?mibextid=ZbWKwL&_rdc=1&_rdr"              
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
