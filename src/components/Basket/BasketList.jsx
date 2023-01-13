import React, { useState } from 'react'
import BasketItem from './BasketItem.jsx'
import './Basket.scss'

function BasketList({props, deleteItem, limit, getCount}) {
    
    return (
        <div className='basket'>
            <ul className="basket__container">
                {
                    props.map((item, ind) => {
                        return <BasketItem key={ind} item={item} ind={ind} deleteItem={deleteItem} getCount={getCount}/>
                    })
                    .filter((item, ind) => {
                        if (ind + 1 > (limit.page * limit.limit) - limit.limit && ind + 1 <= limit.page * limit.limit) {
                            return true
                        }
                        return false
                    })
                }
            </ul>

        </div>
    )
}

export default BasketList