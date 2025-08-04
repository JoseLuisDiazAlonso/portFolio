import {
  User,
  Hammer,
  FolderKanban,
  GraduationCap,
  Mail,
  Languages,
  X
} from "lucide-react";

const menuItems = [
  { label: "Sobre mí", icon: <User className="w-6 h-6" />, id: "sobre-mi" },
  { label: "Herramientas", icon: <Hammer className="w-6 h-6" />, id: "herramientas" },
  { label: "Proyectos", icon: <FolderKanban className="w-6 h-6" />, id: "proyectos" },
  { label: "Formación", icon: <GraduationCap className="w-6 h-6" />, id: "formacion" },
  { label: "Contacto", icon: <Mail className="w-6 h-6" />, id: "contacto" },
];

export default function Sidebar({ isOpen, onClose, onNavigate, onToggleLanguage }) {
  return (
    <>
      {/* Overlay oscuro */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 transition-opacity duration-300 bg-black/50"
        />
      )}

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 flex flex-col items-center gap-6 p-4 shadow-xl bg-white/10 backdrop-blur-md rounded-l-2xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="self-end mb-4 text-white hover:text-red-400"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menú */}
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              onClose(); // cerrar sidebar al hacer click en un ítem
            }}
            className="flex flex-col items-center text-white group hover:text-blue-400"
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}

        {/* Idioma */}
        <button
          onClick={() => {
            onToggleLanguage();
            onClose();
          }}
          className="flex flex-col items-center mt-4 text-white group hover:text-blue-400"
        >
          <Languages className="w-6 h-6" />
          <span className="text-xs">Idioma</span>
        </button>
      </div>
    </>
  );
}
