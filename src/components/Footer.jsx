import React from 'react'
import '../styles/App.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__container'>
                    <ul>
                        <li className='element-footer'><a href="https://github.com/AlexeiIsProgrammer/online-shop"><img src={require('../img/github.png')} width="80px" alt="link git author" /></a></li>
                        <li className='element-footer'><p>2022</p></li>
                        <li className='element-footer'><a href="https://rs.school/js/"><img src={require('../img/rs_school_js.svg')} width="120px" alt="link git author" /></a></li>
                    </ul>
                    {/* <a href="https://github.com/AlexeiIsProgrammer/online-shop"><img src={require('../img/github.png')} width="80px" alt="link git author" /></a> */}
                 
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer