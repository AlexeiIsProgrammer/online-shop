import React from 'react'
import '../styles/App.scss';
import { Link } from 'react-router-dom';

function Header({sumOfBasket}) {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <Link to="/main">
                    <img className='header__logo' src={require('../img/logo.png')} alt="Logotype"/>
                </Link>
                <p className='header__sum'>Сумма корзины: <span className='header__value'>{sumOfBasket}</span>$</p>
                <Link to="/basket">
                    <div className='header__basket'>   
                        <span className='header__basket-count'>0</span> 
                        <img className='header__basket-image' src={require('../img/basket.png')} alt="Basket"/>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header