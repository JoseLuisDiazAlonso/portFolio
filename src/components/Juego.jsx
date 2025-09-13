import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const Juego = ({lang, toggleLanguage}) => {
    const textos = {
        es: (
            <div>
                <p className='order-2 lg:col-span-2 lg:order-none'>
                    Este juego de memoria fue desarrollado utilizado React y Tailwindcss. El objetivo del juego es encontrar las parejas de cartas
                    igualles antes que se acabe el tiempo.
                </p>
                    <p className='order-3 lg:col-span-2 lg:order-none'>
                        El juego consiste en:
                        <ul className='list-disc list-inside'>
                            <li>Un temporizador con una cuenta atrás</li>
                            <li>Página de introducción con botón de start</li>
                            <li>Tablero de juego con cartas volteadas</li>
                            <li>Al hacer click en una carta, esta se voltea</li>
                            <li>Si las cartas son iguales, permanecen boca arriba</li>
                            <li>Si las cartas son diferentes, se vuelven a voltear</li>
                            <li>Si se encuentran todas las parejas antes de que se acabe el tiempo, se muestra una pantalla de victoria</li>
                            <li>Si se acaba el tiempo, se muestra una pantalla de derrota</li>
                        </ul>
                     </p>
             </div>
        ),
        en: (
            <div>
                <p className='order-2 lg:col-span-2 lg:order-none'>
                    This memory game was developed using React. The objective of the game is to find matching pairs of cards before time runs out.
                </p>
                    <p className='order-3 lg:col-span-2 lg:order-none'>
                        The game consists of:
                        <ul className='list-disc list-inside'>
                            <li>A countdown timer</li>
                            <li>An introduction page with a start button</li>
                            <li>A game board with flipped cards</li>
                            <li>Clicking on a card flips it over</li>
                            <li>If the cards match, they remain face up</li>
                            <li>If the cards do not match, they flip back over</li>
                            <li>If all pairs are found before time runs out, a victory screen is displayed</li>
                            <li>If time runs out, a defeat screen is displayed</li>
                        </ul>
                    </p>
            </div>
        )
    }
  return (
    <section className='p-8 mx-auto text-white bg-gradient-to-b from-blue-900 via-blue-400 rounded-2xl shadow-log max-w-7xl'>
        <div className='grid items-center grid-cols-3 mb-8'>
            <div></div>

            <h2 className='text-2xl font-bold text-center pointer-events-none'>{lang === "es" ? "JUEGO DE MEMORIA" : "MEMORY GAME"}</h2>
        

            <div className='flex justify-end pr-8'>
                <button
                    type="button"
                    onClick={() => {
                    console.log('toggle clicked');
                    toggleLanguage && toggleLanguage();
                    }}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    <GlobeAltIcon className='w-5 h-5'/>
                    <span>{lang === "es" ? "ES" : "EN"}</span>
                </button>
            </div>
        </div>

        <div className='mb-8'>
            <video className='w-full h-[550px] object-contain rounded-xl shadow-lg' src="/public/videos/juegoMemoria.mp4" controls autoPlay loop-muted/>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3'>
  {/* Aside ocupa 1 columna */}
  <aside className='p-4 text-gray-800 bg-gray-100 shadow-md rounded-xl'>
    <div className='space-y-4'>
      <h3 className='text-xl font-bold'>{lang === "es" ? "Tecnologías Utilizadas" : "Used Technologies"}</h3>
      <ul>
        <li>REACT</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
      <h3 className='text-xl font-bold'>{lang === "es" ? "Categoria" : "Category"}</h3>
      <p className='text-gray-700'>Web</p>
    </div>
  </aside>
  {/* Texto ocupa 2 columnas en escritorio */}
  <div className="lg:col-span-2">
    {lang === "es" ? textos.es : textos.en}
  </div>
</div>

     </section>
  )
}

export default Juego
