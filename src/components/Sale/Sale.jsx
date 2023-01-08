import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton.jsx'
import MyInput from '../UI/Input/MyInput.jsx'
import SaleItem from './SaleItem.jsx'

function Sale({countProducts, totalPrice}) {
    const [promo, setPromo] = useState('')
    const saleArray = [ //No anyone knows about this instead of me!
        {
            'name': 'ABOBA',
            'description': 'Good sale!!!',
            'sale': 10,
        },
        {
            'name': 'MONEY',
            'description': 'MONEY MONEY MONEY',
            'sale': 25,
        }
    ]

    function addToSales () {
        
    }

    return (
    
    <div className='sale'>
        <div className='sale__container'>
            <p className='sale__header'>
                Summary
            </p>
            <div className="sale__body">
                <MyInput
                    value = {promo}
                    onChange = {e => setPromo(e.target.value)}
                    placeholder = "Enter promo..."
                />
                {
                    saleArray
                    .filter(item => 
                        item.name === promo
                    )
                    .map(item => 
                        <SaleItem key={item.name} item={item} />   
                    )
                }
                <p className='sale__promo-example'>
                    Test promo: 'ABOBA' or 'MONEY'
                </p>
                <MyButton onClick={() => addToSales}>Click to buy</MyButton>
            </div>
        </div>
    </div>
  )
}

export default Sale