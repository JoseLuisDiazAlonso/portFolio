import "./App.css";
import NavBar from "./components/NavBar";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Herramientas from "./components/Herramientas";
import Formacion from "./components/Formacion";
import Contacto from "./components/Contacto";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Samain from './components/Samain';
import Interkeltoi from "./components/Interkeltoi";
import Fisioterapeuta from "./components/Fisioterapeuta";
import Atreva from "./components/Atreva";
import Juego from "./components/Juego";
import Senpai from "./components/Senpai";
import SenorAnillos from "./components/SenorAnillos";
import ScrollTopButton from "./components/ScrollTopButton";
import AvisoLegal from "./components/AvisoLegal";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import Cookies from "./components/PoliticaPrivacidad";
import Footer from "./components/Footer";

//Creamos un hook que haga scroll a la sección correcta
function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.replace("/", "");
    if (sectionId) {
      const section = document.getElementById(sectionId.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

function Home () {
  const [lang, setLang] = useState("es"); //Es el idioma actual
  const toggleLanguage = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <div>
      <NavBar lang={lang} toggleLanguage={toggleLanguage}/>
      <div className="flex flex-col items-center space-y-16">
      {/**Cada una de las secciones */}
      <SobreMi lang={lang}/>
      <Herramientas lang={lang}/>
      <Proyectos lang={lang}/>
      <Formacion lang={lang}/>
      <Contacto lang={lang}/>
      <Blog lang={lang}/>
      </div>
      
    </div>
  )
}

function App() {
  const [lang, setLang] = useState("es");
  const toggleLanguage = () => setLang((prev) => (prev === "es" ? "en" : "es"));
    return (
    <div className="min-h-screen bg-center bg-no-repeat bg-cover bg-backgroundPrincipal">
      <BrowserRouter>
      <ScrollToSection/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Herramientas" element={<Home />} />
          <Route path="/Proyectos" element={<Home />} />
          <Route path="/Formacion" element={<Home />} />
          <Route path="/Contacto" element={<Home />} />
          <Route path="/Blog" element={<Home/>}/>
          {/**Rutas de proyectos */}
          <Route path="/Samain" element={<Samain lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/Interkeltoi" element={<Interkeltoi lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/Fisioterapeuta" element={<Fisioterapeuta lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path= "/Atreva" element={<Atreva lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/Juego" element={<Juego lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/Senpai" element={<Senpai lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/SenorAnillos" element={<SenorAnillos lang={lang} toggleLanguage={toggleLanguage}/>}/>
          {/**Rutas de Menú Legal */}
          <Route path="/avisoLegal" element={<AvisoLegal lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad lang={lang} toggleLanguage={toggleLanguage}/>}/>
          <Route path="/cookies" element={<Cookies lang={lang} toggleLanguage={toggleLanguage}/>}/>
        </Routes>
        <ScrollTopButton/>
        <Footer/>
      </BrowserRouter>
    </div>
      
  )
}

export default App;
 