import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const textos = {
  es: (
    <div className='mt-6 space-y-4 text-left'>
      <p>El presente sitio web, [TuNombre.com], es un portfolio personal de José Díaz, con la finalidad de mostrar sus proyectos y experiencias profesionales.</p>

      <p><strong>Titularidad:</strong> El titular de este sitio web es José Díaz, con dirección de correo electrónico: joseluisdiaz_alonso@hotmail.com.</p>

      <p><strong>Propiedad Intelectual:</strong> Todos los contenidos de este sitio, incluyendo textos, imágenes, logotipos, iconos y código fuente, son propiedad de José Díaz o de sus respectivos autores. Queda prohibida su reproducción total o parcial sin autorización.</p>

      <p><strong>Responsabilidad:</strong> El propietario del sitio no se hace responsable de los posibles errores u omisiones en los contenidos, ni de los daños que puedan derivarse del uso de este sitio web.</p>

      <p><strong>Enlaces a terceros:</strong> Este sitio puede contener enlaces a páginas de terceros. José Díaz no se hace responsable de los contenidos ni de la disponibilidad de dichas páginas externas.</p>

      <p><strong>Legislación aplicable:</strong> El uso de este sitio web se regula por la legislación española y europea vigente.</p>
    </div>
  ),
  en: (
    <div className='mt-6 space-y-4 text-left'>
      <p>This website, [YourName.com], is the personal portfolio of José Díaz, created to showcase his projects and professional experience.</p>

      <p><strong>Ownership:</strong> The owner of this website is José Díaz. Contact email: joseluisdiaz_alonso@hotmail.com.</p>

      <p><strong>Intellectual Property:</strong> All content on this site, including texts, images, logos, icons, and source code, is the property of José Díaz or its respective authors. Total or partial reproduction is prohibited without permission.</p>

      <p><strong>Liability:</strong> The site owner is not responsible for any errors or omissions in the content, nor for any damages that may arise from the use of this website.</p>

      <p><strong>Third-party links:</strong> This website may contain links to third-party pages. José Díaz is not responsible for the content or availability of such external websites.</p>

      <p><strong>Applicable Law:</strong> Use of this website is governed by current Spanish and European legislation.</p>
    </div>
  )
};

const AvisoLegal = ({ lang, toggleLanguage }) => {
  return (
    <section className='flex flex-col justify-between min-h-screen px-6 py-12 bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log'>
      
      {/* Encabezado + botón idioma */}
      <div className='flex items-center justify-between max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold text-white'>{lang === "es" ? "Aviso Legal" : "Legal Notice"}</h2>
        <button
          type='button'
          onClick={() => toggleLanguage && toggleLanguage()}
          className='flex items-center gap-2 ml-[40px] px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700'
        >
          <GlobeAltIcon className='w-5 h-5'/>
          <span>{lang === "es" ? "ES" : "EN"}</span>
        </button>
      </div>

      {/* Contenido */}
      <div className='max-w-4xl mx-auto mt-6 text-left text-white'>
        {lang === "es" ? textos.es : textos.en}
      </div>

      {/* Footer de la sección */}
      <footer className='mt-12 text-sm text-center text-white'>
        &copy; {new Date().getFullYear()} José Luis Díaz Alonso. Todos los derechos reservados.
      </footer>
    </section>
  )
}

export default AvisoLegal;

