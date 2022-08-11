import React from 'react'
import FormRegistro from '../components/FormRegistro'

const NuevoRegistro = () => {
  return (
    <>
      <h1 className='font-black text-3xl text-dark-green'>Nuevo Registro</h1>
      <p className='mt-3'>Llena los siguientes campos para crear un nuevo registro</p>
      <FormRegistro/>
    </>
  )
}

export default NuevoRegistro