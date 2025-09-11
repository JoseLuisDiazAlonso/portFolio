import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, FolderIcon, Cog6ToothIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { BookOpenIcon } from 'lucide-react';

const NavBar = ({ lang, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const labels = {
    es: {
      about: "Sobre Mi",
      projects: "Proyectos",
      tools: "Herramientas",
      education: "Formación",
      contact: "Contacto",
      blog: "Blog",
      language: "Idioma"
    },
    en: {
      about: "About Me",
      projects: "Projects",
      tools: "Tools",
      education: "Education",
      contact: "Contact",
      blog: "Blog",
      language: "Language",
    },
  };

  return (
    <div className='z-50 flex flex-row items-center justify-between w-full p-2 text-white bg-gradient-to-r from-blue-900 via-sky-400 to-cian-400'>
      <h1 className='font-bold text-size text-1.5xl p-1.5 text-shadow-lg'>JOSE LUIS DIAZ ALONSO</h1>

      {/* Menú en pantallas grandes */}
      <div className='hidden space-x-8 mx-52 lg:flex'>
        <a href='#sobremi' className='flex items-center gap-2 cursor-pointer hover:text-white'>
          <UserIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].about}</span>
        </a>
        <a href='#herramientas' className='flex items-center gap-2 cursor-pointer hover:text-white'>
          <Cog6ToothIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].tools}</span>
        </a>
        <a href='#proyectos' className='flex items-center gap-2 hover:text-white'>
          <FolderIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].projects}</span>
        </a>
        <a href='#formacion' className='flex items-center gap-2 hover:text-white'>
          <AcademicCapIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].education}</span>
        </a>
        <a href='#contacto' className='flex items-center gap-2 hover:text-white'>
          <EnvelopeIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].contact}</span>
        </a>
        <a href='#blog' className='flex items-center gap-2 hover:text-white'>
          <BookOpenIcon className='w-5 h-5 text-white'/>
          <span>{labels[lang].blog}</span>
        </a>

        {/* Botón de idioma */}
        <button onClick={toggleLanguage} className='flex items-center gap-2 hover:text-white'>
          <GlobeAltIcon className='w-5 h-5 text-white'/>
          <span>{lang === "es" ? "EN" : "ES"}</span>
        </button>
      </div>

      {/* Botón menú móvil */}
      <button onClick={toggleMenu} className='p-2 lg:hidden'>
        {isOpen ? <span className='text-2xl font-bold'>&times;</span> : <span className='text-2xl font-bold'>&#9776;</span>}
      </button>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className='absolute left-0 z-50 flex flex-col items-center w-full p-4 space-y-4 text-white bg-gradient-to-b from-blue-900 via-sky-400 to-cian-400 top-14 lg:hidden'>
          <a to="/" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <UserIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].about}</span>
          </a>
          <a to="/herramientas" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <Cog6ToothIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].tools}</span>
          </a>
          <Link to="/proyectos" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <FolderIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].projects}</span>
          </Link>
          <Link to="/formacion" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <AcademicCapIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].education}</span>
          </Link>
          <Link to="/contacto" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <EnvelopeIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].contact}</span>
          </Link>
          <Link to={"/Blog"} className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
            <BookOpenIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].blog}</span>
          </Link>

          <button
            onClick={() => {
              toggleLanguage();
              toggleMenu();
            }}
            className='flex items-center gap-2 hover:text-gray-300'>
            <GlobeAltIcon className='w-5 h-5 text-white'/>
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
