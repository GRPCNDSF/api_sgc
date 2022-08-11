import { useState, useEffect } from 'react'
import Registro from '../components/Registro'

const IniRegistro = () => {

  const [registros, setRegistros] = useState([])

  useEffect(() => {
      const obtRegAPI = async () => {
        try {
            const url = 'http://localhost:4000/registros'
            const respuesta = await fetch (url)  //No es necesario especificar el método
            const resultado = await respuesta.json()

            setRegistros(resultado)
          
        } catch (error) {
          console.log(error)
        }
      }

    obtRegAPI()

  }, [])

  const handleEliminar = async id => {
      const confirmar = confirm('¿Deseas eliminar este registro?')
      
      if(confirmar) {
        try {
            const url = `http://localhost:4000/registros/${id}`
            const respuesta = await fetch(url, {
                method: 'DELETE'
            })
            await respuesta.json()

            const arrayRegistros = registros.filter( registro => registro.id !== id)
            setRegistros(arrayRegistros)
            
        } catch (error) {
            console.log(error)
        }
    }
  }

  return (
          <>
            <h1 className='font-black text-3xl text-dark-green'>Registros</h1>
            <p className='mt-3'>Administra los registros</p>

            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-dark-green text-white'>
                  <tr>
                    <th className='p-2'>Tipo de Servicio</th>
                    <th className='p-2'>Número de Oficio</th>
                    <th className='p-2'>Usuario Remitente</th>
                    <th className='p-2'>Usuario Responsable del Registro</th>
                    <th className='p-2'>Razón Social</th>
                    <th className='p-2'>Destinatario</th>
                    <th className='p-2'>Tipo de Documento</th>
                    <th className='p-2'>Fecha de Registro</th>
                    <th className='p-2'>Acciones</th>
                  </tr>
                </thead>
                {/* //Aquí vamos a iterar los datos de la tabla */}
                <tbody> 
                    {registros.map ( registro => (
                        <Registro
                        key = {registro.id}
                        registro={registro}
                        handleEliminar={handleEliminar}
                        />
                    ))}
                </tbody>
            </table>
          </>
  )
}

export default IniRegistro