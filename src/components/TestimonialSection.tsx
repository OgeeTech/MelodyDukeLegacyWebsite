
import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "King Duke's performance at our cultural festival was nothing short of magical. His energy and connection with the audience was incredible.",
      author: "Festival Director, Abuja Cultural Festival",
    },
    {
      quote: "Collaborating with King Duke was a career highlight. His experience and unique musical perspective brought our project to another level.",
      author: "Rising Artist, Lagos Music Scene",
    },
    {
      quote: "The mentorship program led by King Duke transformed my understanding of music and performance. He is not just a musician but a true teacher.",
      author: "Mentorship Program Graduate",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What People Say</h2>
        <div className="golden-border mx-auto"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 fade-in"
            >
              <svg className="w-12 h-12 text-gold mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-medium text-royal">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
