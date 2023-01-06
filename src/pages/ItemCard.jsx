import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gettingJSON from '../API/getJSON'
import CardPattern from '../components/Card/CardPattern.jsx'
import MainSlider from '../components/Slider/MainSlider.jsx'
import SubSlider from '../components/Slider/SubSlider.jsx'
import MyButton from '../components/UI/Button/MyButton.jsx'
import '../styles/App.scss'
//Страница карточки товара
function ItemCard(props) {
    const params = useParams()
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setItem(gettingJSON.getItemsById(params.id))
        setIsLoading(true)
    }, [])

    const [controlledSwiperFirst, setControlledSwiperFirst] = useState(null)
    const [controlledSwiperSecond, setControlledSwiperSecond] = useState(null)

    return (
        <div className="card">
            {
            isLoading ?
            <div className="container">
                <div className="card__container">
                    <div className="card__sliders">
                        <SubSlider imageArray={item.images} controlSwiper={controlledSwiperSecond} onSwiperControl={setControlledSwiperFirst}/>
                        <MainSlider imageArray={item.images} controlSwiper={controlledSwiperFirst} onSwiperControl={setControlledSwiperSecond}/>
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
                            <MyButton onClick={saveToBasket}>Добавить в корзину</MyButton>
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