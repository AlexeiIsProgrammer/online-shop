import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.scss'
import MyButton from './UI/Button/MyButton.jsx'


function MainItem({props}) {
    const router = useNavigate()
    console.log(props.thumbnail);
    return (
        <li className='catalog__item product' style={{backgroundImage: `url(${require(`../img/${props.thumbnail}`)})`}}>
            <p className='product__header'>
                {props.brand} {props.model}
            </p>
            <div className='product__body'>
                <div className='product__description'>
                    <p>Price:
                        <span>{props.price}</span>
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
                    <MyButton onClick={() => alert("Добавление в корзину")}>Добавить в корзину</MyButton>
                    <MyButton onClick={() => router(`/main/${props.id - 1}`)}>Подробнее</MyButton>
                </div>
            </div>
        </li>
    )
}

export default MainItem