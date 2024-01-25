import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import MainLayout from './MainLayout'
//import Service from './Service'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}
