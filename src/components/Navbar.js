import React from 'react';
import PropTypes from 'prop-types'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
  return (
    <nav className="flex justify-between px-4 navbar gap-2 bg-neutral mb-12 shadow-lg text-neutral-content mx-auto">
        <div className="flex gap-2">
            <FaGithub className="text-3xl font-bold"/>
            <Link to="/" className="text-lg">{title}</Link>
        </div>
        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar