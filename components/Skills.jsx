import React from 'react';
import Skill from '../components/Skill';
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import jsImg from '../public/assets/skills/javascript.png'
import reactImg from '../public/assets/skills/react.png'
import rsImg from '../public/assets/skills/redux-saga.png'
import nodeImg from '../public/assets/skills/node.png'
import nextImg from '../public/assets/skills/nextjs.png'
import symfonyImg from '../public/assets/skills/symfony.png'
import awsImg from '../public/assets/skills/aws.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import githubImg from '../public/assets/skills/github1.png'

const Skills = () => {
  const images = [];

  return (
    <div id='skills' className="w-full lg:screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Compétences
        </p>
        <h2 className="py-4">Ce que je sais faire</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill title= "HTML" skillImage={htmlImg}/>
          <Skill title= "CSS" skillImage={cssImg}/>
          <Skill title= "JAVASCRIPT" skillImage={jsImg}/>
          <Skill title= "REACTJS" skillImage={reactImg}/>
          <Skill title= "REDUX-SAGA" skillImage={rsImg}/>
          <Skill title= "NODEJS" skillImage={nodeImg}/>
          <Skill title= "NEXTJS" skillImage={nextImg}/>
          <Skill title= "SYMFONY" skillImage={symfonyImg}/>
          <Skill title= "AWS" skillImage={awsImg}/>
          <Skill title= "TAILWIND" skillImage={tailwindImg}/>
          <Skill title= "GITHUB" skillImage={githubImg}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
