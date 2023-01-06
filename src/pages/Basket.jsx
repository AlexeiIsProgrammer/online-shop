import React, { useEffect, useState } from 'react'
import gettingJSON from '../API/getJSON'

function Basket() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
      setItems(gettingJSON.getItems())
      if(localStorage.getItem('basket')) {
        setBasketItems(JSON.parse(localStorage.getItem('basket')))
      }
      setisLoading(true)
  }, [])


  return (
    <div>
      {
        isLoading
        ?
        basketItems.map((item, ind) => 
          <p key={ind}>
            {items[item - 1].description}
          </p>
        )
        :
        <h1>Загрузка данных!</h1>
      }
    </div>
  )
}

export default Basket