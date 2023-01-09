import React, { useEffect, useState } from 'react'
import '../styles/App.scss';
import { Link } from 'react-router-dom';

function Header() {
    const [sumOfBasket, setSumOfBasket] = useState(0)
    const [countOfBasket, setCountOfBasket] = useState(0)

    setInterval(() => { //I had no time guys, just relax! :DDDDD
        if(localStorage.getItem('basket')) {
            setSumOfBasket(JSON.parse(localStorage.getItem('basket')).reduce((prev, curr) => prev + (curr.price * curr.count), 0))
            setCountOfBasket(JSON.parse(localStorage.getItem('basket')).reduce((prev, curr) => prev + curr.count, 0))
        }
    }, 1000)

    useEffect(() => {
        if(localStorage.getItem('basket')) {
            const arrayOfItems = JSON.parse(localStorage.getItem('basket'))
            setSumOfBasket(arrayOfItems.reduce((prev, curr) => prev + (curr.price * curr.count), 0))
            setCountOfBasket(arrayOfItems.reduce((prev, curr) => prev + curr.count, 0))
        }
    }, [setSumOfBasket, countOfBasket])

  return (
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <Link to="/main">
                    <img className='header__logo' src={require('../img/logo.png')} alt="Logotype"/>
                </Link>
                <p className='header__sum'>Sum of the basket: <span className='header__value'>{sumOfBasket.toFixed(1)}</span>$</p>
                <Link to="/basket">
                    <div className='header__basket'>   
                        <span className='header__basket-count'>{countOfBasket}</span> 
                        <img className='header__basket-image' src={require('../img/basket.png')} alt="Basket"/>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header