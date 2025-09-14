import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const textos = {
  es: (
    <div className='mt-6 space-y-4 text-left'>
      <p><strong>Política de Privacidad</strong></p>
      <p>Este sitio web, gestionado por José Luis Díaz Alonso, tiene como finalidad mostrar proyectos personales y experiencia profesional.</p>
      <p><strong>Datos personales recogidos:</strong> Este portfolio no solicita ni almacena datos personales de los usuarios, salvo aquellos que decidan contactarme de forma voluntaria a través de correo electrónico o teléfono.</p>
      <p><strong>Uso de la información:</strong> Los datos facilitados de manera voluntaria por el usuario serán utilizados únicamente para responder a solicitudes de contacto. En ningún caso se cederán a terceros ni se emplearán con fines comerciales.</p>
      <p><strong>Cookies:</strong> Este sitio no utiliza cookies de seguimiento ni herramientas de análisis. Únicamente pueden existir cookies técnicas necesarias para el correcto funcionamiento del sitio.</p>
      <p><strong>Enlaces a terceros:</strong> El sitio puede contener enlaces a páginas externas (ejemplo: GitHub, LinkedIn). No me responsabilizo de las políticas de privacidad ni del contenido de dichos sitios.</p>
      <p><strong>Derechos del usuario:</strong> En cualquier momento, el usuario puede solicitar la rectificación o eliminación de los datos proporcionados voluntariamente, escribiendo al correo: <span className="underline">joseluisdiaz_alonso@hotmail.com</span></p>
      <p><strong>Legislación aplicable:</strong> El uso de esta web y el tratamiento de los datos se rigen por la legislación española y europea vigente.</p>
    </div>
  ),
  en: (
    <div className='mt-6 space-y-4 text-left'>
      <p><strong>Privacy Policy</strong></p>
      <p>This website, managed by José Luis Díaz Alonso, is intended to showcase personal projects and professional experience.</p>
      <p><strong>Personal data collected:</strong> This portfolio does not request or store personal data from users, except for those who voluntarily decide to contact me via email or phone.</p>
      <p><strong>Use of information:</strong> The information provided voluntarily by the user will only be used to respond to contact requests. Under no circumstances will it be shared with third parties or used for commercial purposes.</p>
      <p><strong>Cookies:</strong> This website does not use tracking cookies or analytics tools. Only technical cookies necessary for the proper functioning of the site may be present.</p>
      <p><strong>Third-party links:</strong> This site may include links to external pages (e.g., GitHub, LinkedIn). I am not responsible for the privacy policies or content of such external websites.</p>
      <p><strong>User rights:</strong> At any time, users may request the correction or deletion of the data they voluntarily provided by writing to: <span className="underline">joseluisdiaz_alonso@hotmail.com</span></p>
      <p><strong>Applicable law:</strong> The use of this website and the processing of any data are governed by current Spanish and European legislation.</p>
    </div>
  )
};

const PoliticaPrivacidad = ({ lang = "es", toggleLanguage }) => {
  return (
    <section className='flex flex-col min-h-screen px-4 py-12 overflow-x-hidden sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log'>
      
      {/* Encabezado + botón idioma */}
      <div className='flex flex-col items-start justify-start max-w-4xl gap-4 mx-auto lg:flex-row lg:justify-between lg:items-center'>
        <h2 className='text-2xl font-bold text-white'>{lang === "es" ? "Política de Privacidad" : "Privacy Policy"}</h2>
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
  )
}

export default PoliticaPrivacidad;
