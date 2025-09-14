import React from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg sm:max-w-xl rounded-xl">
      {/* Imagen */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-cover w-full h-64 transition-transform duration-500 sm:h-80 md:h-96"
      />

      {/* Botón izquierdo */}
      <button
        onClick={prevSlide}
        className="absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full shadow-md top-1/2 left-2 sm:left-4 hover:bg-opacity-75"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Botón derecho */}
      <button
        onClick={nextSlide}
        className="absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full shadow-md top-1/2 right-2 sm:right-4 hover:bg-opacity-75"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-3 left-1/2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
