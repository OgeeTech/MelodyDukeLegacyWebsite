
import React from 'react';

const GallerySection = () => {
  const images = [
    {
      url: "/lovable-uploads/a2a3a9ca-d09b-4ead-876b-af59879564b8.png",
      alt: "King Duke in royal uniform standing next to a car",
      caption: "King Duke at a special event"
    },
    {
      url: "/lovable-uploads/54c27860-0811-4c20-a81b-a3886aaa45c2.png",
      alt: "King Duke sitting in a car giving thumbs up",
      caption: "On the road to a performance"
    },
    {
      url: "/lovable-uploads/6f8a05bb-df33-4075-ac53-4570a55584b4.png",
      alt: "King Duke in business attire on a phone call",
      caption: "Behind the scenes"
    }
  ];

  return (
    <section className="py-20 bg-royal-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">Photo Gallery</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-xl h-64 md:h-72 fade-in"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
