import React from 'react';
import {GlobeAltIcon} from '@heroicons/react/24/solid';

const Samain = ({lang, toggleLanguage}) => {

  const textos = {
    es: (
      <>
       <p className="mb-4">
            Samain es una página web creada para la Asociación Cultural Tierraquemda con el objetivo de dar vida y difusión a la celebración de Samain en Garray (Soria).
            Desde 2017, cada 31 de Octubre, este evento convierte la localidad en un punto de encuentro único donde tradición, historia y cultura se unen en una noche mágica que revive los
            antiguos rituales celtas.
          </p>
          <p className="mb-4">
            La página está compuesta por:
            <ul className="list-disc list-inside">
              <li>Una sección de inicio que da la bienvenida a los visitantes y ofrece una visión general del evento.</li>
              <li>Una sección de historia que detalla los orígenes, la historia de la recreación y los Socios Colaboradores del evento</li>
              <li>Una sección de actualidad en la cual se muestra el Cartel del evento y un organigrama con los actos previstos.</li>
              <li>Una sección de El Bosque de los Héroes, inaccesible por el momento pues está en construcción</li>
              <li>Una sección multimedia en la cual se encuentra una galería de fotos y una exposición de los Carteles</li>
              <li>Una sección de contacto donde se incluye la ubicación y el contacto de la Asociación Tierraquemada</li>
            </ul>
          </p>
      </>
    ),
    en: (
      <>
        <p className="mb-4">
            Samain is a website created for the Asociación Cultural Tierraquemda with the aim of bringing to life and promoting the celebration of Samain in Garray (Soria).
            Since 2017, every October 31st, this event transforms the town into a unique meeting point where tradition, history, and culture come together on a magical night that revives ancient Celtic rituals.
          </p>
          <p className="mb-4">
            The website consists of:
            <ul className="list-disc list-inside">
              <li>A home section that welcomes visitors and provides an overview of the event.</li>
              <li>A history section that details the origins, the history of the reenactment, and the Event's Collaborating Partners.</li>
              <li>A news section that displays the event poster and a schedule of the planned activities.</li>
              <li>A section called The Forest of Heroes, currently inaccessible as it is under construction.</li>
              <li>A multimedia section that includes a photo gallery and an exhibition of the Posters.</li>
              <li>A contact section that includes the location and contact information of the Asociación Tierraquemada.</li>

            </ul>
          </p>
      </>
    )
          }
  
  return (
    <section className="p-8 mx-auto text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl">
      <div className="relative grid items-center grid-cols-3 mb-8">
  <div></div>

  {/* Hacemos que el h2 no capture clicks */}
  <h2 className="text-2xl font-bold text-center pointer-events-none">SAMAIN</h2>

  <div className="flex justify-end pr-8">
    <button
      type="button"
      onClick={() => { console.log('toggle clicked'); toggleLanguage && toggleLanguage(); }}
      className="relative z-10 flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
    >
      <GlobeAltIcon className="w-5 h-5" />
      <span>{lang === "es" ? "ES" : "EN"}</span>
    </button>
  </div>
</div>
  
      {/**Video con Controles */}
      <div className='mb-8'>
        <video className='w-full h-[500px] object-cover rounded-xl shadow-lg' src='/public/videos/Samain.mp4' controls autoPlay loop muted/>
      </div>

      {/* Contenido dividido en aside + texto */}
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
        
        {/* Aside → arriba en móvil, izquierda en escritorio */}
        <aside className="order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{lang === "es" ? "Tecnologías utilizadas" : "Used Technologies"}</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>

            <h3 className="text-xl font-bold">{lang === "es" ? "Categoría" : "Category"}</h3>
            <p className="text-gray-700">Web</p>

            <h3 className="text-xl font-bold">{lang === "es" ? "Enlace al Proyecto" : "Project Link"}</h3>
            <a
              href="https://samain.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://samain.es/
            </a>
          </div>
        </aside>
        {lang === "es" ? textos.es : textos.en}
      </div>
    </section>
  );
};

export default Samain;
