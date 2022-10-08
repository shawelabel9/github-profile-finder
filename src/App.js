import React from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/NotFound'
 
const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/*' element={<Notfound/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App