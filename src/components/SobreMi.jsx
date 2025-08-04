import React, { useState } from "react";

const SobreMi = ({ language }) => {
  const [showFull, setShowFull] = useState(false);

  const texts = {
    es: {
      intro: `Soy un profesional con una trayectoria diversa y enriquecedora, que ha hecho una transición sólida
      hacia el mundo del desarrollo y la tecnología. Tras licenciarme en Ciencia y Tecnología de los Alimentos,
      trabajé desde 2008 hasta 2021 en la industria alimentaria, primero como técnico de calidad y más adelante
      como responsable del departamento de calidad en una empresa dedicada a la importación y exportación de fruta.
      Esta etapa me dotó de una gran capacidad de análisis, liderazgo, gestión de equipos y atención al detalle,
      habilidades que hoy aplico con naturalidad en el desarrollo de software.`,

      resto: `
      Movido por mi interés por la tecnología, en los últimos años me he volcado en mi formación como programador.
      He completado dos másteres online con Tokio School: uno en Desarrollo Web (HTML, CSS, JavaScript) y otro en
      Java y Programación orientada a Objetos. Además, me he especializado en herramientas clave como Git y GitHub,
      MySQL y React, y actualmente curso un programa en Desarrollo de Aplicaciones Android con la misma academia.

      He aplicado estos conocimientos en proyectos reales y funcionales, incluyendo:
      - El desarrollo de dos páginas web para una asociación cultural.
      - La creación de una web profesional para un fisioterapeuta freelance.
      - El diseño y desarrollo de una aplicación de gestión de rutas para optimizar procesos internos
        en la empresa donde actualmente trabajo en funciones administrativas.

      Estas experiencias me han permitido consolidar una visión completa del ciclo de desarrollo,
      desde la detección de necesidades hasta la implementación de soluciones prácticas.

      Además, me he formado como piloto de drones, lo que refleja mi mentalidad proactiva,
      mi pasión por la tecnología y mi constante búsqueda de aprendizaje.

      Actualmente, busco una oportunidad profesional que me permita aportar valor como desarrollador,
      integrando mi experiencia previa en sectores exigentes con mis competencias técnicas
      y mi enfoque orientado a la mejora continua.
      `,
    },
    en: {
      intro: `I am a professional with a diverse and enriching background who has successfully transitioned
      into the world of development and technology. After graduating in Food Science and Technology,
      I worked from 2008 to 2021 in the food industry, first as a quality technician and later
      as head of the quality department in a company dedicated to the import and export of fruit.
      This stage provided me with strong analytical skills, leadership, team management, and attention to detail,
      which I now naturally apply in software development.`,

      resto: `
      Driven by my interest in technology, in recent years I have devoted myself to training as a programmer.
      I have completed two online master's degrees with Tokio School: one in Web Development (HTML, CSS, JavaScript)
      and another in Java and Object-Oriented Programming. In addition, I have specialized in key tools such as Git
      and GitHub, MySQL, and React, and I am currently studying Android Application Development with the same academy.

      I have applied this knowledge in real, functional projects, including:
      - The development of two websites for a cultural association.
      - The creation of a professional website for a freelance physiotherapist.
      - The design and development of a route management application to optimize internal processes
        in the company where I currently work in administrative functions.

      These experiences have allowed me to consolidate a complete vision of the development cycle,
      from identifying needs to implementing practical solutions.

      In addition, I have trained as a drone pilot, reflecting my proactive mindset,
      passion for technology, and constant pursuit of learning.

      I am now seeking a professional opportunity that will allow me to add value as a developer,
      integrating my previous experience in demanding sectors with my technical skills
      and my focus on continuous improvement.
      `,
    },
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-fixed">
      <div className="w-[90%] p-8 text-justify min-h-full bg-fixed shadow-2xl rounded-2xl backdrop-blur-lg flex flex-col space-y-[10px]">
        <h2 className="text-2xl font-bold text-center drop-shadow-lg">
          {language === "es" ? "SOBRE MÍ" : "ABOUT ME"}
        </h2>

        {/* Siempre mostrar la introducción */}
        <p>{texts[language].intro}</p>

        {/* Mostrar el resto solo si showFull es true */}
        {showFull && <p className="mt-4 whitespace-pre-line">{texts[language].resto}</p>}

        {/* Botones */}
        {!showFull && (
          <button
            onClick={() => setShowFull(true)}
            className="self-center px-4 py-2 mt-4 text-white rounded-lg bg-white/10 hover:bg-blue-600"
          >
            {language === "es" ? "Leer más" : "Read more"}
          </button>
        )}

        {showFull && (
          <button
            onClick={() => setShowFull(false)}
            className="self-center px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            {language === "es" ? "Cerrar" : "Close"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SobreMi;
