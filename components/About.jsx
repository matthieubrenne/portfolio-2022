import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            À propos de moi...
          </p>
          <h2 className="py-4">Qui suis-je?</h2>
          <p className="py-2 text-gray-600">
            // Je ne suis pas un développeur normal
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque semper id eros a sodales. Suspendisse potenti.
            Pellentesque quis suscipit orci. Phasellus diam diam,
            sollicitudin in enim at, rhoncus pretium urna. Etiam
            mollis tincidunt condimentum. Quisque at arcu vitae turpis
            ultricies porta. Aliquam semper dignissim viverra. Donec
            posuere, nunc vitae imperdiet tincidunt, velit neque
            rutrum nisi, quis imperdiet libero justo a.{' '}
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque semper id eros a sodales. Suspendisse potenti.
            Pellentesque quis suscipit orci. Phasellus diam diam,
            sollicitudin in enim at, rhoncus pretium urna. Etiam
            mollis tincidunt condimentum. Quisque at arcu vitae turpis
            ultricies porta. Aliquam semper dignissim viverra. Donec
            posuere, nunc vitae imperdiet tincidunt, velit neque
            rutrum nisi, quis imperdiet libero justo a.{' '}
          </p>
        </div>
        <div className="animate-float">
          <Image
            src="/../public/assets/profile.png"
            width="920"
            height="1020"
            alt="image avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
