import React from 'react'
import '../styles/App.scss'
import MainItem from './MainItem.jsx'

function ShowFullItems({items}) {
    return (
        <div className='catalog'>
            <div className="catalog__container">
                <ul className="catalog__list">
                    {
                        items.map(item => 
                            <MainItem key={item.id} props={item}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShowFullItems