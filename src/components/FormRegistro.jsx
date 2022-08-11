import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const FormRegistro = ({registro, cargando}) => {

  const navigate = useNavigate()

  const nuevoRegistroSchema = Yup.object().shape({
      servicio:  Yup.string().required('El tipo de servicio es obligatorio'),
      numOficio: Yup.string().required('El número de oficio es obligatorio'),
      remitente: Yup.string().required('El remitente es obligatorio'),
      usuarioRegistro: Yup.string().required('El usuario responsable es obligatorio'),
      razonSocial: Yup.string().required('La razón social es obligatoria'),
      destinatario: Yup.string().required('El destinatario es obligatorio'),
      tipoDocu: Yup.string().required('El tipo de documento es obligatorio'),
      fecha: Yup.string().required('La fecha es obligatoria'),
  })

  const handleSubmit = async (valores) => {
      try {
            let respuesta
            if(registro.id) {
                //EDITANDO UN REGISTRO
                const url = `http://localhost:4000/registros/${registro.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } else {
                //Nuevo Registro
                const url = 'http://localhost:4000/registros'
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
                   
            await respuesta.json() 
            navigate('/registro')  // nos redirecciona al inicio
      
        } catch (error) {
            console.log(error)
        }
  }

  return (
    cargando ? <Spinner /> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-lg md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                {registro?.servicio ? 'Editar Registro' : 'Agregar Registro'}</h1> 
                {/* Si servicio existe significa que estamos editando, si viene vacio es un registro 
                nuevo. Importante para mostrar el cambio en los títulos de los formularios */}
            
            <Formik
                initialValues={{
                servicio: registro?.servicio ?? '', //SI ESTE CODE NO EXISTE ENTONCES AGREGA ESTE OTRO 
                numOficio: registro?.numOficio ?? '',
                remitente: registro?.remitente ?? '',
                usuarioRegistro: registro?.usuarioRegistro ?? '',
                razonSocial: registro?.razonSocial ?? '',
                destinatario: registro?.destinatario ?? '',
                tipoDocu: registro?.tipoDocu ?? '',
                fecha: registro?.fecha ?? '',
                }}

                enableReinitialize={true}
                onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values)

                resetForm()
                }}
                validationSchema={nuevoRegistroSchema}
            >
            {({errors, touched}) => {
                console.log(touched)
                return ( 

            <Form className= 'mt-10'>
                    <div className= 'mb-4'>
                        <label
                        className='text-gray-800'
                        htmlFor='servicio'
                        >Servicio</label>
                    <Field
                        id='servicio'
                        type='text'
                        className='mt-2 block w-full p-3 bg-gray-50'
                        placeholder='Selecciona el tipo de servicio'
                        name='servicio'
                    />

                        {errors.servicio && touched.servicio ? (
                            <Alerta>{errors.servicio}</Alerta>
                        ) : null } 
                        
                    </div>

                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='numOficio'
                        >Oficio</label>
                        <Field
                            id='numOficio'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Número de Oficio'
                            name='numOficio'
                        />
                        {errors.numOficio && touched.numOficio ? (
                            <Alerta>{errors.numOficio}</Alerta>
                            ) : null } 
                    </div>
                    
                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='remitente'
                        >Remitente</label>
                        <Field
                            id='remitente'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Usuario Remitente'
                            name='remitente'
                        />
                        {errors.remitente && touched.remitente ? (
                            <Alerta>{errors.remitente}</Alerta>
                        ) : null } 
                    </div>
                    
                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='usuarioRegistro'
                        >Usuario</label>
                        <Field
                            id='usuarioRegistro'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Usuario Responsable del Registro'
                            name='usuarioRegistro'
                        />
                        {errors.usuarioRegistro && touched.usuarioRegistro ? (
                            <Alerta>{errors.usuarioRegistro}</Alerta>
                        ) : null } 
                    </div>

                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='razonSocial'
                        >Razón Social</label>
                        <Field
                            id='usuarioRegistro'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Razón Social'
                            name='razonSocial'
                        />
                        {errors.razonSocial && touched.razonSocial ? (
                            <Alerta>{errors.razonSocial}</Alerta>
                        ) : null } 
                    </div>

                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='destinatario'
                        >Destinatario</label>
                        <Field
                            id='destinatario'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Nombre del Destinatario'
                            name='destinatario'
                        />
                        {errors.destinatario && touched.destinatario ? (
                            <Alerta>{errors.destinatario}</Alerta>
                        ) : null } 
                    </div>

                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='tipoDocu'
                        >Documento</label>
                        <Field
                            id='tipoDocu'
                            type='text'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            placeholder='Tipo de Documento'
                            name='tipoDocu'
                        />
                        {errors.tipoDocu && touched.tipoDocu ? (
                            <Alerta>{errors.tipoDocu}</Alerta>
                        ) : null } 
                    </div>

                    <div className= 'mb-4' >
                        <label
                            className='text-gray-800'
                            htmlFor='fecha'
                        >Fecha</label>
                        <Field
                            id='fecha'
                            type='date'
                            className='mt-2 block w-full p-3 bg-gray-50'
                            name='fecha'
                        />
                        {errors.fecha && touched.fecha ? (
                            <Alerta>{errors.fecha}</Alerta>
                        ) : null } 
                    </div>

                    <input
                        type='submit'
                        value={registro?.servicio ? 'Editar Registro' : 'Agregar Registro'}
                        className='mt-5 w-full bg-dark-green p-3 text-white uppercase font-bold 
                        text-lg cursor-pointer'
                    />
            </Form>
            )}}
            </Formik>
        </div>
    )
  )
}

FormRegistro.defaultProps = {
    registro: {}
}

export default FormRegistro