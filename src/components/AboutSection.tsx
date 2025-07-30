
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/452538b0-3c68-46e4-a161-0f9e6a5db767.png" 
                alt="King Duke in royal uniform" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-royal rounded-lg hidden md:block"></div>
          </div>
          
          <div>
            <h2 className="section-title">About King Duke</h2>
            <div className="golden-border"></div>
            <p className="mb-6 text-gray-700">
              King Duke, the visionary behind King Duke Melody Band of Africa, is a living testament to the power of dreams. 
              At 60, he embarked on a music career that has inspired millions across Africa and beyond.
            </p>
            <p className="mb-6 text-gray-700">
              With a unique blend of African rhythms and soulful melodies, King Duke creates music that resonates with 
              diverse audiences, transcending age, culture, and background. His performances are known for their 
              electrifying energy and profound messages of unity and hope.
            </p>
            <p className="mb-6 text-gray-700">
              Beyond music, King Duke is a committed humanitarian who has impacted countless lives through philanthropy. 
              His passion for nurturing young talents has led him to establish mentorship programs that help aspiring 
              musicians and artists find purpose through creative expression.
            </p>
            <div className="mt-8">
              <a href="#music" className="btn-primary mr-4">
                Listen to Music
              </a>
              <a href="/contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
