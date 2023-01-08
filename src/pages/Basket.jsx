import React, { useEffect, useState } from 'react'
import gettingJSON from '../API/getJSON'
import BasketHeader from '../components/Basket/BasketHeader.jsx'
import BasketList from '../components/Basket/BasketList.jsx'
import Sale from '../components/Sale/Sale.jsx'
import '../styles/App.scss'

function Basket() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [basketItems, setBasketItems] = useState([])

  const deleteItem = (ind) => {
    const newBasket = [...basketItems.slice(0, basketItems.findIndex(el => el.id === ind)), ...basketItems.slice(basketItems.findIndex(el => el.id === ind) + 1)]
    setBasketItems(newBasket)
    localStorage.setItem('basket', JSON.stringify(newBasket))
  }

  // const returnPrice = (value) => value

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
                <div>
                  <BasketHeader/>
                  <BasketList 
                    props={basketItems.map((item) =>
                      {
                        return {
                          info: items[item.id - 1],
                          count: item.count
                        }
                      }
                    )}
                    deleteItem={deleteItem}/>
                </div>
                <Sale countProducts={basketItems.length} />
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