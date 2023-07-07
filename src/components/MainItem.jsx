import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.scss'
import MyButton from './UI/Button/MyButton.jsx'

function MainItem({props, basket, setBasket}) {
    const router = useNavigate()

    function addToBasket(ind) {

        if(!basket.some(el => ind.id === el.id)) {
            const newBasket = [...basket, ind]
            setBasket(newBasket)
            localStorage.setItem('basket', JSON.stringify(newBasket))
        }
        else {
            const newBasket = [...basket.slice(0, basket.findIndex(el => ind.id === el.id)), ...basket.slice(basket.findIndex(el => ind.id === el.id) + 1)]
            setBasket(newBasket)
            localStorage.setItem('basket', JSON.stringify(newBasket))
        }
    }

    return (
        <li className='catalog__item product' style={{backgroundImage: `url(${require(`../img/${props.thumbnail}`)})`}}>
            <p className={`${!basket.some(el => el.id === props.id) ? 'product__header' : 'product__header_active'}`} >
                {props.brand} {props.model}
            </p>
            <div className='product__body'>
                <div className='product__description'>
                    <p>Price:
                        <span>{props.price.toFixed(1)}</span>
                    </p>
                    <p>Discount:
                        <span>{props.discountPercentage}</span>
                    </p>
                    <p>Rating:
                        <span>{props.rating}</span>
                    </p>
                    <p>Stock:
                        <span>{props.stock}</span>
                    </p>
                    <p>Category:
                        <span>{props.category}</span>
                    </p>
                </div>
                <div className='product__btns'>
                    <MyButton onClick={() => addToBasket({id : props.id, count: 1, price: props.price})}>{
                        !basket.some(el => el.id === props.id)
                        ?
                        'Добавить в корзину'
                        :
                        'Удалить из корзины'
                    }</MyButton>
                    <MyButton onClick={() => router(`/main/${props.id - 1}`)}>Подробнее</MyButton>
                </div>
            </div>
        </li>
    )
}

export default MainItem