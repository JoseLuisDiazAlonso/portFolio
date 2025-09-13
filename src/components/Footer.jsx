import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='px-6 py-8 mt-10 bg-gradient-to-r from-blue-900 via-sky-400 to-cyan-400'>
      
      {/** Grid de columnas */}
      <div className='flex flex-col items-center max-w-6xl gap-12 mx-auto md:grid md:grid-cols-3 md:gap-8'>

        {/** Columna Redes Sociales */}
        <div className='flex flex-col items-center space-y-3 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-white'>Redes Sociales</h2>
          <div className='flex flex-col items-center space-y-3 md:items-start'>
            <a href="https://www.linkedin.com/in/tu-perfil" target='_blank' rel='noopener noreferrer'
               className='flex items-center gap-4 p-2 transition rounded-xl'>
              <FaLinkedin className='text-4xl text-blue-600'/>
              <span className='font-medium text-white break-words text-md'>LinkedIn</span>
            </a>
            <a href="https://github.com/tu-perfil" target='_blank' rel='noopener noreferrer'
               className='flex items-center gap-4 p-2 transition rounded-xl'>
              <FaGithub className='text-4xl text-gray-800'/>
              <span className='font-medium text-white break-words text-md'>GitHub</span>
            </a>
          </div>
        </div>

        {/** Columna Contacto */}
        <div className='flex flex-col items-center space-y-2 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-white'>Contacto</h2>
          <a href="mailto:joseluisdiaz_alonso@hotmail.com" 
             className='flex flex-col items-center gap-2 p-2 break-words transition md:flex-row md:gap-4 rounded-xl'>
            <FaEnvelope className='text-4xl text-red-600'/>
            <span className='font-medium text-white break-words text-md'>joseluisdiaz_alonso@hotmail.com</span>
          </a>
          <a href="tel:+34650332865" 
             className='flex flex-col items-center gap-2 p-2 transition md:flex-row md:gap-4 rounded-xl'>
            <FaPhone className='text-4xl text-green-600'/>
            <span className='font-medium text-white text-md'>+34 650 33 28 65</span>
          </a>
        </div>

        {/** Columna Legal */}
        <div className='flex flex-col items-center space-y-2 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-white'>Legal</h2>
          <a href="/avisoLegal"
          target='_blank'
          rel='noopener noreferrer' className='text-white break-words hover:underline'>Aviso Legal</a>
          <a href="/politicaPrivacidad"
          target='_blank'
          rel='noopener noreferrer' className='text-white break-words hover:underline'>Política Privacidad</a>
          <a href="/cookies"
          target='_blank'
          rel='noopener noreferrer' className='text-white break-words hover:underline'>Cookies</a>
        </div>

      </div>

      {/** Texto de Copyright centrado */}
      <div className='mt-8 text-sm text-center text-white'>
        &copy; {new Date().getFullYear()} José Luis Díaz Alonso. Todos los derechos reservados.
      </div>

    </footer>
  )
}

export default Footer;
