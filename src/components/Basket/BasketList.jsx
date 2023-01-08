import React, { useState } from 'react'
import BasketItem from './BasketItem.jsx'
import './Basket.scss'

function BasketList({props, deleteItem}) {

    const getCount = (ind, count) => {
        console.log(ind)
        const newItem = props.find(el => el.info.id === ind)
        newItem.count = count
        let newBasket = []
        console.log(newItem)
        if(newItem.count <= 0) {
            console.log('first')
            newBasket = [...props.slice(0, props.findIndex(el => el.info.id === ind)), ...props.slice(props.findIndex(el => el.info.id === ind) + 1)]
        }
        else {
            console.log('second')
            console.log(props.findIndex(el => el.info.id === ind))
            console.log(props.findIndex(el => el.info.id === ind) + 1)
            newBasket = [...props.slice(0, props.findIndex(el => el.info.id === ind)), newItem, ...props.slice(props.findIndex(el => el.info.id === ind) + 1)]
        }
        localStorage.setItem('basket', JSON.stringify(newBasket.map(item => { return { id: item.info.id, count: item.count, price: item.info.price } })))
        setCountt(newBasket.reduce((prev, cur) => prev + cur.count, 0))
        setSum(newBasket.reduce((prev, cur) => prev + (cur.count * cur.info.price), 0).toFixed(3))
    }

    const [countt, setCountt] = useState(props.reduce((prev, cur) => prev + cur.count, 0)) //изменить имя
    const [sum, setSum] = useState(props.reduce((prev, cur) => prev + (cur.count * cur.info.price), 0));
    
    return (
        <div className='basket'>
            <h1>
            <p>
                Items in basket: {countt}
            </p>
            <p>
                Sum of the basket: {sum}
            </p>
            </h1>
            <ul className="basket__container">
                {
                    props.map((item, ind) => {
                        return <BasketItem key={ind} item={item} ind={ind} deleteItem={deleteItem} getCount={getCount}/>
                    })  
                }
            </ul>

        </div>
    )
}

export default BasketList