
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Music, Users } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-royal py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Services</h1>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg md:text-xl">
                Discover how King Duke Melody Band of Africa can elevate your musical experience through
                performances, collaborations, and mentorship.
              </p>
            </div>
          </div>
        </section>
        
        {/* Live Performance Section */}
        <section id="live-performances" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="section-title">Live Performance Bookings</h2>
                <div className="golden-border"></div>
                <p className="mb-6 text-gray-700">
                  King Duke Melody Band of Africa offers electrifying live performances that blend African 
                  rhythms, soulful melodies, and captivating stage presence. Ideal for concerts, cultural 
                  festivals, corporate events, and private celebrations, King Duke's performances inspire 
                  and unite audiences.
                </p>
                
                <h3 className="font-semibold text-xl text-royal mb-4">Features:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Customizable setlists tailored to event themes (e.g., cultural celebrations, charity galas).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Professional band setup with high-energy delivery and audience interaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Availability for both local (Nigeria) and international bookings.</span>
                  </li>
                </ul>
                
                <Link to="/contact" className="btn-primary">
                  Book King Duke for Your Next Event
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/452538b0-3c68-46e4-a161-0f9e6a5db767.png"
                      alt="King Duke performing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gold rounded-lg hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Music Collaborations Section */}
        <section id="collaborations" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6f8a05bb-df33-4075-ac53-4570a55584b4.png"
                      alt="King Duke in studio" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-royal rounded-lg hidden md:block"></div>
                </div>
              </div>
              
              <div>
                <h2 className="section-title">Music Featurings & Collaborations</h2>
                <div className="golden-border"></div>
                <p className="mb-6 text-gray-700">
                  King Duke is open to collaborating with emerging and established artists to create timeless 
                  music that resonates with diverse audiences. His unique sound, rooted in African heritage 
                  and global influences, makes him a sought-after collaborator for studio recordings, music 
                  videos, and live duets.
                </p>
                
                <h3 className="font-semibold text-xl text-royal mb-4">Features:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Studio collaborations for singles, albums, or soundtracks, with a focus on mentoring young talents during the creative process.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Guest appearances in music videos or live performances to amplify the reach of collaborating artists.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Opportunities for songwriting partnerships, leveraging King Duke's decades of life experience and artistic vision.</span>
                  </li>
                </ul>
                
                <Link to="/contact" className="btn-primary">
                  Collaborate with King Duke
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mentorship Program Section */}
        <section id="mentorship" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="section-title">Talent Mentorship Program</h2>
                <div className="golden-border"></div>
                <p className="mb-6 text-gray-700">
                  King Duke's passion for nurturing talent is brought to life through mentorship programs 
                  designed to empower aspiring musicians and artists. These programs provide guidance on 
                  music production, performance skills, and personal branding, helping talents transform 
                  their passion into a sustainable career.
                </p>
                
                <h3 className="font-semibold text-xl text-royal mb-4">Features:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>One-on-one coaching sessions with King Duke or his team, focusing on vocal techniques, stage presence, and songwriting.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Workshops on navigating the music industry, including tips on social media branding and fan engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Opportunities to perform alongside King Duke at select events, offering real-world experience and exposure.</span>
                  </li>
                </ul>
                
                <Link to="/contact" className="btn-primary">
                  Join Our Talent Mentorship Program
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/54c27860-0811-4c20-a81b-a3886aaa45c2.png"
                      alt="King Duke mentoring" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gold rounded-lg hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 bg-royal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Work with King Duke?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              Whether you're interested in booking a performance, collaborating on a project, 
              or joining our mentorship program, we're excited to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Contact Us Today
              </Link>
              <a href="https://www.youtube.com/@Kingdukemelody" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline text-white border-white hover:bg-white hover:text-royal"
              >
                Watch Our Videos
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
