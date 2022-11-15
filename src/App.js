import React from 'react'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Notfound from './pages/NotFound'
import GithubProvider from './context/GithubContext/GithubProvider'
 
const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/user/:login' element={<User/>}></Route>
            <Route path='/*' element={<Notfound/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App