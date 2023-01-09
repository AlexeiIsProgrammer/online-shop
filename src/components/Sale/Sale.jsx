import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton.jsx'
import MyInput from '../UI/Input/MyInput.jsx'
import ValidationModal from '../ValidationModal.jsx'
import ActivePromos from './ActivePromos.jsx'
import SaleItem from './SaleItem.jsx'

function Sale({totalPrice, setBasketItems}) {
    const [promo, setPromo] = useState('')
    const [activeSales, setActiveSales] = useState([])
    const [isOpen, setIsOpen] = useState(false)
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

    function buyItem () {
        setIsOpen(true)
    }

    useEffect(() => {
        if(localStorage.getItem('isBought')) {
            setIsOpen(true)
        }
    })

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
                    activeSales.length
                    ?
                    <ActivePromos activeSales={activeSales} setActiveSales={setActiveSales}/>
                    :
                    <h1>
                        Промокоды не активированы
                    </h1>
                }
                {
                    saleArray
                    .filter(item => 
                        item.name === promo
                    )
                    .map(item => 
                        <SaleItem key={item.name} item={item} activeSales={activeSales} setActiveSales={setActiveSales}/>   
                    )
                }
                <p className='sale__promo-example'>
                    Test promo: 'ABOBA' or 'MONEY'
                </p>
                <MyButton onClick={() => buyItem()}>Click to buy</MyButton>
            </div>
            <h1 className='sale__conclusion'>
                Conclusion order's sum: {
                    activeSales.length
                    ?
                    totalPrice - (totalPrice *
                    activeSales.reduce((prev, curr) => {
                        return prev + curr.sale
                    }, 0) / 100)
                    :
                    totalPrice
                }
            </h1>
        </div>
        <ValidationModal isOpen={isOpen} setIsOpen={setIsOpen} setBasketItems={setBasketItems}/>
    </div>
  )
}

export default Sale