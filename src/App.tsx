import { useState } from 'react'
import { BrowserRouter , Route , Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './component/Navbar'
import Footer from './component/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">
      <BrowserRouter >
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
