import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import gettingJSON from '../API/getJSON'
import CardPattern from '../components/Card/CardPattern.jsx'
import MainSlider from '../components/Slider/MainSlider.jsx'
import Slide from '../components/Slider/Slide.jsx'
import SubSlider from '../components/Slider/SubSlider.jsx'
import MyButton from '../components/UI/Button/MyButton.jsx'
import '../styles/App.scss'
//Страница карточки товара
function ItemCard() {
    const params = useParams()
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [basket, setBasket] = useState([])

    const swiper1Ref = useRef();
    const swiper2Ref = useRef();

    useEffect(() => {
        setItem(gettingJSON.getItemsById(params.id))
        if(localStorage.getItem('basket')) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }
        setIsLoading(true)
    }, [])

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
        <div className="card">
            {
            isLoading ?
            <div className="container">
                <div className="card__breadcrumbs breadcrumbs">
                    <ul className='breadcrumbs__container'>
                        <span>Каталог</span>
                        <span>{'>'}</span>
                        <span>{item.category}</span>
                        <span>{'>'}</span>
                        <span>{item.brand}</span>
                        <span>{'>'}</span>
                        <span>{item.model}</span>
                    </ul>
                </div>
                <div className="card__container">
                    <div className="card__sliders">
                        <SubSlider imageArray={item.images} controlSwiper={swiper1Ref} secondControl={swiper2Ref} />
                        <MainSlider imageArray={item.images} controlSwiper={swiper2Ref} secondControl={swiper1Ref} />
                    </div>
                    <div className='card__info info'>
                        <div className='info__container'>
                            <CardPattern name={"Модель"} description={item.model}/>
                            <CardPattern name={"Описание"} description={item.description}/>
                            <CardPattern name={"Скидка"} description={item.discountPercentage}/>
                            <CardPattern name={"Рейтинг"} description={item.rating}/>
                            <CardPattern name={"Осталось на складе"} description={item.stock}/>
                            <CardPattern name={"Марка"} description={item.brand}/>
                        </div>
                        <div className='info__btns'>
                            <MyButton onClick={() => addToBasket({id: item.id, count: 1, price: item.price})}>
                            {
                                !basket.some(el => item.id === el.id)
                                ?
                                'Добавить в корзину'
                                :
                                'Удалить из корзины'
                            }
                            </MyButton>
                            <MyButton onClick={() => alert("Открытие формы с валидацией!")}>Купить прямо сейчас!</MyButton>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div>Загрузка товара...</div>
            }
        </div>
    );
}

export default ItemCard