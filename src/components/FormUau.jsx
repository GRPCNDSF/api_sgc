import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const FormUau = ({uau, cargando}) => {
  
  const navigate = useNavigate()

  const nuevoUauSchema= Yup.object().shape({
      num: Yup.string().required('El número de Unidad es obligatorio'),
      nombreUau: Yup.string().required('El nombre de la Unidad es obligatorio'),
      domicilio: Yup.string().required('El domicilio es obligatorio'),
  })

  
  const handleSubmit = async (valores) => {
    try {
          let respuesta
          if(uau.id) {
              //EDITANDO UN REGISTRO
              const url = `http://localhost:4000/uaus/${uau.id}`
              respuesta = await fetch(url, {
                  method: 'PUT',
                  body: JSON.stringify(valores),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })

            } else {
                //Nuevo Registro
                const url = 'http://localhost:4000/uaus'
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }

            await respuesta.json()
            navigate('/uau')
          
        } catch (error) {
            console.log(error)
        }
  }

  return (
    cargando ? <Spinner /> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
            {uau?.num ? 'Editar UAU' : 'Agregar UAU'}
            </h1>
            
            <Formik
              initialValues={{
                num: uau?.num ?? '',
                nombreUau: uau?.nombreUau ?? '',
                domicilio: uau?.domicilio ?? '',
              }}
              enableReinitialize={true}
              onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values)

                resetForm()
              }}
              validationSchema={nuevoUauSchema}
            >
      

              {({errors, touched}) => { //Desestructuring para mostrar los errores y darle estilos
                  console.log(touched)
                  return ( 

              <Form className= 'mt-10'>
                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='num'
                          >Número</label>
                      <Field
                          id='num'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder='Número de la unidad'
                          name='num'
                      />

                      {errors.num && touched.num ? (
                        <Alerta>{errors.num}</Alerta>

                      ) : null } 

                      </div>
                      
                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='nombreUau'
                          >Nombre</label>
                      <Field
                          id='nombreUau'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50 h-20'
                          placeholder='Nombre de la unidad'
                          name='nombreUau'
                      />
                      {errors.nombreUau && touched.nombreUau ? (
                        <Alerta>{errors.nombreUau}</Alerta>

                      ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='domicilio'
                          >Domicilio</label>
                      <Field
                          id='domicilio'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50 h-40'
                          placeholder='Domicilio de la unidad'
                          name='domicilio'
                      />
                        {errors.domicilio && touched.domicilio ? (
                        <Alerta>{errors.domicilio}</Alerta>

                      ) : null } 
                      </div>
                      <input
                          type='submit'
                          value={uau?.num ? 'Editar UAU' : 'Agregar UAU'}
                          className='mt-5 w-full bg-dark-green p-3 text-white uppercase font-bold text-lg 
                          cursor-pointer'
                      />
              </Form>
              )}}
            </Formik>

        </div>
    )
  )
}
FormUau.defaultProps = {
    uau: {},
    cargando: false
}

export default FormUau