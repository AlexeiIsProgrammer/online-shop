import React, { useState } from 'react'
import '../styles/App.scss'
import MainItem from './MainItem.jsx'
import MyButton from './UI/Button/MyButton.jsx'
import MyInput from './UI/Input/MyInput.jsx'
import MySelect from './UI/Select/MySelect.jsx'
import { useItems } from '../hooks/useItems'

function ShowFullItems({items, basket, setBasket, filter, setFilter}) {

    const [isOtherBlock, setIsOtherBlock] = useState(false)
    const sortedAndSearchedPosts = useItems(items, filter.sort, filter.query, filter.brand, filter.category)

    const changeBlock = () => isOtherBlock ? setIsOtherBlock(false) : setIsOtherBlock(true)
    
    return (
        <div className='catalog'>
            <div className="catalog__container">
                <div className='catalog__header'>
                <MySelect 
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue = "Сортировочка"
                    options={
                        [
                            {value: 'price', name: 'Сначала дорогие'},
                            {value: 'price-low', name: 'Сначала дешевые'},
                            {value: 'rating', name: 'Более рейтинговые'},
                            {value: 'rating-low', name: 'Менее рейтинговые'},
                            {value: 'stock', name: 'Больше всего на складе'},
                            {value: 'stock-low', name: 'Меньше всего на складе'}
                        ]
                    }
                />

                <p>
                    Founded: {sortedAndSearchedPosts.length}
                </p>

                <MyInput 
                    value = {filter.query}
                    onChange = {e => setFilter({...filter, query: e.target.value})}
                    placeholder = "Найдите товар..."
                />

                <MyButton onClick={changeBlock}>Изменить отображение</MyButton>

                </div>
                <ul className={isOtherBlock ? "catalog__list_other" : "catalog__list"}>
                    {
                        sortedAndSearchedPosts.map(item => 
                            <MainItem key={item.id} props={item} basket={basket} setBasket={setBasket}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShowFullItems