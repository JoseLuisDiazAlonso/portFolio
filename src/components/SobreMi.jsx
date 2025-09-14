import React from 'react';
import fotoCv from '../assets/media/foto cv.jpg';
import CV from '../assets/media/CV FULL STACK.pdf';

const SobreMi = ({ lang }) => {
  const textos = {
  es: (
    <>
      <p className='mt-2'>
        Profesional con más de 12 años de experiencia en la industria alimentaria, acostumbrado a trabajar de manera organizada y eficiente.
      </p>
      <p className='mt-2'>
        Desde 2022, he dado un <span className='font-bold'>giro profesional hacia la programación</span>, desarrollando proyectos personales y freelance, algunos de los cuales he entregado a clientes, incluyendo la empresa en la que actualmente trabajo, adaptando las soluciones a necesidades reales que he identificado.
      </p>
      <p className='mt-2'>
        Mi experiencia combinando análisis, organización y resolución de problemas me permite aportar valor inmediato en proyectos de desarrollo web, creando soluciones prácticas y efectivas.
      </p>
    </>
  ),
  en: (
    <>
      <p className='mt-2'>
        Professional with over 12 years of experience in the food industry, accustomed to working in an organized and efficient way.
      </p>
      <p className='mt-2'>
        Since 2022, I have made a <span className='font-bold'>career shift towards programming</span>, developing personal and freelance projects, some of which I have delivered to clients, including the company I currently work for, providing solutions tailored to real needs I identified.
      </p>
      <p className='mt-2'>
        My experience combining analysis, organization, and problem-solving allows me to add immediate value to web development projects, creating practical and effective solutions.
      </p>
    </>
  )
};

  return (
    <section id='about' className='flex flex-col items-center w-full max-w-4xl p-6 mx-auto mt-4 mb-0 text-center sm:p-8 md:p-10 text-shadow-2xs rounded-xl bg-white/30 backdrop-blur-md'>
      <h2 className='mb-4 text-3xl font-bold text-gray-900 md:mb-6 sm:text-4xl text-shadow-lg'>
        {lang === "es" ? "SOBRE MI" : "ABOUT ME"}
      </h2>

      <img
        src={fotoCv}
        alt="Foto de CV"
        className='object-cover w-40 h-40 border-4 border-white rounded-full shadow-md sm:w-44 sm:h-44 md:w-48 md:h-48'
      />

      <h2 className='mt-2 text-xl font-bold sm:text-2xl md:text-2xl text-shadow-lg'>
        JOSE LUIS DIAZ ALONSO
      </h2>

      <div className='px-2 mt-4 text-left sm:text-center sm:px-6'>
        {lang === "es" ? textos.es : textos.en}
      </div>

      <a
        href={CV}
        target='_blank'
        rel='noopener noreferrer'
        download='CV_JoseLuisDiazAlonso.pdf'
        className='px-4 py-2 mt-4 font-bold text-white transition-colors duration-300 bg-blue-600 rounded shadow-lg hover:bg-blue-700'
      >
        {lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
      </a>
    </section>
  );
};

export default SobreMi;
