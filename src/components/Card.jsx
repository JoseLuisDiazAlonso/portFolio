import React from 'react';

const Card = ({ image, title, link, description }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-sm p-4 text-center transition-transform duration-300 bg-white shadow-lg cursor-pointer rounded-xl hover:scale-105 hover:shadow-2xl"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 mb-4 sm:h-56 md:h-64 rounded-xl"
      />
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-gray-600 sm:text-base">{description}</p>
      )}
    </div>
  );
};

export default Card;
