import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const textos = {
  es: (
    <div className='mt-6 space-y-4 text-left'>
      <p>El presente sitio web, [TuNombre.com], es un portfolio personal de José Díaz, con la finalidad de mostrar sus proyectos y experiencias profesionales.</p>
      <p><strong>Titularidad:</strong> El titular de este sitio web es José Díaz, con correo electrónico: joseluisdiaz_alonso@hotmail.com.</p>
      <p><strong>Propiedad Intelectual:</strong> Todos los contenidos, incluyendo textos, imágenes, logotipos, iconos y código fuente, son propiedad de José Díaz o de sus autores. Prohibida su reproducción total o parcial sin autorización.</p>
      <p><strong>Responsabilidad:</strong> El propietario del sitio no se hace responsable de errores u omisiones en los contenidos ni de daños derivados del uso del sitio.</p>
      <p><strong>Enlaces a terceros:</strong> Este sitio puede contener enlaces a páginas externas. José Díaz no se hace responsable de su contenido ni disponibilidad.</p>
      <p><strong>Legislación aplicable:</strong> El uso de este sitio se regula por la legislación española y europea vigente.</p>
    </div>
  ),
  en: (
    <div className='mt-6 space-y-4 text-left'>
      <p>This website, [YourName.com], is the personal portfolio of José Díaz, created to showcase his projects and professional experience.</p>
      <p><strong>Ownership:</strong> The owner of this website is José Díaz. Contact: joseluisdiaz_alonso@hotmail.com.</p>
      <p><strong>Intellectual Property:</strong> All content including texts, images, logos, icons, and source code belongs to José Díaz or the respective authors. Total or partial reproduction is prohibited without permission.</p>
      <p><strong>Liability:</strong> The site owner is not responsible for errors or omissions in content nor for any damages from using this site.</p>
      <p><strong>Third-party links:</strong> This site may contain links to external pages. José Díaz is not responsible for their content or availability.</p>
      <p><strong>Applicable Law:</strong> Use of this website is governed by current Spanish and European legislation.</p>
    </div>
  )
};

const AvisoLegal = ({ lang = "es", toggleLanguage }) => {
  return (
    <section className='flex flex-col justify-between min-h-screen px-6 py-12 overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log'>

      {/* Encabezado + botón idioma */}
      <div className='flex flex-col items-center justify-center max-w-4xl gap-4 mx-auto md:flex-row md:justify-between'>
        <h2 className='text-2xl font-bold text-center text-white md:text-left'>
          {lang === "es" ? "Aviso Legal" : "Legal Notice"}
        </h2>
        <button
          type='button'
          onClick={() => toggleLanguage && toggleLanguage()}
          className='flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700'
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
  );
};

export default AvisoLegal;
