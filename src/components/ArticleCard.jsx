import React from 'react';

const ArticleCard = ({ title, image, description, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='block w-full max-w-sm overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl'
    >
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className='object-cover w-full h-48 md:h-56 rounded-t-2xl'
      />

      {/* Contenido */}
      <div className='p-4'>
        <h3 className='text-xl font-bold text-center text-gray-800'>{title}</h3>
        {description && (
          <p className='mt-2 text-center text-gray-600'>{description}</p>
        )}
      </div>
    </a>
  );
};

export default ArticleCard;
