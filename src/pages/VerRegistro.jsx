import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerRegistro = () => {

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

  console.log(cargando)

  return (
   
      cargando ? <Spinner/> : 
            Object.keys(registro).length === 0 ?
            <p>No existe la información</p> : (

          <div>
  
                  <h1 className='font-black text-3xl text-dark-green'>Ver Folio-MS: </h1>
                  <p className='mt-3'>Información del registro</p>

                  {registro.servicio && (
                    <p className='text-2xl text-gray-600 mt-10'>
                        <span className=' text-gray-800 uppercase font-bold'>Tipo de Servicio: </span>
                        {registro.servicio}
                    </p>
                  )}
                  
                  {registro.numOficio && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Número de Oficio: </span>
                        {registro.numOficio}
                    </p>
                  )}
                
                  {registro.remitente && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Usuario Remitente: </span>
                        {registro.remitente}
                  </p>
                  )}
                  
                  {registro.usuarioRegistro && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Usuario Responsable del Registro: </span>
                        {registro.usuarioRegistro}
                    </p>
                  )}
                
                  {registro.destinatario && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Razón Social: </span>
                        {registro.razonSocial}
                    </p>
                  )}

                  {registro.destinatario && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Nombre del Destinatario: </span>
                        {registro.destinatario}
                    </p>
                  )}
                
                  {registro.tipoDocu && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Tipo de Documento: </span>
                        {registro.tipoDocu}
                    </p>
                  )}
                
                  {registro.fecha && (
                    <p className='text-2xl text-gray-600 mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Fecha: </span>
                        {registro.fecha}
                    </p>
                  )}
            
          </div>
    )
  )
}

export default VerRegistro