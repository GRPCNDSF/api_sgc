import React from 'react'
import FormUau from '../components/FormUau'

const NuevoUau = () => {
  return (
    <>
      <h1 className='font-black text-3xl text-dark-green'>Nueva Uau</h1>
      <p className='mt-3'>Llena los siguientes campos para registrar una nueva Uau</p>
      <FormUau/>
    </>
  )
}

export default NuevoUau