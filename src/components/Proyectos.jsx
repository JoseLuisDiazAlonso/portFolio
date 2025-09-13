import React from 'react';
import Card from './Card';
import Samain from '../assets/media/samain.png';
import Interkeltoi from '../assets/media/interkeltoi.png';
import Fisioterapeuta from '../assets/media/fisioterapeuta.png';
import Atreva from '../assets/media/atreva.png';
import Juego from '../assets/media/StarWars.png';
import Senpai from '../assets/media/Senpai.png';
import SenorAnillos from '../assets/media/SenorAnillos.png';

const TRADUCCIONES = {
  es: {
    title: "MIS PROYECTOS",
    description: "Aquí tienes algunos de mis proyectos destacados. Para verlos con más detalle haz click en ellos.",
    proyectos: [
      { id: 1, title: 'Samain', image: Samain, description: 'Página web para la Asociación Cultural Tierraquemada', link: '/samain' },
      { id: 2, title: 'Interkeltoi', image: Interkeltoi, description: 'Página web para la Asociación Cultural Tierraquemada', link: '/interkeltoi' },
      {id: 3, title: 'Web Fisioterapeuta', image:Fisioterapeuta, description: 'Página web para un fisioterapeuta', link: '/fisioterapeuta'},
      {id: 4, title: 'Atreva', image: Atreva, description: 'Aplicación web creada para una empresa de Gestión de Residuos', link: '/atreva'},
      {id: 5, title: 'Juego de Memoria', image: Juego, description: 'Juego de memoria desarrollado con React', link: '/juego'},
      {id: 6, title: 'Senpai', image:Senpai, description: 'Página web realizada como proyecto fin de Master', link:'/Senpai'},
      {id: 7, title: 'Señor de los Anillos', image: SenorAnillos, description: 'Juego del Señor de los anillos desarrollado como proyecto fin de Master', link:'/SenorAnillos'}
    ]
  },
  en: {
    title: "MY PROJECTS",
    description: "Here are some of my featured projects. Click on them to see more details.",
    proyectos: [ { id: 1, title: 'Samain', image: Samain, description: 'Website for the Cultural Association Tierraquemada', link: '/samain' },
      { id: 2, title: 'Interkeltoi', image: Interkeltoi, description: 'Website for the Cultural Association Tierraquemada', link: '/interkeltoi' },
      {id: 3, title: 'Physiotherapist Website', image:Fisioterapeuta, description: 'Website for a physiotherapist', link: '/fisioterapeuta'},
      {id: 4, title: 'Atreva', image: Atreva, description: 'Web application created for a Waste Management company', link: '/atreva'},
      {id: 5, title: 'Memory Game', image: Juego, description: 'Memory game developed with React', link: '/juego'},
      {id: 6, title: 'Senpai', image: Senpai, description: "Website developed as a Master's final project", link: '/Senpai'},
      {id: 7, title: 'Lords of the Rings', image: SenorAnillos, description: "Lord of the Rings game developed for a master's final project", link: '/SenorAnillos'}
     ]
  }
};


const Proyectos = ({lang = "es"}) => {
  const traducciones = TRADUCCIONES[lang] || TRADUCCIONES['es'];
  const { title, description, proyectos } = traducciones;
  
  return (
    <div id='proyectos' className='w-full max-w-5xl p-8 mx-auto text-white bg-gray-800 backdrop-blur-md rounded-2xl shadow-log'>
      <h2 className='mb-8 text-2xl font-bold text-center'>{title}</h2>
      <p className='mb-[20px] text-lg'>{description}</p>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {proyectos.map((proyecto) => (
          <Card key={proyecto.id} image={proyecto.image} title={proyecto.title} description={proyecto.description} link={proyecto.link} />
        ))}
      </div>
    </div>
  )
}

export default Proyectos
