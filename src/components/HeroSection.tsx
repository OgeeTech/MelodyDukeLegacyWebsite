
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-royal py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/6f8a05bb-df33-4075-ac53-4570a55584b4.png')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 fade-in">
            <span className="text-gold">King Duke</span> Melody Band of Africa
          </h1>
          
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl mb-10 fade-in">
            A living testament to the power of dreams. At 60, King Duke embarked on a music career that has inspired millions. 
            A humanitarian and mentor, dedicated to uplifting lives and nurturing the next generation of African talents.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Book a Performance
            </Link>
            <a href="#music" className="btn-outline text-white border-white hover:bg-white hover:text-royal">
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
