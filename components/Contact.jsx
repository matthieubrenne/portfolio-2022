import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contactImg from '../public/assets/contact.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      subject,
      message,
    };

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });

    setSend(true);
  };

  const cancelCourse = () => {
    document.getElementById('contact-form').reset();
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Pour me contacter</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="image contact"
                  width="400"
                  height="400"
                />
              </div>
              <div>
                <h2 className="py-2">Matthieu Brenne</h2>
                <p>Développeur Front-End</p>
                <p className="py-4">
                  Intéressé à travailler ensemble ? Contactez moi et
                  parlons-en.
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase pt-8 tracking-widest text-[#5651e5] text-center">
                Connectons nous
              </p>
              <div className="flex items-center justify-center py-4">
                <a href="https://www.linkedin.com/in/matthieu-brenne-69b627202/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-5">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/matthieubrenne">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4 pt-40">
            <div className="p-4">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="grid md-grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      className="uppercase text-sm py-2"
                      htmlFor="name"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="grid md-grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label
                      className="uppercase text-sm py-2"
                      htmlFor="phone"
                    >
                      Telephone
                    </label>
                    <input
                      id="phone"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="subject"
                  >
                    Sujet
                  </label>
                  <input
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4"
                  name="cancelCourse"
                  onClick={cancelCourse}
                >
                  Envoyer le message
                </button>
              </form>
            </div>
            {send && (
              <div
                class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                role="alert"
              >
                <p class="text-sm text-center">
                  Votre message a bien été envoyé.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
