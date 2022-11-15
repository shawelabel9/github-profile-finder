import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="text-primary-content bg-gray-700 p-10 footer  ">
        <p className="mx-auto">Copyright &copy; {year} All rights reserved</p>        
    </footer>
  )
}

export default Footer