import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Name from './components/Name'
import Airtop from './components/Airtop'
import Features from './components/Features'
import Background from './components/Background'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Name />
      {/* <Airtop />
    <Features />
    <Background /> */}
      <Airtop />
      <Features />
      <Background />
      <Clients />
      <Footer />
    </>
  )
}

export default App
