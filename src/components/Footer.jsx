import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='px-4 py-8 mt-10 overflow-x-hidden bg-gradient-to-r from-blue-900 via-sky-400 to-cyan-400'>
      
      {/** Grid de columnas */}
      <div className='flex flex-col items-center max-w-full gap-12 mx-auto md:grid md:grid-cols-3 md:gap-8'>

        {/** Columna Redes Sociales */}
        <div className='flex flex-col items-center space-y-3 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-center text-white md:text-left'>Redes Sociales</h2>
          <div className='flex flex-col items-center space-y-3 md:items-start'>
            <a href="https://www.linkedin.com/in/jose-luis-d%C3%ADaz-alonso-53aa5339/" target='_blank' rel='noopener noreferrer'
               className='flex items-center gap-4 p-2 transition rounded-xl'>
              <FaLinkedin className='text-4xl text-blue-600'/>
              <span className='text-xs font-medium text-white break-words'>LinkedIn</span>
            </a>
            <a href="https://github.com/JoseLuisDiazAlonso" target='_blank' rel='noopener noreferrer'
               className='flex items-center gap-4 p-2 transition rounded-xl'>
              <FaGithub className='text-4xl text-gray-800'/>
              <span className='text-xs font-medium text-white break-words'>GitHub</span>
            </a>
          </div>
        </div>

        {/** Columna Contacto */}
        <div className='flex flex-col items-center space-y-2 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-center text-white md:text-left'>Contacto</h2>
          <a href="mailto:joseluisdiaz_alonso@hotmail.com" 
             className='flex flex-col items-center gap-2 p-2 break-words transition md:flex-row md:gap-4 rounded-xl'>
            <FaEnvelope className='text-4xl text-red-600'/>
            <span className='text-xs font-medium text-center text-white break-words md:text-left'>joseluisdiaz_alonso@hotmail.com</span>
          </a>
        </div>

        {/** Columna Legal */}
        <div className='flex flex-col items-center space-y-2 md:items-start'>
          <h2 className='mb-2 text-2xl font-bold text-center text-white md:text-left'>Legal</h2>
          <a href="/avisoLegal"
          target='_blank'
          rel='noopener noreferrer' className='text-center text-white break-words hover:underline md:text-left'>Aviso Legal</a>
          <a href="/politicaPrivacidad"
          target='_blank'
          rel='noopener noreferrer' className='text-center text-white break-words hover:underline md:text-left'>Política Privacidad</a>
          <a href="/cookies"
          target='_blank'
          rel='noopener noreferrer' className='text-center text-white break-words hover:underline md:text-left'>Cookies</a>
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
