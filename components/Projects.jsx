import React from 'react';
import ProjectItem from '../components/ProjectItem';
import tigoImg from '../public/assets/projects/tigo.jpg';
import sliderImg from '../public/assets/projects/slider.png';
import multiLangImg from '../public/assets/projects/multiLang.png';
import multiStepImg from '../public/assets/projects/multistep.png';
import galleryImg from '../public/assets/projects/gallery.png';
import dashboardImg from '../public/assets/projects/dashboard.png';
import authentificationImg from '../public/assets/projects/authentification.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projets
        </p>
        <h2 className="py-4">Ce que j'ai réalisé</h2>
        <div className="grid md:grid-cols-3 gap-8 mx-auto">
          <ProjectItem
            title="Tigo Restaurant"
            backgroundImg={tigoImg}
            projectUrl="/tigo"
            description="projet symfony"
          />
          <ProjectItem
            title="Slider"
            backgroundImg={sliderImg}
            projectUrl="/slider"
            description="projet ReactJS"
          />
          <ProjectItem
            title="Multi Langues"
            backgroundImg={multiLangImg}
            projectUrl="/multiLang"
            description="projet ReactJS"
          />
          <ProjectItem
            title="Validation en plusieurs étapes"
            backgroundImg={multiStepImg}
            projectUrl="/multiStep"
            description="projet ReactJS"
          />
          <ProjectItem
            title="Galerie infinie"
            backgroundImg={galleryImg}
            projectUrl="/infinitieGallery"
            description="projet ReactJS"
          />
          <ProjectItem
            title="Tableau de bord"
            backgroundImg={dashboardImg}
            projectUrl="/dashboard"
            description="projet ReactJS"
          />
          <ProjectItem
            title="Authentification"
            backgroundImg={authentificationImg}
            projectUrl="/authentification"
            description="projet ReactJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
