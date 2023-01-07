import React, { useState } from 'react'
import ItemCard from '../../pages/ItemCard.jsx'
import './Basket.scss'

function Counter({stock, price, id, deleteItem, returnPrice}) {
    const [count, setCount] = useState(1)

    function increment() {
        if(count < stock) {
            setCount(count + 1)
            returnPrice(price * (count + 1))
        }
    }
    
    function decrement () {
        if (count > 1) {
            setCount(count - 1)
            returnPrice(price * (count - 1))
        }
        else {
            deleteItem(id)
        }
    }
    
    return (
        <div className='counter'>
            <p className="counter__stock">
                Stock: {stock}
            </p>
            <div className="counter__container">
                <button className='counter__count' onClick={() => increment()}>+</button>
                <p className='counter__number'>{count}</p>
                <button className='counter__count' onClick={() => decrement()}>-</button>
            </div>
            <p className='counter__price'>
                Price: {price * count}$
            </p>
        </div>
    )
}

export default Counter