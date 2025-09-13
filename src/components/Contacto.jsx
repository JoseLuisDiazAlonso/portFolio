import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const traducciones = {
    es: {
      title: "CONTACTO",
      description: "Si quieres conectar, colaborar en un proyecto o simplemente charlar sobre tecnología, aquí tienes todas las formas de contactarme. No dudes en enviarme un mensaje, respondere lo antes posible."
    },
    en: {
      title: "CONTACT",
      description: "If you want to connect, collaborate on a project, or just chat about technology, here are all the ways to get in touch with me. Don't hesitate to send me a message; I will respond as soon as possible."
    }
  }

const Contacto = ({lang = "es"}) => {

  const traduccion = traducciones[lang] || traducciones["es"];
  const {title, description} = traduccion;
  
  return (
    <div id='contacto' className='w-full max-w-5xl p-8 mx-auto text-white bg-gray-800 backdrop-blur-md rounded-2xl shadow-log'>
      
        <h2 className='mb-6 text-2xl font-bold text-center text-white'>{title}</h2>
        <p className='mb-8 text-center text-gray-200'>{description}</p>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {/**LinKedin */}
          <a href="https://www.linkedin.com/in/jose-luis-d%C3%ADaz-alonso-53aa5339/"
          target= "_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-4 p-4 transition rounded-xl'>
            <FaLinkedin className='text-4xl text-blue-600'/>
            <span className='text-xl font-medium text-white'>LinkedIn</span>
          </a>
          {/**GitHub */}
          <a href="https://github.com/JoseLuisDiazAlonso"
          target= "_blank"
          rel='noopener noreferrer'
          className='flex items-center gap-4 p-3 transition rounded-xl'>
            <FaGithub className='text-4xl text-blue-600'/>
            <span className='text-xl font-medium text-white'>GitHub</span>
          </a>
          {/**Email */}
          <a href="mailto:joseluisdiaz_alonso@hotmail.com"
          className='flex items-center gap-4 p-3 transition rounded-xl'>
            <FaEnvelope className="text-4xl text-red-500"/>
            <span className='text-xl font-medium text-white'>joseluisdiaz_alonso@hotmail.com</span>  
          </a>
          {/**Teléfono */}
          <a href="tel:+34650332865"
          className='flex items-center gap-4 p-3 transition rounded-xl'>
            <FaPhone className='text-4xl text-green-500'/>
            <span className='text-xl font-medium text-white'>+34 650 33 28 65</span> 
          </a>
          
        </div>
      </div>
  )
}

export default Contacto
