import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const textos = {
  es: (
    <div className='mt-6 space-y-4 text-left'>
      <p><strong>Política de Cookies</strong></p>
      <p>Este sitio web utiliza únicamente cookies técnicas necesarias para el funcionamiento correcto del portfolio. No se utilizan cookies de seguimiento ni publicidad.</p>
      <p>Las cookies permiten mejorar la experiencia del usuario y mantener el funcionamiento básico de la página.</p>
    </div>
  ),
  en: (
    <div className='mt-6 space-y-4 text-left'>
      <p><strong>Cookies Policy</strong></p>
      <p>This website only uses technical cookies necessary for the correct functioning of the portfolio. No tracking or advertising cookies are used.</p>
      <p>Cookies improve the user experience and maintain the basic functionality of the site.</p>
    </div>
  )
};

const Cookies = ({ lang = "es", toggleLanguage }) => {
  return (
    <section className='flex flex-col min-h-screen px-4 py-12 overflow-x-hidden sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log'>
      
      {/* Encabezado + botón idioma */}
      <div className='flex flex-col items-start justify-start max-w-4xl gap-4 mx-auto lg:flex-row lg:justify-between lg:items-center'>
        <h2 className='text-2xl font-bold text-white'>
          {lang === "es" ? "Política de Cookies" : "Cookies Policy"}
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
      <div className='max-w-4xl mx-auto mt-6 text-white'>
        {lang === "es" ? textos.es : textos.en}
      </div>

      {/* Footer */}
      <footer className='mt-12 text-sm text-center text-white'>
        &copy; {new Date().getFullYear()} José Luis Díaz Alonso. Todos los derechos reservados.
      </footer>
    </section>
  );
};

export default Cookies;
