import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setSahdow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/projet1' ||
      router.asPath === '/projet2' ||
      router.asPath === '/projet3' ||
      router.asPath === '/projet4'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY <= 90) {
        setSahdow(true);
      } else {
        setSahdow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/logo.png"
            alt="image logo"
            width="70"
            height="50"
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Accueil
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Qui suis-je?
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Compétences
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Portfolio
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? 'md-hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-150%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                src="/../public/assets/logo.png"
                width="70"
                height="50"
                alt="image logo"
                className='cursor-pointer'
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="x-[85%] md:w-[90%] py-4">
              construisons ensemble quelque chose de légendaire
            </p>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Accueil
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Qui suis-je?
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Compétences
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Connectons nous!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/matthieu-brenne-69b627202/" target="_blank" rel="noreferrer">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/matthieubrenne" target="_blank" rel="noreferrer">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
