import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const traducciones = {
  es: {
    title: "CONTACTO",
    description: "Si quieres conectar, colaborar en un proyecto o simplemente charlar sobre tecnología, aquí tienes todas las formas de contactarme. No dudes en enviarme un mensaje, responderé lo antes posible."
  },
  en: {
    title: "CONTACT",
    description: "If you want to connect, collaborate on a project, or just chat about technology, here are all the ways to get in touch with me. Don't hesitate to send me a message; I will respond as soon as possible."
  }
}

const Contacto = ({ lang = "es" }) => {
  const traduccion = traducciones[lang] || traducciones["es"];
  const { title, description } = traduccion;

  return (
    <section 
      id='contact' 
      className='w-full max-w-full p-4 mx-auto text-white bg-gray-800 sm:max-w-5xl sm:p-8 backdrop-blur-md rounded-2xl shadow-log'
    >
      {/* Título */}
      <h2 className='mb-6 text-2xl font-bold text-center text-white'>{title}</h2>
      
      {/* Descripción */}
      <p className='mb-8 text-center text-gray-200'>{description}</p>
      
      {/* Contactos */}
      <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/jose-luis-d%C3%ADaz-alonso-53aa5339/"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center min-w-0 gap-3 p-3 transition sm:gap-4 sm:p-4 rounded-xl'
        >
          <FaLinkedin className='text-4xl text-blue-600'/>
          <span className='min-w-0 text-xl font-medium text-white break-words'>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/JoseLuisDiazAlonso"
          target="_blank"
          rel='noopener noreferrer'
          className='flex items-center min-w-0 gap-3 p-3 transition sm:gap-4 sm:p-4 rounded-xl'
        >
          <FaGithub className='text-4xl text-blue-600'/>
          <span className='min-w-0 text-xl font-medium text-white break-words'>GitHub</span>
        </a>

        {/* Email */}
        <a 
          href="mailto:joseluisdiaz_alonso@hotmail.com"
          className='flex items-center min-w-0 gap-3 p-3 transition sm:gap-4 sm:p-4 rounded-xl'
        >
          <FaEnvelope className="text-4xl text-red-500"/>
          <span className='min-w-0 text-xl font-medium text-white break-words'>joseluisdiaz_alonso@hotmail.com</span>  
        </a>

        {/* Teléfono */}
      </div>
    </section>
  )
}

export default Contacto;
