import { useState, useEffect } from 'react'
import Uau from '../components/Uau'

const IniUau = () => {

  const [uaus, setUaus] = useState([])

  useEffect(() => {
    const obtRegAPI = async () => {
      try {
          const url = 'http://localhost:4000/uaus'
          const respuesta = await fetch (url)  //No es necesario especificar el método
          const resultado = await respuesta.json()

          setUaus(resultado)
        
      } catch (error) {
        console.log(error)
      }
    }

    obtRegAPI()

 }, [])

 const handleEliminar = async id => {
    const confirmar = confirm('¿Deseas eliminar esta UAU?')
    
    if(confirmar) {
      try {
          const url = `http://localhost:4000/uaus/${id}`
          const respuesta = await fetch(url, {
              method: 'DELETE'
          })
          await respuesta.json()

          const arrayUaus = uaus.filter( uau => uau.id !== id)
          setUaus(arrayUaus)
          
      } catch (error) {
          console.log(error)
      }
    }
  }

  return (
          <>
            <h1 className='font-black text-3xl text-dark-green'>Unidades de Atención a Usuarios</h1>
            <p className='mt-3'>Administra las UAU's</p>

            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-dark-green text-white'>
                  <tr>
                    <th className='p-2'>Número de la unidad</th>
                    <th className='p-2'>Nombre de la unidad</th>
                    <th className='p-2'>Domicilio de la unidad</th>
                    <th className='p-2'>Acciones</th>
                  </tr>
                </thead>

                <tbody> 
                  {uaus.map ( uau => (
                      <Uau
                      key={uau.id}
                      uau={uau}
                      handleEliminar={handleEliminar}
                      />
                  ))}
                </tbody>

            </table>
            
          </>
  )
}

export default IniUau