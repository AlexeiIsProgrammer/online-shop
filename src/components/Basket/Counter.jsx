import React, { useState } from 'react'
import ItemCard from '../../pages/ItemCard.jsx'
import './Basket.scss'

function Counter({itemCount, stock, price, id, deleteItem, getCount}) {
    const [count, setCount] = useState(itemCount)

    function increment() {
        if(count < stock) {
            setCount(count + 1)
            getCount(id, count + 1)
        }
    }
    
    function decrement () {
        if (count > 1) {
            setCount(count - 1)
            getCount(id, count - 1)
        }
        else {
            deleteItem(id)
            getCount(id, count - 1)
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