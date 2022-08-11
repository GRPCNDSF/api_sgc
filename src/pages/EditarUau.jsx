import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import FormUau from '../components/FormUau'



const EditarUau = () => {

  const [uau, setUau] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()
  
  useEffect(() => {


    const obtUauAPI = async () => {

      try {
          const url = `http://localhost:4000/uaus/${id}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setUau(resultado)
      } catch (error) {
          console.log(error)
      }

      setCargando(!cargando)

    }
    obtUauAPI()
  }, [])
  return (
      <>
          <h1 className='font-black text-3xl text-dark-green'>Editar Uau</h1>
          <p className='mt-3'>Edita la Uau en este formulario</p>
          
          {uau?.num ? (
              <FormUau
                  uau= {uau}
                  cargando={cargando}
              />
          ): <p>UAU Id no válido</p>}
      </>
  )
}

export default EditarUau