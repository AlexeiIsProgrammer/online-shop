import React, { useState } from 'react'
import BasketItem from './BasketItem.jsx'
import './Basket.scss'

function BasketList({props, deleteItem, getCount}) {

    
    return (
        <div className='basket'>
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