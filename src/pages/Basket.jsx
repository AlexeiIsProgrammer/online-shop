import React, { useEffect, useState } from 'react'
import gettingJSON from '../API/getJSON'
import BasketList from '../components/Basket/BasketList.jsx'
import Sale from '../components/Sale/Sale.jsx'
import '../styles/App.scss'

function Basket() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [basketItems, setBasketItems] = useState([])
  const [limit, setLimit] = useState({limit: 5, pages: 1, page: 1})

  const [countt, setCountt] = useState() //изменить имя

  const [sum, setSum] = useState();

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
        setCountt(JSON.parse(localStorage.getItem('basket')).reduce((prev, cur) => prev + cur.count, 0))
        setSum(JSON.parse(localStorage.getItem('basket')).reduce((prev, cur) => prev + (cur.count * cur.price), 0))
      }
      setisLoading(true)
  }, [])

  const getCount = (ind, count) => {
      const propes = basketItems.map((item) => {
          return {
            info: items[item.id - 1],
            count: item.count
          }
      })
      const newItem = propes.find(el => el.info.id === ind)
      newItem.count = count
      let newBasket = []
      if(newItem.count <= 0) {
          newBasket = [...propes.slice(0, propes.findIndex(el => el.info.id === ind)), ...propes.slice(propes.findIndex(el => el.info.id === ind) + 1)]
      }
      else {
          newBasket = [...propes.slice(0, propes.findIndex(el => el.info.id === ind)), newItem, ...propes.slice(propes.findIndex(el => el.info.id === ind) + 1)]
      }
      localStorage.setItem('basket', JSON.stringify(newBasket.map(item => { return { id: item.info.id, count: item.count, price: item.info.price } })))
      setCountt(newBasket.reduce((prev, cur) => prev + cur.count, 0))
      setSum(newBasket.reduce((prev, cur) => prev + (cur.count * cur.info.price), 0).toFixed(3))
  }

  return (
    <div>
      {
        isLoading && basketItems.length
        ?
        <div className='basket__main'>
          <div className='container'>
            <div className='basket__main-container'>
                <div>
                  <div className='basket__header'>
                      <p>Basket items</p>
                      <div className='basket__limit'>
                        Limit: <input type="number" value={limit.limit} max={5} min={1} onChange={(e) => {
                          setLimit({limit: +e.target.value, pages: Math.ceil(basketItems.length / +e.target.value), page: 1})}}/>
                      </div>
                      <div className='basket__pagination'>
                        Pages: <input type="number" value={limit.page} min={1} max={limit.pages} onChange={(e) => setLimit({...limit, page: +e.target.value})}/>
                      </div>
                  </div>
                  <BasketList 
                    props={basketItems.map((item) =>
                      {
                        return {
                          info: items[item.id - 1],
                          count: item.count
                        }
                      }
                    )}
                    deleteItem={deleteItem}
                    limit={limit}
                    getCount={getCount}/>
                </div>
                <Sale totalPrice={sum} setBasketItems={setBasketItems}/>
                <h1>
                  <p>
                      Items in basket: {countt}
                  </p>
                  <p>
                      Sum of the basket: {sum}
                  </p>
                </h1>
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