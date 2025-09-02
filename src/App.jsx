import "./App.css";
import NavBar from "./components/NavBar";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Herramientas from "./components/Herramientas";
import Formacion from "./components/Formacion";
import Contacto from "./components/Contacto";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-backgroundPrincipal">
      <BrowserRouter>
      <NavBar />
      <div>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Herramientas" element={<Herramientas />} />
          <Route path="/Formacion" element={<Formacion />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Blog" element={<Blog/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
      
  )
}

export default App;
 