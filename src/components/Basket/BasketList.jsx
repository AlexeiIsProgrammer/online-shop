import React from 'react'
import BasketItem from './BasketItem.jsx'
import './Basket.scss'

function BasketList({props, deleteItem, returnPrice}) {
    return (
        <div className='basket'>
            <ul className="basket__container">
                {
                    props.map((item, ind) =>
                        <BasketItem key={ind} ind={ind} item={item} deleteItem={deleteItem} returnPrice={returnPrice}/>
                    )
                }
            </ul>
        </div>
    )
}

export default BasketList