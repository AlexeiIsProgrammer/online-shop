import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Страница карточки товара
function ItemCard(props) {
    const params = useParams()
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    console.log(params)

    function getItemsById(id) {
        const json = require('../../../db.json');
        
        setItem(json.products[id]);
    }

    useEffect(() => {
        getItemsById(params.id)
        setIsLoading(true)
    }, [])

    return (
        <div>
            {
                isLoading
                ?
                <h1>
                    Страница товара!
                    <p>{item.model}</p>    
                    <p>{item.description}</p>    
                    <p>{item.price}</p>    
                    <p>{item.thumbnail}</p>    
                    <img src={item.thumbnail} alt='aboba' />    
                </h1>
                :
                <div>Загрузка товара...</div>
            }
        </div>
    )
}

export default ItemCard