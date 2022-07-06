import Image from 'next/image';
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import projectImg from '../public/assets/projects/project.png';

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projets
        </p>
        <h2 className="py-4">Ce que j'ai réalisé</h2>
        <div className="grid md:grid-clos-2 gap-8">
          <ProjectItem
            title="Projet 1"
            backgroundImg={projectImg}
            projectUrl="/projet1"
            description="prejet ReactJS"
          />
          <ProjectItem
            title="Projet 2"
            backgroundImg={projectImg}
            projectUrl="/projet2"
            description="prejet ReactJS"
          />
          <ProjectItem
            title="Projet 3"
            backgroundImg={projectImg}
            projectUrl="/projet3"
            description="prejet ReactJS"
          />
          <ProjectItem
            title="Projet 4"
            backgroundImg={projectImg}
            projectUrl="/projet4"
            description="prejet ReactJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
