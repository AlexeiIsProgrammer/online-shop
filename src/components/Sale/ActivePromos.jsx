import React from 'react'
import MyButton from '../UI/Button/MyButton.jsx'
import './Sale.scss'

function ActivePromos({activeSales, setActiveSales}) {
  return (
    <div className='sales-active'>
        <p className='sales-active__header'>
            Active promo's:
        </p>
        <ul className='sales-active__list'>
            {
                activeSales.map(item =>
                <li className='sales-active__item' key={item.name}>
                    <p>
                        Promocode name: {item.name}
                    </p>
                    <p>
                        Sale percent: {item.sale}
                    </p>
                    <MyButton onClick={() => {
                        setActiveSales([...activeSales.slice(0, activeSales.findIndex(el => el.name === item.name)), ...activeSales.slice(activeSales.findIndex(el => el.name === item.name) + 1)])
                    }}>Drop</MyButton>
                </li>
            )
        }
        </ul>
    </div>
  )
}

export default ActivePromos