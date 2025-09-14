import React from 'react';

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-10 right-2 z-50 px-2 py-1 text-sm md:text-base text-red-600 bg-transparent hover:text-blue-600 [writing-mode:vertical-rl] rotate-180'
    >
      BACK TO TOP
    </button>
  );
};

export default ScrollTopButton;
