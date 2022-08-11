import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import FormUsuario from '../components/FormUsuario'


const EditarUsuario = () => {

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
    <>
        <h1 className='font-black text-3xl text-dark-green'>Editar Usuario</h1>
        <p className='mt-3'>Edita el  usuario en este formulario</p>
        
        {usuario?.perfil ? ( //&& SI ESTO SE CUMPLE ENTONCES EJECUTA EL CÓDIGO
            <FormUsuario
                usuario={usuario}
                cargando={cargando}
            />
        ): <p>Usuario Id no válido</p>}
    </>
  )
}

export default EditarUsuario