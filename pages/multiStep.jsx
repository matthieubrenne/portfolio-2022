import Image from 'next/image';
import React from 'react';
import multiStepImg from '../public/assets/projects/multistep.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const multiStep = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={multiStepImg}
          alt="image projet"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Validation en plusieurs étapes</h2>
          <h3>ReactJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projet</p>
          <h2>Aperçu</h2>
          <p>
            Mini projet ReactJS. Créer un formulaire a plusieurs
            étapes. Formulaire beaucoup utilisé dans les applications
            modernes.
          </p>
          <a
            href="https://github.com/matthieubrenne/multi-step-validation"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://multi-step-validation-8wgj3047s-matthieubrenne.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Retour</p>
        </Link>
      </div>
    </div>
  );
};

export default multiStep;
