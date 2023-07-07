import React from 'react'
import MyButton from '../UI/Button/MyButton.jsx'

function SaleItem({item, activeSales, setActiveSales}) {
  return (
    <div>
        <p>
            {item.description} - {item.sale}%
            <MyButton onClick={() => {
              if (!activeSales.some(el => el.name === item.name)) {
                setActiveSales([...activeSales, item])
              }
              }}>Add</MyButton>
        </p>
    </div>
  )
}

export default SaleItem