import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            construisons ensemble quelque chose de légendaire
          </p>
          <h1 className="py-4 text-gray-700">
            Je suis <span className="text-[#5651e5]"> Matthieu</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            Développeur Front-End
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Je me concentre sur la création d'applications Web
            front-end tout en apprenant les technologies back-end.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/matthieu-brenne-69b627202/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-5">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/matthieubrenne">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-5">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
