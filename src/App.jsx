import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import IniRegistro from './pages/IniRegistro'
import IniUsuario from './pages/IniUsuario'
import IniUau from './pages/IniUau'
import LoginForm from './pages/LoginForm'
import NuevoRegistro from './pages/NuevoRegistro'
import EditarRegistro from './pages/EditarRegistro'
import VerRegistro from './pages/VerRegistro'
import NuevoUau from './pages/NuevoUau'
import EditarUau from './pages/EditarUau'
import VerUau from './pages/VerUau'
import NuevoUsuario from './pages/NuevoUsuario'
import EditarUsuario from './pages/EditarUsuario'
import VerUsuario from './pages/VerUsuario'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IniciarSesion/>}>  
            <Route index element={<LoginForm/>}/>
        </Route>

        <Route path='/registro' element={<Layout/>}>
            <Route index element={<IniRegistro/>} />
            <Route path='nuevo' element={<NuevoRegistro/>}/>
            <Route path='editar/:id' element={<EditarRegistro/>}/>
            <Route path=':id' element={<VerRegistro/>}/>
        </Route>
        <Route path='/usuario' element={<Layout/>}>
            <Route index element={<IniUsuario/>} />
            <Route path='nuevo' element={<NuevoUsuario/>}/>
            <Route path='editar/:id' element={<EditarUsuario/>}/>
            <Route path=':id' element={<VerUsuario/>}/>
        </Route>
        <Route path='/uau' element={<Layout/>}>
            <Route index element={<IniUau/>} />
            <Route path='nuevo' element={<NuevoUau/>}/>
            <Route path='editar/:id' element={<EditarUau/>}/>
            <Route path=':id' element={<VerUau/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
