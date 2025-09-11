import React from 'react';
import { FaJava, FaJsSquare, FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaBootstrap, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiExpress, SiAndroidstudio, SiEclipseide, SiGithub } from 'react-icons/si';

// Traducciones
const traducciones = {
  es: {
    titulo: "HERRAMIENTAS",
    nivel: "Nivel",
    tipos: {
      "Lenguaje": "Lenguaje",
      "Desarrollo Web": "Desarrollo Web",
      "Framework": "Framework",
      "Entorno de Ejecución": "Entorno de Ejecución",
      "Control de Versiones": "Control de Versiones",
      "IDE": "IDE"
    },
    nombres: [
      "Java", "JavaScript", "SQL", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "React", "Express", "Node.js",
      "Git", "GitHub", "Visual Studio Code", "Android Studio", "Eclipse"
    ]
  },
  en: {
    titulo: "TOOLS",
    nivel: "Level",
    tipos: {
      "Lenguaje": "Language",
      "Desarrollo Web": "Web Development",
      "Framework": "Framework",
      "Entorno de Ejecución": "Runtime Environment",
      "Control de Versiones": "Version Control",
      "IDE": "IDE"
    },
    nombres: [
      "Java", "JavaScript", "SQL", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "React", "Express", "Node.js",
      "Git", "GitHub", "Visual Studio Code", "Android Studio", "Eclipse"
    ]
  }
};

// Array de herramientas
const Tools = [
  { id: 1, tipo: 'Lenguaje', icono: <FaJava className='w-10 h-10 text-blue-600'/>, level: '90%' },
  { id: 2, tipo: 'Lenguaje', icono: <FaJsSquare className='w-10 h-10 text-yellow-400'/>, level: '80%' },
  { id: 3, tipo: 'Lenguaje', icono:<SiMysql className='w-10 h-10 text-blue-500'/>, level: '70%' },
  { id: 4, tipo: 'Desarrollo Web', icono:<FaHtml5 className='w-10 h-10 text-orange-600'/>, level: '80%' },
  { id: 5, tipo: 'Desarrollo Web', icono:<FaCss3Alt className='w-10 h-10 text-blue-600'/>, level: '80%' },
  { id: 6, tipo: 'Desarrollo Web', icono:<SiTailwindcss className='w-10 h-10 text-blue-400'/>, level: '70%' },
  { id: 7, tipo: 'Desarrollo Web', icono:<FaBootstrap className='w-10 h-10 text-purple-600'/>, level: '80%' },
  { id: 8, tipo: 'Framework', icono:<FaReact className='w-10 h-10 text-blue-400'/>, level: '70%' },
  { id: 9, tipo: 'Framework', icono:<SiExpress className='w-10 h-10 text-black'/>, level: '60%' },
  { id: 10, tipo: 'Entorno de Ejecución', icono:<FaNodeJs className='w-10 h-10 text-green-600'/>, level: '60%' },
  { id: 11, tipo: 'Control de Versiones', icono:<FaGitAlt className='w-10 h-10 text-orange-600'/>, level: '70%' },
  { id: 12, tipo: 'Control de Versiones', icono:<SiGithub className='w-10 h-10 text-black'/>, level: '70%' },
  { id: 13, tipo:'IDE', icono:<FaCode className='w-10 h-10 text-blue-600'/>, level: '80%' },
  { id: 14, tipo: 'IDE', icono:<SiAndroidstudio className='w-10 h-10 text-green-600'/>, level: '50%' },
  { id: 15, tipo: 'IDE', icono:<SiEclipseide className='w-10 h-10 text-purple-600'/>, level: '60%' },
];

const Herramientas = ({ lang = "es"}) => {
  // Aseguramos que siempre exista un idioma
 const traduccion = traducciones[lang] || traducciones['es'];
  const { titulo, nivel, tipos, nombres } = traduccion;
  // Logs para depuración
  console.log("Lang recibido:", lang);
  console.log(" Traducciones cargadas:", titulo, nivel);
  console.log("Nombres:", nombres.length, "Tools:", Tools.length);

  return (
    <div id='herramientas' className='w-full max-w-5xl p-8 text-white bg-gray-800 rounded-2xl shadow-log'>
      <h2 className='mb-6 text-4xl font-bold text-center text-shadow-lg'>{titulo}</h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Tools.map((tool, index) => (
          <div key={tool.id} className='p-4 transition-colors duration-300 rounded-lg shadow-md bg-white/10 hover:bg-white/20'>
            <div className='flex flex-col items-center'>
              {tool.icono}
              {/* Nombre con fallback */}
              <h3 className='mt-2 text-xl font-semibold'>
                {nombres[index] || `Tool ${tool.id}`}
              </h3>
              {/* Tipo con fallback */}
              <p className='text-sm text-gray-300'>
                {tipos[tool.tipo] || tool.tipo}
              </p>
              {/* Barra de nivel */}
              <div className='w-full h-4 mt-2 bg-gray-700 rounded-full'>
                <div className='h-4 bg-blue-500 rounded-full' style={{ width: tool.level }}></div>
              </div>
              {/* Texto nivel */}
              <span className='mt-1 text-sm'>{tool.level} {nivel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herramientas;
