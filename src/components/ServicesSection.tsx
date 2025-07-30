
import React from 'react';
import { Music, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 text-gold" />,
      title: "Live Performance Bookings",
      description: "King Duke Melody Band of Africa offers electrifying live performances that blend African rhythms, soulful melodies, and captivating stage presence.",
      link: "/services#live-performances"
    },
    {
      icon: <Music className="w-12 h-12 text-gold" />,
      title: "Music Featurings & Collaborations",
      description: "Create timeless music with King Duke through studio collaborations, music videos, or live duets to amplify your artistic reach.",
      link: "/services#collaborations"
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Talent Mentorship Program",
      description: "Benefit from King Duke's decades of experience through one-on-one coaching, workshops, and opportunities to perform alongside the band.",
      link: "/services#mentorship"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Services</h2>
        <div className="golden-border mx-auto"></div>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          From electrifying live performances to collaborative projects and mentorship programs, 
          discover how King Duke Melody Band can elevate your musical experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-gold transition-all duration-300 fade-in"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="section-subtitle mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className="text-royal font-semibold hover:text-gold transition-colors inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
