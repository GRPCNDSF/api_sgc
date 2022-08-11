import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerUsuario = () => {

  const [usuario, setUsuario] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {

    

    const obtUsuarioAPI = async () => {
      try {
          const url = `http://localhost:4000/usuarios/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setUsuario(resultado)
      } catch (error) {
          console.log(error)
      }

      setCargando(!cargando)

    }
    obtUsuarioAPI()
  }, [])

  return (
        cargando ? <Spinner/> : 
              Object.keys(usuario).length === 0 ?
              <p>No existe la información</p> : (

                  <div>

                        <h1 className='font-black text-3xl text-dark-green'>Ver Usuario: {usuario.nombreUsuario}</h1>
                        <p className='mt-3'>Información del Usuario</p>

                        {usuario.perfil && (
                          <p className='text-2xl text-gray-600 mt-10'>
                                <span className=' text-gray-800 uppercase font-bold'>Perfil: </span>
                                {usuario.perfil}
                          </p>
                        )}

                        {usuario.nombreUsuario && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Nombre del Usuario: </span>
                                {usuario.nombreUsuario}
                          </p>
                        )}

                        {usuario.apPa && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Apellido paterno: </span>
                                {usuario.apPa}
                          </p>
                        )}
                        
                        {usuario.apMa && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Apellido materno: </span>
                                {usuario.apMa}
                          </p>
                        )}

                        {usuario.clave && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Clave: </span>
                                {usuario.clave}
                          </p>
                        )}
                        
                        {usuario.mail && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>E-mail: </span>
                                {usuario.mail}
                          </p>
                        )}

                        {usuario.area && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Área: </span>
                                {usuario.area}
                          </p>
                        )}
                        
                        {usuario.status && (
                          <p className='text-2xl text-gray-600 mt-4'>
                                <span className=' text-gray-800 uppercase font-bold'>Estatus: </span>
                                {usuario.status}
                          </p>
                        )}
                  
                  </div>
          )
  )
}

export default VerUsuario