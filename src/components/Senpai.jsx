import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';


const Senpai = ({lang, toggleLanguage}) => {
    const textos = {
        es: (
            <div>
                <p className='mb-4'>
                   Senpai es una web ficticia creada con cariño como proyecto final del Máster en Desarrollo Web,
                   una experiencia que me permitió poner en práctica todo lo aprendido de forma creativa y divertida. 
                </p>
                <p className='mb-4'>
                    La página web está compuesta por:
                    <ul className='list-disc list-inside'>
                        <li>Una página de Inicio que sirve como presentación del restaurante</li>
                        <li>Una sección de Carta y Especialidades en el que se pueden seleccionar los artículos que se añadirán 
                            a una cesta de la compra que más tarde se enviará por email al restaurante ficticio con el pedido.
                        </li>
                        <li>Una sección de Carta de Menú del día</li>
                        <li>Una sección para reservar mesas mediante un formulario. La información se enviará por email al 
                            restaurante ficticio.
                        </li>
                    </ul>
                </p>
            </div>
        ),

        en: (
            <div>
                <p className='mb-4'>
                    Senpai is a fictional website lovingly created as the final project of the Master's in Web Development, an 
                    experience that allowed me to put everything i learn into practice in a creative and enjoyble way.
                </p>
                <p className='mb-4'>
                    The website is made up of:
                    <ul className='list-disc list-inside'>
                        <li>A Home page that serves as an introduction to the restaurant</li>
                        <li>A Menu and Specialties section where users can select items to add to a shopping cart, wich is 
                            later sent by email to the fictional restaurant with the order.
                        </li>
                        <li>A Daily Menu section</li>
                        <li>A Reservation section with a form to book tables, The information is sent by email to the 
                            fictional restaurant.
                        </li>
                    </ul>
                </p>
            </div>

        )
    }
  return (
    <section className='p-8 mx-auto text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl'>
        <div className='grid items-center grid-cols-3 mb-8'>
            <div></div>

            <h2 className='text-2xl font-bold text-center pointer-events-none'>SENPAI</h2>
            <div className='flex justify-end pr-8'>
                <button type='button' onClick={() => {
                    console.log("toggle clicked");
                    toggleLanguage && toggleLanguage();
                }}
                className= 'flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
                    <GlobeAltIcon className='w-5 h-5'/>
                    <span>{lang === "es" ? "ES" : "EN"}</span>
                </button>
            </div>
        </div>

        <div className='mb-8'>
                <video src="/public/videos/Senpai.mp4" controls autoPlay loop muted className='w-full h-[500px] object-contain rounded-xl shadow-lg'/>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3'>
            <aside className='order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none'>
                <div className='space-y-4'>
                    <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
                    <ul className='text-gray-700 list-disc list-inside'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>EmailJS</li>
                    </ul>
                    <h3 className='text-xl font-bold'>{lang === "es" ? "Categoría" : "Category"}</h3>
                    <p className='text-gray-700'>Web</p>
                </div>
            </aside>
            {lang === "es" ? textos.es : textos.en}
        </div> 
    </section>
  )
}

export default Senpai
