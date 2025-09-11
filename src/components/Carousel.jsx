import React from 'react'

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className='relative w-full max-w-xl mx-auto'>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='object-cover w-full h-64 shadow-md rounded-xl' />

            {/**Botón izquierdo */}
            <button onClick={prevSlide} className='absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full shadow-md top-1/2 left-4 hover:bg-opacity-75'>
                &#10094;
            </button>

            {/**Botón derecho */}
            <button onClick={nextSlide} className='absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full shadow-md top-1/2 right-4 hover:bg-opacity-75'>
                &#10095;
            </button>

            {/**Indicadores */}
            <div className='absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2'>
                {images.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
