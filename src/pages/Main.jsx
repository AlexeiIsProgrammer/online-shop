import React, { useEffect, useState } from 'react'
import gettingJSON from '../API/getJSON.js'
import FilterList from '../components/FilterList.jsx'
import ShowFullItems from '../components/ShowFullItems.jsx'
import '../styles/App.scss'

function Main() {
    const [items, setItems] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [basketItems, setBasketItems] = useState([])

    const [filter, setFilter] = useState({ sort: "", query: "", brand: [], category: []})

    // console.log(params.toString())
    // console.log(params.get('query'))

    useEffect(() => {
        setItems(gettingJSON.getItems())
        if(localStorage.getItem('basket')) {
            setBasketItems(JSON.parse(localStorage.getItem('basket')))
        }
        setisLoading(true)
    }, [])

    return (
        <div className='main'>
            <div className="container">
                <div className="main__container">
                    <FilterList filter={filter} setFilter={setFilter} props={items}/>
                    {
                        isLoading
                        ?
                        <ShowFullItems items={items} basket={basketItems} setBasket={setBasketItems} filter={filter} setFilter={setFilter}/>
                        :
                        <h1>Подгрузка товаров...</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main