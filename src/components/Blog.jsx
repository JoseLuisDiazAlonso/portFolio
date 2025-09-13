import React from 'react';
import ArticleCard from './ArticleCard';
import Seguridad from '../assets/media/seguridad.png';

const articulos = {
    es: {
      title: "Mis Artículos de LinKedin",
      description: "Aqui puedes consultar algunos de los Artículos que escribo para LinKedin.",
      articulo: [
        {id: 0, title: 'Seguridad en el Desarrollo Moderno', imagen: Seguridad, description: 'Artículo sobre la importancia de la seguridad durante el desarrollo.'}
      ]

    },
    en: {
      title: "My LinKedIn Articles",
      description: "Security in Modern Development",
      articulo: [
        {id: 0, title: 'Seguridad en el Desarrollo Moderno', imagen: Seguridad, description: 'Article about the importance of security during development.'}
      ]
    }
  }

const Blog = ({lang = "es"}) => {
  const text = {
    es: {
      title: "MIS ARTÍCULOS DE LINKEDIN",
      description: "Aquí comparto algunas de mis publicaciones sobre desarrollo y tecnología"
    },
    en: {
      title: "MY LINKEDIN ARTICLES",
      description: "Here, i share some of my posts about development and technology."
    }
  };

  return (
    <section id='blog' className='w-full max-w-5xl p-8 mx-auto text-white bg-gray-800 backdrop-blur-md rounded-2xl shadow-log'>
      <h3 className='mb-8 text-2xl font-bold text-center'>{text[lang].title}</h3>
      <p className='mb-[20px] text-lg'>{text[lang].description}</p>

      {/**Grid de Artículos */}
      <div className='flex justify-center'>
        <ArticleCard
        image={Seguridad}
        title={articulos[lang].articulo[0].title}
        description={articulos[lang].articulo[0].description}
        link="https://www.linkedin.com/feed/update/urn:li:activity:7372549069233123328/"/>
      </div>    
    </section>
  )
}

export default Blog
