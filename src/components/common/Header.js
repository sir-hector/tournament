import React from 'react'
import Navbar from './Navbar';
import './css/Header.css'

const Header = () => {
    return(
        <div className='header'>
            <div className='header-top'>
                <div className='header-top__logo'>
                    <a href='/' className='header-logo'> TOURNAMENT BRACKET</a>
                    <img src='/images/ball.png' alt='ball_logo' className='header-image'></img>
                </div>
                <div className='header-top__navbar'>
                    <div className='header-top__navigation'>
                        <Navbar/>
                    </div>
                    <hr className='header-top__seperator'></hr>
                </div>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom__email'>
                    krauskarol7@gmail.com
                </div>
                <div className='header-bottom__linkedin'>
                    linkedin
                </div>
                <div className='header-bottom__github'>
                    github
                </div>
            </div>
        </div>
    )
}

export default Header;