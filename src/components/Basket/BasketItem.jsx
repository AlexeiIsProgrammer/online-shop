import React from 'react'
import './Basket.scss'
import Counter from './Counter.jsx'

function BasketItem({item, ind, deleteItem, returnPrice}) {
    return (
        <li className='basket__item'>
            <p className='basket__id'>
                {ind + 1}
            </p>
            <img className='basket__image' src={require(`../../img/${item.thumbnail}`)} />
            <div className='basket__info'>
                <p className='basket__name'>
                    {item.brand}{item.model}
                </p>
                <p className='basket__description'>
                    {item.description}
                </p>
                <div className='basket__raount'>
                    <p>
                        Rating: {item.rating}
                    </p>
                    <p>
                        Discount: {item.discountPercentage}
                    </p>
                </div>
            </div>

            <Counter stock={item.stock} price={item.price} id={item.id} deleteItem={deleteItem} returnPrice={returnPrice}/>
        </li>
    )
}

export default BasketItem