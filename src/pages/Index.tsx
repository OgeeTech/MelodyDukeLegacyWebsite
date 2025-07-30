
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MusicSection from '../components/MusicSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
