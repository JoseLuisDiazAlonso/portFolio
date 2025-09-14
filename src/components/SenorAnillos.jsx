import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const SenorAnillos = ({ lang, toggleLanguage }) => {
  const textos = {
        es: (
            <div>
                <p className='mb-4'>
                    Juego del señor de los Anillos desarrollado con cariño como proyecto final de Máster Full-stack, 
                    una experiencia que me permitió poner en práctica todo lo aprendido de forma creativa y divertida. 
                </p>
                <p className='mb-4'>
                    Uno de los objetivos de este juego es trabajar con la herencia de clases y la POO, así como poner en 
                    práctica todo lo aprendido sobre Java. Para ello las Herramientas utilizadas han sido:
                    <ul className='list-disc list-inside'>
                        <li>Espacio para generar un equipo de Héroes y de Bestias</li>
                        <li>Botón que permite eliminar del listado a un Heróe determinado y a una Bestia determinada</li>
                        <li>Botón para comenzar el Juego</li>
                    </ul>
                </p>
            </div>
        ),
        en: (
            <div>
                <p className='mb-4'>
                  Lord of the Rings game lovingly developed as the final project of my Full-Stack Master's program, an 
                  experience that allowed me to put everything i had learned into practice in a creative and enjoyable way.  
                </p>
                <p className='mb-4'>
                    One of the objectives of this game is to work withc class inheritance and OOP, as well as to put into 
                    practice everything i learned about Java. For this, the tools used were:
                    <ul className='list-disc list-inside'>
                        <li>Space to create a team of Heroes and Beast</li>
                        <li>A button that allows removing a specific Hero and a specific Beast from the list</li>
                        <li>A button to start the Game</li>
                    </ul>
                </p>
            </div>
        )
    }
  
  return (
    <section className='p-6 mx-auto overflow-hidden text-white shadow-lg bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl max-w-7xl'>
      <div className='flex flex-col items-start justify-start gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center'>
        <div></div>
        <h2 className='text-2xl font-bold text-center text-white'>EL SEÑOR DE LOS ANILLOS</h2>
        <div className='flex justify-center sm:justify-end sm:pr-8'>
          <button 
            onClick={toggleLanguage} 
            className='flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
            <GlobeAltIcon className='w-5 h-5'/>
            <span>{lang === "es" ? "ES" : "EN"}</span>
          </button>
        </div>
      </div>

      <div className='mb-8'>
        <video 
          src='/videos/SenorAnillos.mp4' 
          controls autoPlay loop muted 
          className='w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg'
        />
      </div>

      <div className='grid grid-cols-1 gap-8 px-4 mt-8 lg:grid-cols-3'>
        <aside className='order-1 p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl lg:order-none'>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
            <ul className='text-gray-700 list-disc list-inside'>
              <li>Java</li>
              <li>JavaFx</li>
            </ul>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Categoría" : "Category"}</h3>
            <p className='text-gray-700'>App</p>
          </div>
        </aside>

        <div>{lang === "es" ? textos.es : textos.en}</div>
      </div>
    </section>
  )
}

export default SenorAnillos;
