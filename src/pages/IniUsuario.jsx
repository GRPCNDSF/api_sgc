import { useState, useEffect } from 'react'
import Usuario from '../components/Usuario'

const IniUsuario = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const obtRegAPI = async () => {
      try {
          const url = 'http://localhost:4000/usuarios'
          const respuesta = await fetch (url)  //No es necesario especificar el método
          const resultado = await respuesta.json()

          setUsuarios(resultado)
        
      } catch (error) {
        console.log(error)
      }
    }

    obtRegAPI()

  }, [])

  const handleEliminar = async id => {
    const confirmar = confirm('¿Deseas eliminar este usuario?')
    
    if(confirmar) {
      try {
          const url = `http://localhost:4000/usuarios/${id}`
          const respuesta = await fetch(url, {
              method: 'DELETE'
          })
          await respuesta.json()

          const arrayUsuarios = usuarios.filter( usuario => usuario.id !== id)
          setUsuarios(arrayUsuarios)
          
      } catch (error) {
          console.log(error)
      }
  }
}
  return (
          <>
            <h1 className='font-black text-3xl text-dark-green'>Usuarios</h1>
            <p className='mt-3'>Administra los usuarios</p>
            
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-dark-green text-white'>
                  <tr>
                    <th className='p-2'>Perfil</th>
                    <th className='p-2'>Nombre del Usuario</th>
                    <th className='p-2'>Contacto</th>
                    <th className='p-2'>Estatus</th>
                    <th className='p-2'>Acciones</th>
                  </tr>
                </thead>
                <tbody> 
                  {usuarios.map ( usuario => (
                      <Usuario
                      key= {usuario.id}
                      usuario= {usuario}
                      handleEliminar= {handleEliminar}
                      />
                  ))}
                </tbody>
            </table>
          </>
  )
}

export default IniUsuario