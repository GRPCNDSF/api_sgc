import React from 'react'
import { useNavigate } from 'react-router-dom'

const Uau = ({uau, handleEliminar}) => {
  
  const navigate = useNavigate()

  const {num, nombreUau, domicilio, id} = uau

  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3'>{num}</td>
        <td className='p-3'>{nombreUau}</td>
        <td className='p-3'>{domicilio}</td>
        <td className='p-3'>
            
            <button 
                  type='button'
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="block w-full p-2 bg-yellow-500 text-white font-bold text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg
                  focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 
                  active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => navigate(`/uau/${id}`)}
            >Ver
            </button>

            <button 
                  type='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  className='block w-full p-2 mt-3 bg-green-600 text-white font-bold text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                  focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                  active:shadow-lg transition duration-150 ease-in-out'
                  onClick={() => navigate(`/uau/editar/${id}`)}
            >Editar
            </button>

            <button 
                  type='button'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                  className='block w-full p-2 mt-3 bg-red-600 text-white font-bold text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg
                  focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 
                  active:shadow-lg transition duration-150 ease-in-out'
                  onClick={() => handleEliminar(id)}
            >Eliminar
            </button>

        </td>
    </tr>
  )
}

export default Uau
