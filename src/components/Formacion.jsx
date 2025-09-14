import React from 'react'

const Formacion = ({lang}) => {
  //Array de cursos
  const TRADUCCIONES = {
    es: {
      title: "FORMACIÓN",
      description: "Aquí podéis ver los diferentes cursos y másteres que he realizado a lo largo del tiempo.",
      cursos: [
        {
      periodo: "2024- Actualidad",
      título: "Máster en Desarrollo de Aplicaciones Android",
      institucion: "TokioSchool",
      descripción: "Máster de 600 horas cuyo objetivo es impartir los conocimientos teóricos y prácticos necesarios para generar una Aplicación Android."

    },

    {
      periodo: "2023- 2024",
      título: "Git, GitHub, Node.js, Express.js, Tailwindcss, MySQL",
      institucion: "Cursos ofrecidos en plataformas como MoureDev",
      descripcion: "Paralelamente a los master que describo arriba y abajo he estado afianzo y ampliando mi formación en diferentes tecnologías"
    },
    {
      periodo: "2022- 2024",
      título: "Máster en Desarrollador Full-Stack",
      descripcion: "Máster de una duración de 1000 horas en el que adquirí conocimientos teóricos y prácticos sobre: POO, Java, HTML5, CSS3, JAVASCRIPT, REACT"
    }
      ]

    },
    en: {
      title: "EDUCATION",
      descripcion: "Here you can see the different courses and master's programs I have completed over time.",
      cursos: [
        {
          periodo: "2024- Present",
          titulo: "Master's in Android Application Development",
          institucion: "TokioSchool",
          descripcion: "A 600-hour master's program aimed at providing the theoretical and practical knowledge required to develop an Android application.",
        },
        {
          periodo: "2023- 2024",
          titulo: "Git, GitHub, Node.js, Express.js, Tailwindcss, MySQL",
          institucion: "Courses offered on platforms such as MoureDev",
          descripcion: "In parallel with the master's programs mentioned above and below, I have been strengthening and expanding my training in different technologies."
        },
        {
          periodo: "2022- 2024",
          titulo: "Master's in Full-Stack Development",
          descripcion: "A 1,000-hour master's program in which I gained both theoretical and practical knowledge of OOP, Java, HTML5, CSS3, JavaScript, and React."
        }
      ]
    }
  };

  // Obtener los cursos según el idioma seleccionado
  const cursos = TRADUCCIONES[lang]?.cursos || [];
  const title = TRADUCCIONES[lang]?.title || '';
  const description = TRADUCCIONES[lang]?.description || TRADUCCIONES[lang]?.descripcion || '';

  return (
    <div id='education' className='w-full max-w-5xl p-8 text-white bg-gradient-to-b from-blue-900 via-sky-400 to-cian-400 rounded-2xl shadow-log'>
      <h2 className='mb-8 text-2xl font-bold text-center'>{title}</h2>
      <p className='mb-[20px] text-lg'>{description}</p>
      <div className='relative w-3/4'>
      {/**Barra vertical central */}
      <div className='absolute top-0 bottom-0 w-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2'/>
      {/**Render dinámico de cursos */}
      {cursos.map((curso, index) => (
        <div key={index} className='flex items-center mb-16'>
          {/**Intervalo de tiempo */}
          <div className='w-1/2 pr-8 text-right'>
          <p className='text-lg font-semibold text-white'>{curso.periodo}</p>
          </div>
          {/**Descripción de cursos */}
          <div className='w-1/2 pl-8'>
            <h3 className='text-xl font-bold text-white'>{curso.título || curso.title}</h3>
            <p className='text-white text-gray-600'>{curso.institucion}</p>
            <p className='text-white text-gray-600'>{curso.descripcion}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Formacion