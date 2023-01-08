import React from 'react'
import MyButton from '../UI/Button/MyButton.jsx'

function SaleItem({item}) {
  return (
    <div>
        <p>
            {item.description} - {item.sale}%
            <MyButton>Add</MyButton>
        </p>
    </div>
  )
}

export default SaleItem