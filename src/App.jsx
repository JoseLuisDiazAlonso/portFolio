import "./App.css";
import { useState } from "react";
import Sidebar from "./components/sideBar";
import SobreMi from "./components/sobreMi";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

function App() {
  const [language, setLanguage] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const texts = {
    es: {
      nombre: "JOSE LUIS DÍAZ ALONSO",
      descripcion: "Apasionado por el desarrollo de experiencias web intuitivas",
    },
    en: {
      nombre: "JOSE LUIS DÍAZ ALONSO",
      descripcion: "Passionate about developing intuitive web experiences",
    },
  };

  return (
    <div className="flex flex-col items-center w-full min-h-full font-sans text-white bg-fixed bg-center bg-cover bg-backgroundPrincipal">
      {/* Botón menú */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 p-3 rounded-lg shadow-lg bg-white/10 top-4 right-4 hover:bg-blue-600"
      >
        Menu
      </button>

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Bloque principal */}
      <div className="relative flex flex-col items-center p-8 shadow-2xl rounded-2xl bg-white/10 backdrop-blur-lg mt-[30px]">
        <img
          src="/public/media/ImagenPrincipal.png"
          alt="Foto futurista"
          className="object-cover rounded-full shadow-xl w-[350px] h-[350px]"
        />
        <div className="flex flex-col items-center gap-4 mt-6 text-center">
          <h1 className="text-[30px] font-bold text-white drop-shadow-lg">
            {texts[language].nombre}
          </h1>
          <p className="text-[20px] text-white font-bold drop-shadow-lg">
            {texts[language].descripcion}
          </p>
        </div>
      </div>

      {/* Secciones */}
      <div className="flex flex-col w-full text-center item-center">
        <section id="sobre-mi" className="p-10">
          <SobreMi language={language} />
        </section>
        <section>
          <FloatingSocialIcons />
        </section>
      </div>
    </div>
  );
}

export default App;
