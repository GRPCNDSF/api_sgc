import React from 'react'

const Alerta = ({children}) => {
  return (
    // Componente de alerta que se puede reciclar en los otros formularios
    <div className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>
         {children}
    </div>  

  )
}

export default Alerta