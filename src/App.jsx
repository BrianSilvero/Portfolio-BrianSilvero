import React from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Proyectos from './components/proyectos/Proyectos'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
