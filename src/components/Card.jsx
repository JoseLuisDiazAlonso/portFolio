import React from 'react'

const Card = ({image, title, link, description}) => {
    const handleClick = () => {
        window.open(link, '_blank'); //Abre el enlace en una nueva pestaña
    };
  return (
    <div onClick={handleClick} className='max-w-sm p-4 text-center transition-transform duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105'>
        <img src={image} alt={title} className='object-cover w-full h-48 mb-4 rounded-lg'/>
        <h3 className='text-xl font-bold text-center'>{title}</h3>
        <div className='p-4 mt-[5px]'>
            <p className='font-medium text-gray-700'>{title}</p>
            {description && (
                <p className='mt-2 text-gray-600'>{description}</p>
            )}
        </div>
      
    </div>
  )
}

export default Card
