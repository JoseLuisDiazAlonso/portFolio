import {Icon} from "@iconify/react";

export default function FloatingSocialIcons () {
    return (
        <div className="fixed z-50 flex flex-col items-center gap-3 bottom-4 right-4 top-[490px]">
            <a href="https://github.com/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white transition-colors rounded-full shadow-md hover:bg-gray-800">
               <Icon icon="mdi:github" className="w-5 h-5 sm:w-6 sm:h-6"/> 
            </a>

            <a href="https://linkedin.com/in/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white transition-colors rounded-full shadow-md hover:bg-blue-500">
                <Icon icon="mdi:linkedin" className="w-5 h-4 sm:w-5 sm:h-5"/>
            </a>
            <a
            href="https://wa.me/34650332865"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors rounded-full shadow-md hover:bg-green-400">
                <Icon icon="mdi:whatsapp" className="w-10 h-10 sm:w-9 sm:h-9"/>
            </a>
        </div>
    )
}