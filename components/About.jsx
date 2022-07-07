import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
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
            Passionné depuis toujours par les nouvelles technologies
            et plus précisément par le domaine du web je me suis
            naturellement tourné vers le métier de développeur web.
            Après une expérience de 15 ans dans l’agroalimentaire,
            j’ai alors tenté l’aventure numérique et me suis formée
            pendant 5 mois, de façon intensive, au développement web.
            Titulaire du titre professionnel développeur web et web
            mobile, j'ai exercé divers stages et je sais désormais
            faire preuve d'un esprit d'initiative et de rigueur. Fort
            de ma passion pour ce domaine, je suis très investi dans
            mon travail et je prends grand plaisir à exercer, aussi
            cet engouement se reflète largement dans la qualité de mon
            travail.{' '}
          </p>
          <p className="py-2 text-gray-600">
            Travailleur, efficace, sociable, organisé et doté d'un
            esprit d'analyse, je prend soin d'assimiler les différents
            besoins des entreprise et sais facilement m'intégrer. Très
            à l'aise dans mon métier, j’ai à cœur de développer des
            applications web modernes et tendances ainsi qu'en assurer
            la maintenance.{' '}
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
