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
  const [propes, setPropes] = useState([])
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
        setPropes(basketItems.map((item) =>
        {
          return {
            info: items[item.id - 1],
            count: item.count,
            price: item.price
          }
        }
      ))
      setCount(JSON.parse(localStorage.getItem('basket')).reduce((prev, cur) => prev + cur.count, 0))
      setSum(JSON.parse(localStorage.getItem('basket')).reduce((prev, cur) => prev + (cur.count * cur.price), 0).toFixed(3))
      }
      setisLoading(true)
  }, [])

  const getCount = (ind, count) => {
    const propes = basketItems.map((item) =>
    {
      return {
        info: items[item.id - 1],
        count: item.count,
        price: item.price
      }
    }
  )
    const newItem = propes.find(el => el.info.id === ind)
    newItem.count = count
    let newBasket = []
    console.log(propes)
    if(newItem.count <= 0) {
        newBasket = [...propes.slice(0, propes.findIndex(el => el.info.id === ind)), ...propes.slice(propes.findIndex(el => el.info.id === ind) + 1)]
    }
    else {
        newBasket = [...propes.slice(0, propes.findIndex(el => el.info.id === ind)), newItem, ...propes.slice(propes.findIndex(el => el.info.id === ind) + 1)]
    }
    localStorage.setItem('basket', JSON.stringify(newBasket.map(item => { return { id: item.info.id, count: count, price: item.info.price } })))
    setCount(newBasket.reduce((prev, cur) => prev + cur.count, 0))
    setSum(newBasket.reduce((prev, cur) => prev + (cur.count * cur.info.price), 0).toFixed(3))
}

const [count, setCount] = useState(0)
const [sum, setSum] = useState(0);

  return (
    <div>
      {
        isLoading && basketItems.length
        ?
        <div className='basket__main'>
          <div className='container'>
            <div className='basket__main-container'>
                <div>
                <h1>
                    <p>
                        Сумма товаров: {sum} 
                    </p>
                    <p>
                        Кол-во товаров: {count}
                    </p>
                </h1>
                  <BasketHeader/>
                  <BasketList 
                    props={basketItems.map((item) =>
                      {
                        return {
                          info: items[item.id - 1],
                          count: item.count,
                          price: item.price
                        }
                      }
                    )}
                    deleteItem={deleteItem}
                    getCount={getCount}/>
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