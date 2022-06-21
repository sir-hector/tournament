import React from 'react'
import './css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <hr className='footer-seperator'/>
            <div className='footer-social-media'>
                <a href='/' target='_blank' rel="noopener noreferrer">Social</a>
            </div>
            <div className='footer-info'>
                <div className='footer-info-left'>  
                    <div className='footer-info__name'>
                        Karol Kraus s20687
                    </div>                  
                    <div className='footer-info__returns'>
                    </div>                  
                </div>
                <div className='footer-info-center'>                    
                    <div className='footer-info__email'>
                        s20687@pjwstk.edu.pl
                    </div>                  
                    <div className='footer-info__terms'>
                    </div>    
                </div>
                <div className='footer-info-right'>                    

                </div>
            </div>
            <hr className='footer-seperator'/>
        </div>
    )
}

export default Footer;