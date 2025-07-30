
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-royal py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">About King Duke</h1>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg md:text-xl">
                The visionary behind King Duke Melody Band of Africa, a remarkable artist who began his music career at 60.
              </p>
            </div>
          </div>
        </section>
        
        {/* King Duke's Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="w-full h-[500px] rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6f8a05bb-df33-4075-ac53-4570a55584b4.png"
                      alt="King Duke portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold rounded-lg hidden md:block"></div>
                </div>
              </div>
              
              <div>
                <h2 className="section-title">The King Duke Story</h2>
                <div className="golden-border"></div>
                <p className="mb-6 text-gray-700">
                  King Duke's journey is one of inspiration and defiance of convention. At an age when most 
                  are contemplating retirement, he embarked on a musical adventure that has captivated 
                  audiences across Africa and beyond.
                </p>
                <p className="mb-6 text-gray-700">
                  Born with a deep appreciation for music but pursuing other paths earlier in life, King Duke 
                  finally answered his true calling at 60. His debut showcased a lifetime of absorbed musical 
                  influences, from traditional African rhythms to contemporary global sounds.
                </p>
                <p className="mb-6 text-gray-700">
                  What makes King Duke truly remarkable is not just his late entry into music, but the 
                  passion, authenticity, and wisdom he brings to each performance. His songs often carry 
                  messages of unity, hope, and cultural pride, resonating with audiences of all ages.
                </p>
                <p className="text-royal font-semibold italic">
                  "Age is merely a number. The true measure of life is in the dreams you dare to pursue."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision and Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Vision & Mission</h2>
              <div className="golden-border mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="section-subtitle">Our Vision</h3>
                <p className="text-gray-700">
                  To create a world where music transcends age barriers, where African melodies reach 
                  global audiences, and where every aspiring artist knows it's never too late to pursue their passion.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="section-subtitle">Our Mission</h3>
                <p className="text-gray-700">
                  To inspire through authentic musical expression, to preserve and evolve African musical 
                  heritage, and to empower the next generation of talents through mentorship and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Humanitarian Work */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="section-title">Humanitarian Efforts</h2>
                <div className="golden-border"></div>
                <p className="mb-6 text-gray-700">
                  Beyond music, King Duke is dedicated to making a positive impact in communities across Africa. 
                  His humanitarian initiatives focus on education, healthcare, and creating opportunities for 
                  underprivileged youth.
                </p>
                <p className="mb-6 text-gray-700">
                  Through benefit concerts, community outreach programs, and direct assistance to families in need, 
                  King Duke channels the success of his musical career into tangible support for those who need it most.
                </p>
                <p className="mb-6 text-gray-700">
                  King Duke believes in the power of music to heal, unite, and inspire positive change. This philosophy 
                  guides both his artistic expression and his philanthropic endeavors, creating a legacy that extends 
                  far beyond the stage.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Support Our Humanitarian Work
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-[500px] rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/a2a3a9ca-d09b-4ead-876b-af59879564b8.png"
                      alt="King Duke humanitarian work" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-royal rounded-lg hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-royal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Join King Duke's Journey</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              Whether as a fan, collaborator, or supporter of our humanitarian efforts, 
              there are many ways to be part of King Duke's inspiring story.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#music" className="btn-secondary">
                Listen to Our Music
              </a>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-royal">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
