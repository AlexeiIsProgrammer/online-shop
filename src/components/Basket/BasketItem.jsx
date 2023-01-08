import React from 'react'
import './Basket.scss'
import Counter from './Counter.jsx'

function BasketItem({item, ind, deleteItem, getCount}) {
    return (
        <li className='basket__item'>
            <p className='basket__id'>
                {ind + 1}
            </p>
            <img className='basket__image' src={require(`../../img/${item.info.thumbnail}`)} />
            <div className='basket__info'>
                <p className='basket__name'>
                    {item.info.brand} {item.info.model}
                </p>
                <p className='basket__description'>
                    {item.info.description}
                </p>
                <div className='basket__raount'>
                    <p>
                        Rating: {item.info.rating}
                    </p>
                    <p>
                        Discount: {item.info.discountPercentage}
                    </p>
                </div>
            </div>

            <Counter itemCount={item.count} stock={item.info.stock} price={item.info.price} id={item.info.id} deleteItem={deleteItem} getCount={getCount}/>
        </li>
    )
}

export default BasketItem