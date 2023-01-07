import React, { createContext, useContext, useEffect, useState } from 'react'
import gettingJSON from '../API/getJSON'
import BasketHeader from '../components/Basket/BasketHeader.jsx'
import BasketList from '../components/Basket/BasketList.jsx'
import Sale from '../components/Sale/Sale.jsx'
import '../styles/App.scss'

function Basket() {
  const BasketContext = createContext({count: 0, price: 0});
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [basketItems, setBasketItems] = useState([])

  const deleteItem = (id) => {
    const newBasket = [...basketItems.slice(0, basketItems.indexOf(id)), ...basketItems.slice(basketItems.indexOf(id) + 1)]
    setBasketItems(newBasket)
    localStorage.setItem('basket', JSON.stringify(newBasket))
  }

  const returnPrice = (value) => value

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
        isLoading && basketItems.length
        ?
        <div className='basket__main'>
          <div className='container'>
            <div className='basket__main-container'>
              <BasketContext.Provider>
                <div>
                  <BasketHeader/>
                  <BasketList props={basketItems.map((item) => items[item - 1])} deleteItem={deleteItem} returnPrice={returnPrice}/>
                </div>
                <Sale countProducts={basketItems.length} totalPrice={returnPrice} />
              </BasketContext.Provider>
            </div>
          </div>
        </div>
        :
        <h1>Пусто!</h1>
      }
    </div>
  )
}

export default Basket