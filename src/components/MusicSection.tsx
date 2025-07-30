
import React from 'react';

const MusicSection = () => {
  const songs = [
    {
      id: 1,
      title: "King Duke's Melody",
      embedUrl: "https://www.youtube.com/embed/A_SYmV4kWco",
      type: "youtube"
    },
    {
      id: 2,
      title: "African Rhythms",
      embedUrl: "https://www.youtube.com/embed/KwCeQf1bOAk",
      type: "youtube"
    },
    {
      id: 3,
      title: "Harmony of Nations",
      embedUrl: "https://www.youtube.com/embed/9iBAI3tKkbU",
      type: "youtube"
    }
  ];

  return (
    <section id="music" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Music Collection</h2>
        <div className="golden-border mx-auto"></div>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Experience the captivating music of King Duke Melody Band of Africa, 
          where African rhythms meet soulful melodies to create timeless musical experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {songs.map(song => (
            <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-56 md:h-64 object-cover"
                  src={song.embedUrl}
                  title={song.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-playfair text-royal">{song.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">King Duke Melody Band</span>
                  <a 
                    href={song.embedUrl.replace('embed/', 'watch?v=')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark font-medium"
                  >
                    Watch Full Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://youtube.com/@kingdukemelody?si=FkWMqAg18-uJYNFi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
