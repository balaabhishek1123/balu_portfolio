import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Me from './components/Me/Me'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Me />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  )
}

export default App