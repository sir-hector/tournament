import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <a href='/' className='navbar-item'>TABLE</a>
            <a href='/' className='navbar-item'>TEAMS</a>
        </div>
    )
}

export default Navbar