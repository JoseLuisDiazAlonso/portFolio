import React from 'react'

const ScrollTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };
  return (
    <button
    onClick={scrollToTop}
    className='fixed z-50 px-1 pb-[60px] text-sm text-red-600 transform rotate-90 bg-transparent bottom-10 right-2 hover:text-blue writing-verticl-rl md:text-base md:px-2'>
      BACK TO TOP
    </button>
  )
}

export default ScrollTopButton
