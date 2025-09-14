import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const Interkeltoi = ({ lang, toggleLanguage }) => {
  const textos = {
    es: (
      <>
        <p className='mb-4'>
          Interkeltoi es una página web impulsada por la Asociación Cultural Tierraquemada con el propósito de tender 
          puentes entre comunidades que comparten un mismo legado: la cultura celta. Un espacio vivo donde tradición, 
          historia y vínculos se unen para fortalecer la identidad común y acercar a los pueblos que comparten estas raíces ancestrales.
        </p>
        <p className='mb-4'>
          La página está compuesta por:
          <ul className='list-disc list-inside'>
            <li>Una sección de inicio que da la bienvenida a los visitantes y ofrece una visión general del evento.</li>
            <li>Una sección de historia que detalla los orígenes, la historia de la recreación y los Socios Colaboradores del evento</li>
            <li>Una sección de actualidad con el Cartel del evento y un organigrama de actos previstos.</li>
            <li>Una sección multimedia con galería de fotos y exposición de Carteles</li>
            <li>Una sección de contacto con ubicación y contacto de la Asociación Tierraquemada</li>
          </ul>
        </p>
      </>
    ),
    en: (
      <>
        <p className='mb-4'>
          Interkeltoi is a website driven by the Asociación Cultural Tierraquemada with the purpose of building bridges between communities that share a common heritage: Celtic culture. 
          A living space where tradition, history, and connections come together to strengthen common identity and bring closer the peoples who share these ancestral roots.
        </p>
        <p className='mb-4'>
          The website consists of:
          <ul className='list-disc list-inside'>
            <li>A home section that welcomes visitors and provides an overview of the event.</li>
            <li>A history section detailing origins, the history of the reenactment, and Event's Collaborating Partners.</li>
            <li>A news section with event poster and schedule of planned activities.</li>
            <li>A multimedia section including a photo gallery and Posters exhibition</li>
            <li>A contact section with location and contact info of Asociación Tierraquemada</li>
          </ul>
        </p>
      </>
    )
  };

  return (
    <section className='max-w-full p-8 mx-auto overflow-x-hidden text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log'>
      <div className="flex flex-col items-start justify-start gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center">
        <div></div>
        <h2 className="text-2xl font-bold text-center truncate pointer-events-none">INTERKELTOI</h2>
        <div className="flex justify-end pr-8">
          <button
            type="button"
            onClick={() => toggleLanguage && toggleLanguage()}
            className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <GlobeAltIcon className="w-5 h-5"/>
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>
        </div>
      </div>

      {/* Video */}
      <div className='w-full mb-8 overflow-hidden'>
        <video
          className='w-full h-[500px] object-contain rounded-xl shadow-lg'
          src='/videos/Interkeltoi.mp4'
          controls
          autoPlay
          loop
          muted
        />
      </div>

      {/* Contenido */}
      <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3'>
        <aside className='order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none'>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
            <ul className='text-gray-700 list-disc list-inside'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Categoria" : "Category"}</h3>
            <p className='text-gray-700'>Web</p>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Enlace a Proyecto" : "Project Link"}</h3>
            <a href='https://interkeltoi.net/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
              https://interkeltoi.net/
            </a>
          </div>
        </aside>
        <div className="lg:col-span-2">
          {lang === "es" ? textos.es : textos.en}
        </div>
      </div>
    </section>
  );
};

export default Interkeltoi;
