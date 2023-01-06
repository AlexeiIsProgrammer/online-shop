import React from 'react'
import '../styles/App.scss'
import Category from './Filters/Category.jsx'
import FiltersPattern from './Filters/FiltersPattern.jsx'
import Model from './Filters/Model.jsx'
import Price from './Filters/Price.jsx'
import Stock from './Filters/Stock.jsx'
import MyButton from './UI/Button/MyButton.jsx'

function FilterList({props}) {

    const categorySet = new Set(props.map(item => item.category))
    const modelSet = new Set(props.map(item => item.brand))

    return (
        <div className='filter'>
            <div className='filter__btns'>
                <MyButton>Очистить фильтры</MyButton>
                <MyButton>Копировать ссылку</MyButton>
            </div>
            <div className="filter__container">
                <FiltersPattern name='Category'>
                    <Category props={[...categorySet]}/>    
                </FiltersPattern>
                <FiltersPattern name='Model'>
                    <Model props={[...modelSet]}/>
                </FiltersPattern>
                <FiltersPattern name='Price'>
                    <Price type="range" multiple/>
                </FiltersPattern>
                <FiltersPattern name='Stock'>
                    <Stock type="range" multiple/>
                </FiltersPattern>
            </div>
        </div>
    )
}

export default FilterList