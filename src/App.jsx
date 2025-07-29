import "./App.css";
import { useState } from "react";
import Sidebar from "./components/sideBar";
import SobreMi from "./components/sobreMi";
import FloatingSocialIcons from "./components/FloatingSocialIcons";


function App() {
  {
    /**Estado del idioma */
  }
  const [language, setLanguage] = useState("es");

  {
    /**Lógica para el Menú */
  }
  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "somooth" });
    }
  };

  {
    /**Lógica para cambiar el idioma */
  }
  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  {
    /**Textos por idioma */
  }
  const texts = {
    es: {
      nombre: "JOSE LUIS DÍAZ ALONSO",
      descripcion:
        "Apasionado por el desarrollo de experiencias web intuitivas",
    },

    en: {
      nombre: "JOSE LUIS DÍAZ ALONSO",
      descripcion: "Passionate about developing intuitive web experiences",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen font-sans text-white bg-center bg-cover bg-backgroundPrincipal">
      {/**Sidebar Lateral Derecho */}
      <Sidebar
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />
      {/*Contenedor del recuadro transparente */}
      <div className="relative flex flex-col items-center p-8 shadow-2xl rounded-2xl bg-white/10 backdrop-blur-lg top-[30px]">
        {/*Imagen dentro del recuadro */}
        <img
          src="/public/media/ImagenPrincipal.png"
          alt="Foto futurista"
          className="object-cover rounded-full shadow-xl w-[350px] h-[350px]"
        />
        {/*Texto debajo de la imagen, dentro del mismo recuadro */}
        <div className="flex flex-col items-center gap-4 mt-6 text-center">
          <h1 className="text-[30px] font-bold text-white drop-shadow-lg">
            {texts[language].nombre}
          </h1>
          <p className="text-[20px] text-white font-bold drop-shadow-lg">
            {texts[language].descripcion}
          </p>
        </div>
      </div>
      {/**Secciones para Navegación */}
      <div className="flex flex-col text-center item-center">
        <section id="sobre-mi" className="h-screen p-10">
          <SobreMi/>
        </section>
        <section>
           <FloatingSocialIcons/>
        </section>
      </div>
    </div>
  );
}

export default App;
