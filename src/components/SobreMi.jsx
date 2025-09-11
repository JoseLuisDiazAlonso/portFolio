import React from 'react';
import fotoCv from '../assets/media/foto cv.jpg';
import CV from '../assets/media/CV FULL STACK.pdf';

const SobreMi = ({lang}) => {
  const textos = {
    es: (
      <>
        <p className='mt-[10px]'>
          Soy <span className='font-bold'>Licenciado en Ciencia y Tecnología de los Alimentos</span> con más de 12 años de experiencia
          en la industria alimentaria, donde desarrollé competencias clave en <span className='font-bold'>gestión de calidad y logística</span>.
          Durante este tiempo, aprendí a organizar procesos complejos, coordinar equipos y resolver problemas de manera estructurada,
          habilidades que ahora aplico en el mundo de la programación.
        </p>
        <p className='mt-[10px]'>
          En 2022 decidí dar un <span className='font-bold'>giro profesional hacia la programación,</span> un área que siempre me ha apasionado.
          Desde entonces, he estado combinando mi trabajo actual en el sector de gestión de residuos con una formación intensiva
          en desarrollo web, adquiriendo experiencia práctica mediante <span className='font-bold'>proyectos personales y freelance,</span>
          incluyendo colaboraciones para clientes reales, como para la empresa en la que actualmente trabajo.
        </p>
      </>
    ),
    en: (
      <>
        <p className='mt-[10px]'>
          I am a <span className='font-bold'>Graduate in Food Science and Technology</span> with over 12 years of experience
          in the food industry, where I developed key skills in <span className='font-bold'>quality management and logistics</span>.
          During this time, I learned to organize complex processes, coordinate teams, and solve problems in a structured way,
          skills that I now apply in the world of programming.
        </p>
        <p className='mt-[10px]'>
          In 2022, I decided to take a <span className='font-bold'>career turn towards programming,</span> a field that has always
          fascinated me. Since then, I have been combining my current job in the waste management sector with intensive web development
          training, gaining practical experience through <span className='font-bold'>personal and freelance projects,</span> including collaborations
          for real clients, such as the company I currently work for.
        </p>
      </>
    )

  };
  return (
    <div id='sobremi' className='flex flex-col items-center w-[70vw] p-10 mx-auto mt-4 mb-0 text-center text-shadow-2xs rounded-xl bg-white/30 backdrop-blur-md'>
        <h2 className='mb-6 text-4xl font-bold text-gray-900 text-shadow-lg'>{lang === "es" ? "SOBRE MI" : "ABOUT ME"}</h2>
        <img src={fotoCv} alt="Foto de CV" className='object-cover w-48 h-48 border-4 border-white rounded-full shadow-md' />
        <h2 className='mt-[10px] font-bold text-2xl text-shadow-lg'>JOSE LUIS DIAZ ALONSO</h2>  
        {lang === "es" ? textos.es : textos.en}
        {/* Botón para descargar el CV */}
        <a
        href='{CV}'
        target='_blank'
        rel='noopener noreferrer'
        download={'CV_JoseLuisDiazAlonso.pdf'}
        className='px-4 py-2 mt-[15px] font-bold text-white transition-colors duration-300 bg-blue-600 rounded shadow-lg hover:bg-blue-700 '>
          {lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
        </a>
     </div>  
  )
}

export default SobreMi
