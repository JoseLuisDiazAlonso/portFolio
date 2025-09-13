import React from 'react'

const ArticleCard = ({title, image, description, link}) => {
  return (
    <a href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='block max-w-sm overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl'>
        {/**Imagen */}
        <img src={image} alt="Imágen del Artículo" 
        className='object-cover w-full h-48'/>
        <h3 className='mt-[20px] mb-[2px] text-xl font-bold text-center text-gray-800'>{title}</h3>
        <div className='p-4 mt-[2px]'>
            {description && (<p className='mt-2 text-gray-600'>{description}</p>)}
        </div>
    </a>
  )
}

export default ArticleCard
