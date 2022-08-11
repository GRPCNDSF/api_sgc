import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'


const FormUsuario = ({usuario, cargando}) => {

  const navigate = useNavigate()

  const nuevoUsuarioSchema= Yup.object().shape({
    perfil: Yup.string()
                .required('El tipo de perfil es obligatorio'),
    nombreUsuario: Yup.string()
                      .required('El nombre del Usuario es obligatorio'),
    apPa: Yup.string()
              .required('El apellido paterno es obligatorio'),
    apMa: Yup.string()
              .required('El apellido materno es obligatorio'),
    clave: Yup.string()
              .required('La clave es obligatoria'),
    mail: Yup.string()
              .email('Email no válido')
              .required('El correo es obligatorio'),
    area: Yup.string()
              .required('El área es obligatoria'),
    status: Yup.string()
              .required('El status es obligatorio'),
  })
 
  
  const handleSubmit = async (valores) => {
      try {
            let respuesta
            if(usuario.id) {
                //EDITANDO UN REGISTRO
                const url = `http://localhost:4000/usuarios/${usuario.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } else {
                //Nuevo Registro
                const url = 'http://localhost:4000/usuarios'
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
              } 
              await respuesta.json()
              navigate('/usuario')
                  
          } catch (error) {
              console.log(error)
          }
}

 
  return (
    cargando ? <Spinner /> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
            {usuario?.perfil ? 'Editar Usuario' : 'Agregar Usuario'}
            </h1>
            {/* Si el valor de la izquierda existe asignale el de la izquierda y si no el de la
            derecha--> NULLIS CAOLESCING OPERATOR ?? */}
            <Formik
              initialValues={{
                perfil: usuario?.perfil ?? '', //ES SIMILAR A UN TERNARIO
                nombreUsuario: usuario?.nombreUsuario ?? '',
                apPa: usuario?.apPa ?? '',
                apMa: usuario?.apMa ?? '',
                clave: usuario?.clave ?? '',
                mail: usuario?.mail ?? '',
                area: usuario?.area ?? '',
                status: usuario?.status ?? '',
              }}

              enableReinitialize={true}
              onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values)

                resetForm()
              }}
              validationSchema={nuevoUsuarioSchema}
            >
              {({errors, touched}) => {
                  console.log(touched)
                  return ( 
                
              <Form className= 'mt-10'>
                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='perfil'
                          >Perfil</label>
                      <Field
                          id='perfil'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder='DEBE MODIFICARSE Y DESPLEGAR UN MENU'
                          name='perfil'
                      />

                      {errors.perfil && touched.perfil ? (
                        <Alerta>{errors.perfil}</Alerta>
                      ) : null }    

                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='nombreUsuario'
                          >Nombre</label>
                      <Field
                          id='nombreUsuario'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder='Nombre del Usuario'
                          name='nombreUsuario'
                      />
                      {errors.nombreUsuario && touched.nombreUsuario ? (
                        <Alerta>{errors.nombreUsuario}</Alerta>
                      ) : null }   
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='apPa'
                          >Apellido paterno</label>
                      <Field
                          id='apPa'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder=''
                          name='apPa'
                      />
                      {errors.apPa && touched.apPa ? (
                        <Alerta>{errors.apPa}</Alerta>
                      ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='apMa'
                          >Apellido materno</label>
                      <Field
                          id='apMa'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder=''
                          name='apMa'
                      />
                      {errors.apMa && touched.apMa ? (
                        <Alerta>{errors.apMa}</Alerta>
                      ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='clave'
                          >Clave</label>
                      <Field
                          id='clave'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder=''
                          name='clave'
                      />
                        {errors.clave && touched.clave ? (
                        <Alerta>{errors.clave}</Alerta>
                      ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='mail'
                          >E-mail</label>
                      <Field
                          id='mail'
                          type='email'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder=''
                          name='mail'
                      />
                      {errors.mail && touched.mail ? (
                          <Alerta>{errors.mail}</Alerta>
                        ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='area'
                          >Área</label>
                      <Field
                          id='area'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder='DEBE MODIFICARSE Y DESPLEGAR UN MENU'
                          name='area'
                      />
                      {errors.area && touched.area ? (
                          <Alerta>{errors.area}</Alerta>
                        ) : null } 
                      </div>

                      <div className= 'mb-4'>
                          <label
                          className='text-gray-800'
                          htmlFor='status'
                          >Estatus</label>
                      <Field
                          id='status'
                          type='text'
                          className='mt-2 block w-full p-3 bg-gray-50'
                          placeholder='DEBE MODIFICARSE Y DESPLEGAR UN MENÚ'
                          name='status'
                      />
                      {errors.status && touched.status ? (
                          <Alerta>{errors.status}</Alerta>
                        ) : null } 
                      </div>

                      <input
                          type='submit'
                          value={usuario?.perfil ? 'Editar Usuario' : 'Agregar Usuario'}
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

FormUsuario.defaultProps = {
    usuario: {},
    cargando: false
}


export default FormUsuario