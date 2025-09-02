import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { UserIcon, FolderIcon, Cog6ToothIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon} from '@heroicons/react/24/solid';
import { BookOpenIcon } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("es") //Es el idioma actual

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const toggleLanguage = () => setLang((prev) => (prev === "es" ? "en" : "es"));

    //Traducciones
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
    <div className='fixed z-50 flex flex-row items-center justify-between w-full p-2 text-white bg-gradient-to-r from-blue-900 via-sky-400 to-cian-400'>
        <h1 className='font-bold text-size text-1.5xl p-1.5 text-shadow-lg'>JOSE LUIS DIAZ ALONSO</h1>
        {/**Menú en pantallas Grandes */}
        <div className='hidden space-x-8 mx-52 lg:flex'>
            <Link to={"/"} className='flex items-center gap-2 hover:text-white'>
            <UserIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].about}</span>
            </Link>
            <Link to={"/proyectos"} className='flex items-center gap-2 flex-items-center hover:text-white'>
            <FolderIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].projects}</span>
            </Link>
            <Link to={"/herramientas"} className='flex items-center gap-2 hover:text-white'>
            <Cog6ToothIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].tools}</span>
            </Link>
            <Link to={"/formacion"} className='flex items-center gap-2 hover:text-white'>
            <AcademicCapIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].education}</span>
            </Link>
            <Link to={"/contacto"} className='flex items-center gap-2 hover:text-white'>
            <EnvelopeIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].contact}</span>
            </Link>
            <Link to={"/Blog"} className='flex items-center gap-2 hover:text-white'>
            <BookOpenIcon className='w-5 h-5 text-white'/>
            <span>{labels[lang].blog}</span>
            </Link>
            {/**Opción para cambiar de idioma */}
            <button onClick={toggleLanguage}
            className='flex items-center gap-2 hover:text-white'>
                <GlobeAltIcon className='w-5 h-5 text-white'/>
                <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

        </div>
        {/**Botón del menú */}
        <button onClick={toggleMenu} className='p-2 lg:hidden'>
            {isOpen ? (
                <span className='text-2xl font-bold'>&times;</span>
            ):(
                <span className='text-2xl font-bold'>&#9776;</span>
            )}
        </button>
        {/**Menú desplegable */}
        {isOpen && (
            <div className='absolute left-0 flex flex-col items-center w-full p-4 space-y-4 text-white bg-gradient-to-b from-blue-900 via-sky-400 to-cian-400 top-14 lg:hidden'>
                <Link to="/" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
                    <UserIcon className='w-5 h-5 text-white'/>
                    <span>{labels[lang].about}</span>
                </Link>
                <Link to="/proyectos" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
                    <FolderIcon className='w-5 h-5 text-white'/>
                    <span>{labels[lang].projects}</span>
                </Link>
                <Link to="/herramientas" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
                    <Cog6ToothIcon className='w-5 h-5 text-white'/>
                    <span>{labels[lang].tools}</span>
                </Link>
                <Link to="/formación" className='flex items-center space-x-2 hover:text-gray-300' onClick={toggleMenu}>
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

                {/**Opción de idioma en móvil */}
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
}

export default NavBar
