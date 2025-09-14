import React from 'react';
import Carousel from "./Carousel";
import { GlobeAltIcon } from '@heroicons/react/24/solid';

import AtrevaImg from '../assets/media/atreva.png';
import Atreva1 from '../assets/media/atreva1.png';
import Atreva2 from '../assets/media/atreva2.png';

const Atreva = ({lang, toggleLanguage}) => {
    const images = [AtrevaImg, Atreva1, Atreva2];
    const textos = {
        es: (
            <div>
                <p className='order-2 lg:col-span-2 lg:order-none'>
                    Esta aplicación fue desarrollada para una empresa especializada en la gestión de residuos, con export default con
                    el propósito de mejorar la eficiencia operativa de sus servicios.
                    La información se recopila a través de un programa externo de GPS y se introducen en la aplicción de Atreva.
                    Gracias a toda esta información, la aplicción permite una rápida y fácil interpretación de los datos,
                    ofreciendo a la empresa una visión clara de sus rutas.
                </p>
                <p className='order-3 lg:col-span-2 lg:order-none'>
                    La aplicación está compuesta por:
                
                    <ul className='list-disc list-inside'>
                        <li>Una formulario para introducir los datos de una manera rápida y eficaz. Esta información es enviada a una base de datos</li>
                        <li>Una Tabla que recibe los datos de la base de datos y compuesta por filtros que nos permite filtrar la información</li>
                        <li>Una gráfica que muestra los datos de la tabla. Si se filtrasen los datos de la tabla mostraría la representación gráfica de los datos filtrados.</li>
                    </ul>
                 </p>
            </div>
        ),
        en: (
            <div>
                <p className='order-2 lg:col-span-2 lg:order-none'>
                    This application was developed for a company specializing in waste management, with the aim of improving the operational efficiency of their services.
                    The information is collected through an external GPS program and entered into the Atreva application.
                    Thanks to all this information, the application allows for quick and easy interpretation of the data,
                    offering the company a clear view of their routes.
                </p>
                <p className='order-3 lg:col-span-2 lg:order-none'>
                    The application consists of:
                    <ul className='list-disc list-inside'>
                        <li>A form to enter data quickly and efficiently. This information is sent to a database.</li>
                        <li>A table that receives data from the database and is composed of filters that allow us to filter the information.</li>
                        <li>A graph that displays the data from the table. If the table data were filtered, it would show the graphical representation of the filtered data.</li>    
                    </ul>
                </p>
            </div>
        )
    }
  return (
    <section className='p-8 mx-auto text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl'>
        <div className="flex flex-col items-start justify-start gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center">
    {/* Columna izquierda vacía */}
    <div></div>
    {/* Columna central → título centrado */}
    <h2 className="text-2xl font-bold text-center pointer-events-none">ATREVA</h2>
    {/* Columna derecha → botón alineado a la derecha */}
    <div className="flex justify-end pr-8">
        <button type='button' onClick={() => {console.log('toggle clicked'); toggleLanguage && toggleLanguage();}} className="relative z-10 flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        <GlobeAltIcon className="w-5 h-5"/>
        <span>{lang === "es" ? "ES" : "EN"}</span>
        </button>
    </div>
</div>
            <Carousel images={images} />
        {/**Contenido del aside */}
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            <aside className='order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none'>
                <div className='space-y-4'>
                    <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
                    <ul className='text-gray-700 list-disc list-inside'>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Tailwindcss</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySql</li>
                    </ul>
                    <h3 className='text-xl font-bold'>{lang === "es" ? "Categoría" : "Category"}</h3>
                    <p className='text-gray-700'>App</p>
                </div>
            </aside>
            <div className='lg:col-span-2'>
                {lang === "es" ? textos.es : textos.en}
            </div>
        </div>     
    </section>
  )
}

export default Atreva;
