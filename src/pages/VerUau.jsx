import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerUau = () => {

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

  console.log(cargando)

  return (

      cargando ? <Spinner/> : 
          Object.keys(uau).length === 0 ?
          <p>No existe la información</p> : (
        
        <div>
          
             
                  <h1 className='font-black text-3xl text-dark-green'>Ver Uau: {uau.nombreUau}</h1>
                  <p className='mt-3'>Información de la uau</p>

                  {uau.num && (
                    <p className='text-2xl text-gray-600 mt-10'>
                          <span className=' text-gray-800 uppercase font-bold'>Número de la unidad: </span>
                          {uau.num}
                    </p>
                  )}
                  
                  {uau.nombreUau && (
                    <p className='text-2xl text-gray-600 mt-4'>
                          <span className=' text-gray-800 uppercase font-bold'>Nombre de la unidad: </span>
                          {uau.nombreUau}
                    </p>
                  )}
                  
                  {uau.domicilio && (
                    <p className='text-2xl text-gray-600 mt-4'>
                          <span className=' text-gray-800 uppercase font-bold'>Domicilio de la unidad: </span>
                          {uau.domicilio}
                    </p>
                  )}
  
        </div>
    )
  )
}

export default VerUau