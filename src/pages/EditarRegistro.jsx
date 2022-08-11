import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import FormRegistro from '../components/FormRegistro'


const EditarRegistro = () => {
  
  const [registro, setRegistro] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {

    const obtRegistroAPI = async () => {
      try {
          const url = `http://localhost:4000/registros/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setRegistro(resultado)
      } catch (error) {
          console.log(error)
      }

      setCargando(!cargando) //Código para el spinner junto con el state

    } 
    obtRegistroAPI()
  }, [])

  return (
    <>
        <h1 className='font-black text-3xl text-dark-green'>Editar Registro</h1>
        <p className='mt-3'>Edita el registro en este formulario</p>

        {registro?.servicio ? (
            <FormRegistro
                registro={registro}
                cargando={cargando}
            />
        ): <p>Registro Id no válido</p>}
        
    </>
  )
}

export default EditarRegistro