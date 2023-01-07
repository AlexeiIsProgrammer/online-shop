import React from 'react'
import MyButton from '../UI/Button/MyButton.jsx'
import MyInput from '../UI/Input/MyInput.jsx'

function Sale({countProducts, totalPrice}) {
  return (
    <div className='sale'>
        <div className='sale__container'>
            <p className='sale__header'>
                Summary
            </p>
            <div className="sale__body">
                <p className='sale__products'>
                    Items: {countProducts}
                </p>
                <p className='sale__total'>
                    Total: {totalPrice}$
                </p>
                <MyInput type="text" placeholder='Enter promo...'/>
                <p className='sale__promo-example'>
                    Test promo: 'ABOBA' or 'MONEY'
                </p>
                <MyButton>Click to buy</MyButton>
            </div>
        </div>
    </div>
  )
}

export default Sale