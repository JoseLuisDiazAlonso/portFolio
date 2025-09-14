import React, { useState } from 'react';
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
    },
    en: {
      about: "About Me",
      projects: "Projects",
      tools: "Tools",
      education: "Education",
      contact: "Contact",
      blog: "Blog",
    },
  };

  const navIcons = {
    about: UserIcon,
    projects: FolderIcon,
    tools: Cog6ToothIcon,
    education: AcademicCapIcon,
    contact: EnvelopeIcon,
    blog: BookOpenIcon,
  };

  return (
    <nav className="relative z-50 w-full bg-gradient-to-r from-blue-900 via-sky-400 to-cyan-400">
      <div className="flex items-center justify-between w-full px-4 py-2 sm:px-6 lg:px-8">
        {/* Nombre */}
        <h1 className="text-lg font-bold text-white truncate sm:text-xl md:text-2xl">
          JOSE LUIS DIAZ ALONSO
        </h1>

        {/* Menú escritorio */}
        <div className="hidden space-x-6 lg:flex">
          {Object.keys(labels[lang]).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="flex items-center gap-2 text-white hover:text-gray-200"
            >
              {React.createElement(navIcons[key], { className: 'w-5 h-5' })}
              {labels[lang][key]}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-gray-200"
          >
            <GlobeAltIcon className="w-5 h-5" />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="p-2 text-white lg:hidden focus:outline-none"
        >
          {isOpen ? <span className="text-2xl font-bold">&times;</span> : <span className="text-2xl font-bold">&#9776;</span>}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 py-2 space-y-3 bg-gradient-to-b from-blue-900 via-sky-400 to-cyan-400">
          {Object.keys(labels[lang]).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setIsOpen(false)} // Cierra menú al hacer click
              className="flex items-center w-full gap-2 text-white hover:text-gray-200"
            >
              {React.createElement(navIcons[key], { className: 'w-5 h-5' })}
              {labels[lang][key]}
            </a>
          ))}
          <button
            onClick={() => { toggleLanguage(); setIsOpen(false); }}
            className="flex items-center w-full gap-2 mt-2 text-white hover:text-gray-200"
          >
            <GlobeAltIcon className="w-5 h-5" />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
