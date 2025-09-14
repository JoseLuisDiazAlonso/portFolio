import React from 'react';
import ArticleCard from './ArticleCard';
import Seguridad from '../assets/media/seguridad.png';

const Blog = ({ lang = "es" }) => {
  const text = {
    es: {
      title: "MIS ARTÍCULOS DE LINKEDIN",
      description: "Aquí comparto algunas de mis publicaciones sobre desarrollo y tecnología",
      articulos: [
        {
          id: 0,
          title: 'Seguridad en el Desarrollo Moderno',
          image: Seguridad,
          description: 'Artículo sobre la importancia de la seguridad durante el desarrollo.',
          link: 'https://www.linkedin.com/feed/update/urn:li:activity:7372549069233123328/'
        }
      ]
    },
    en: {
      title: "MY LINKEDIN ARTICLES",
      description: "Here I share some of my posts about development and technology.",
      articulos: [
        {
          id: 0,
          title: 'Security in Modern Development',
          image: Seguridad,
          description: 'Article about the importance of security during development.',
          link: 'https://www.linkedin.com/feed/update/urn:li:activity:7372549069233123328/'
        }
      ]
    }
  };

  return (
    <section
      id='blog'
      className='w-full max-w-5xl p-8 mx-auto overflow-x-hidden text-white bg-gray-800 rounded-2xl shadow-log'
    >
      <h3 className='mb-6 text-2xl font-bold text-center'>{text[lang].title}</h3>
      <p className='mb-8 text-lg text-center text-gray-200'>{text[lang].description}</p>

      {/* Grid de artículos */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {text[lang].articulos.map((art) => (
          <ArticleCard
            key={art.id}
            image={art.image}
            title={art.title}
            description={art.description}
            link={art.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
