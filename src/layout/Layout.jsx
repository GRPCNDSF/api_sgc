import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
// import { Sidebar } from '../components/Sidebar' Importa el Sidebar después de que hayas creado los
// botones para tus diferentes menus y hayas hecho las funcionalidades
const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname
  return (
    //AQUÍ SE PUEDE INYECTAR TODOS MIS COMPONENTES PRINCIPALES
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-dark-green px-5 py-10'> 
        <h2 className='text-3xl font-black text-center text-white'>Gestión Correspondencia</h2>

        <nav className='mt-10'>

          <Link 
              className={`${urlActual === '/registro' ? 'text-green-300' :
            'text-white'} text-2xl block mt-2 hover:text-green-300`} 
              to='/registro'
          >Registro
          </Link>

          <Link 
              className={`${urlActual === '/registro/nuevo' ? 'text-green-300' :
              'text-white'} text-2xl block mt-2 hover:text-green-300`} 
              to='/registro/nuevo'
          >Nuevo Registro
          </Link>
          <Link 
              className={`${urlActual === '/usuario' ? 'text-green-300' :
              'text-white'} text-2xl block mt-2 hover:text-green-300`}  
              to='/usuario'
          >Usuario
          </Link>

          <Link 
              className={`${urlActual === '/usuario/nuevo' ? 'text-green-300' :
              'text-white'} text-2xl block mt-2 hover:text-green-300`} 
              to='/usuario/nuevo'
          >Nuevo Usuario
          </Link>
          <Link 
              className={`${urlActual === '/uau' ? 'text-green-300' :
              'text-white'} text-2xl block mt-2 hover:text-green-300`} 
              to='/uau'
          >Uau
          </Link>

          <Link 
              className={`${urlActual === '/uau/nuevo' ? 'text-green-300' :
              'text-white'} text-2xl block mt-2 hover:text-green-300`} 
              to='/uau/nuevo'
          >Nueva Uau
          </Link>
        </nav>
        
      </div>

      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet/>
      </div>
        
    </div>
  )
}

export default Layout