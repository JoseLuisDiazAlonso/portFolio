import React from 'react';
import {GlobeAltIcon} from '@heroicons/react/24/solid';

const Fisioterapeuta = ({lang, toggleLanguage}) => {
    const textos = {
        es: (
          <>
          <p className='mb-4'>
            Esta página web fue creada para un fisioterapeuta autónomo con el objetivo de acercar sus servicios a potenciales clientes
            de manera clara y profesional. En ella se presenta información sobre las especialidades, servicios ofrecidos y se facilita
            la reserva de cita.
            </p>
            <p>
                La página está compuesta por:
                <ul className='list-disc list-inside'>
                    <li>Una única página principal en el que a lo largo del scroll, o mediante un menú, se puede acceder a las diferentes secciones</li>
                    <li>Las secciones de las que se compone la cita son: Sobre mi, Listado de servicios prestados, reserva de cita y contacto.</li>
                    <li>Se crea una función de whatsap en la que se puede acceder al whatsap del fisioterapeuta y poder concertar una cita más facilmente.</li>
                </ul>
            </p>
            </>
            ),
          en: (
                <>
                <p className='mb-4'>
                This website was created for a self-employed physiotherapist with the aim of bringing their services closer to potential clients in a clear and professional manner. 
                It presents information about specialties, services offered, and facilitates appointment booking.
                </p>
                <p>
                The website consists of:
                <ul className='list-disc list-inside'>
                    <li>A single main page where, through scrolling or a menu, you can access the different sections.</li>
                    <li>The sections that make up the site are: About Me, List of Services Offered, Appointment Booking, and Contact.</li>
                    <li>A WhatsApp function is created that allows access to the physiotherapist's WhatsApp for easier appointment scheduling.</li>
                </ul>
                </p>                    
                </>
            )
    }
  return (
    <section className='p-8 mx-auto text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl'>
        <div className="grid items-center grid-cols-3 mb-8">
    {/* Columna izquierda vacía */}
    <div></div>

    {/* Columna central → título centrado */}
    <h2 className="text-2xl font-bold text-center pointer-events-none">FISIOTERAPEUTA</h2>
    {/* Columna derecha → botón alineado a la derecha */}
    <div className="flex justify-end pr-8">
        <button
        type="button"
        onClick={() => {
            console.log('toggle clicked');
            toggleLanguage && toggleLanguage();
        }}
        className="relative z-10 flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
        <GlobeAltIcon className="w-5 h-5" />
        <span>{lang === "es" ? "ES" : "EN"}</span>
        </button>
    </div>
</div>
{/**Video con Controles **/}
    <div className="flex flex-col items-center">
        <video  className="w-full max-w-4xl mb-8 rounded-lg shadow-lg" src="/public/videos/Fisioterapeuta.mp4" controls autoPlay loop muted/>
    </div>
    {/* Contenido dividido en aside + texto */}
    <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3'>
         {/* Aside → arriba en móvil, izquierda en escritorio */}
        <aside className='order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none'>
            <div className='space-y-4'></div>
                <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías utilizadas" : "Used Technologies"}</h3>
                <ul className='text-gray-700 list-disc list-inside'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <h3 className='text-xl font-bold'>{lang === "es" ? "Categoría" : "Category"}</h3>
                <p className='text-gray-700'>Web</p>
                <h3 className='text-xl font-bold'>{lang === "es" ? "Enlace a Proyecto" : "Project Link"}</h3>
                <a href='https://danieldiazfisioterapeuta.es/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>https://danieldiazfisioterapeuta/</a>
        </aside>
        {lang === "es" ? textos.es : textos.en}
    </div>
       
    </section>
  )
}

export default Fisioterapeuta
