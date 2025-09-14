import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const JuegoMemoria = ({ lang = "es", toggleLanguage }) => {
  const textos = {
    es: (
      <div>
        <p className='order-2 lg:col-span-2 lg:order-none'>
          Este juego de memoria fue desarrollado utilizando React y Tailwindcss. El objetivo es encontrar las parejas de cartas
          iguales antes de que se acabe el tiempo.
        </p>
        <p className='order-3 lg:col-span-2 lg:order-none'>
          El juego consiste en:
          <ul className='list-disc list-inside'>
            <li>Un temporizador con cuenta atrás</li>
            <li>Página de introducción con botón de start</li>
            <li>Tablero de juego con cartas volteadas</li>
            <li>Al hacer click en una carta, esta se voltea</li>
            <li>Si las cartas son iguales, permanecen boca arriba</li>
            <li>Si las cartas son diferentes, se vuelven a voltear</li>
            <li>Pantalla de victoria si se encuentran todas las parejas a tiempo</li>
            <li>Pantalla de derrota si se acaba el tiempo</li>
          </ul>
        </p>
      </div>
    ),
    en: (
      <div>
        <p className='order-2 lg:col-span-2 lg:order-none'>
          This memory game was developed using React and Tailwindcss. The objective is to find matching pairs of cards before time runs out.
        </p>
        <p className='order-3 lg:col-span-2 lg:order-none'>
          The game consists of:
          <ul className='list-disc list-inside'>
            <li>A countdown timer</li>
            <li>Introduction page with start button</li>
            <li>Game board with flipped cards</li>
            <li>Clicking on a card flips it over</li>
            <li>If the cards match, they remain face up</li>
            <li>If the cards do not match, they flip back over</li>
            <li>Victory screen if all pairs are found in time</li>
            <li>Defeat screen if time runs out</li>
          </ul>
        </p>
      </div>
    )
  };

  return (
    <section className='p-8 mx-auto overflow-x-hidden text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl'>
      
      {/* Encabezado responsive */}
      <div className='flex flex-col items-start justify-start gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center'>
        <h2 className='text-2xl font-bold text-white'>
          {lang === "es" ? "JUEGO DE MEMORIA" : "MEMORY GAME"}
        </h2>
        <button
          type="button"
          onClick={() => toggleLanguage && toggleLanguage()}
          className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <GlobeAltIcon className='w-5 h-5'/>
          <span>{lang === "es" ? "ES" : "EN"}</span>
        </button>
      </div>

      {/* Video responsive desde public/videos/ */}
      <div className='w-full mb-8 overflow-hidden shadow-lg rounded-xl'>
        <video 
          src="/videos/juegoMemoria.mp4" 
          controls 
          autoPlay 
          loop 
          muted 
          className='w-full h-auto max-h-[500px] object-contain rounded-xl'
        />
      </div>

      {/* Contenido + aside */}
      <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3'>
        <aside className='p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl'>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
            <ul className='text-gray-700 list-disc list-inside'>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>JavaScript</li>
            </ul>
            <h3 className='text-xl font-bold'>{lang === "es" ? "Categoría" : "Category"}</h3>
            <p className='text-gray-700'>Web</p>
          </div>
        </aside>

        <div className="lg:col-span-2">{lang === "es" ? textos.es : textos.en}</div>
      </div>

    </section>
  );
};

export default JuegoMemoria;
