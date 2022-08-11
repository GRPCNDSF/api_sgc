import { useState } from 'react'

export const Sidebar = () => {
    
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Búsqueda", src: "Search" },   
      
      { title: "Correspondencia", src: "Chat" },
      { title: "Usuarios", src: "User", gap: true },
      { title: "Calendario", src: "Calendar" },
  
      { title: "Archivos", src: "Chart_fill" },
      { title: "Reportes", src: "Chart" },
      { title: "Acuse", src: "Folder", gap: true },
      { title: "Ajustes", src: "Setting" },
    ];
  
    return (
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-screen p-5 pt-8 bg-dark-green relative`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer rounded-full
             -right-3 top-9 w-7 border-2 border-dark-green ${
               !open && "rotate-180"
             }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo_1.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center
                   gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
                   ${menu.gap ? "mt-9" : "mt-2"}`}
              >
                <img src={`./src/assets/${menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Bienvenido al Sistema de Gestión de Correspondencia</h1>
        </div>
      </div>
    );
  };

