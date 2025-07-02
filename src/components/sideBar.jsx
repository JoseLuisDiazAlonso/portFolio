import {
  User,
  Hammer,
  FolderKanban,
  GraduationCap,
  Mail,
  Languages,
} from "lucide-react";

const menuItems = [
  { label: "Sobre mí", icon: <User className="w-6 h-6" />, id: "sobre-mi" },
  { label: "Herramientas", icon: <Hammer className="w-6 h-6" />, id: "herramientas" },
  { label: "Proyectos", icon: <FolderKanban className="w-6 h-6" />, id: "proyectos" },
  { label: "Formación", icon: <GraduationCap className="w-6 h-6" />, id: "formacion" },
  { label: "Contacto", icon: <Mail className="w-6 h-6" />, id: "contacto" },
];

export default function Sidebar({ onNavigate, onToggleLanguage }) {
  return (
    <div className="fixed right-0 z-50 flex flex-col items-center gap-6 p-4 shadow-xl top-10 bg-white/10 backdrop-blur-md rounded-bl-2xl">
      {/* Menú */}
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="flex flex-col items-center text-white group hover:text-blue-400"
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}

      {/* Idioma */}
      <button
        onClick={onToggleLanguage}
        className="flex flex-col items-center mt-4 text-white group hover:text-blue-400"
      >
        <Languages className="w-6 h-6" />
        <span className="text-xs">Idioma</span>
      </button>
    </div>
  );
}
