import React from 'react'
import FormUsuario from '../components/FormUsuario'

const NuevoUsuario = () => {
  return (
    <>
      <h1 className='font-black text-3xl text-dark-green'>Nuevo Usuario</h1>
      <p className='mt-3'>Llena los siguientes campos para registrar un nuevo usuario</p>
      <FormUsuario/>
    </>
  )
}

export default NuevoUsuario