import React from 'react'
import cl from './Filter.module.scss'

function Category() {
  return (
    <ul>
      <li>
        <input type="checkbox" name='category'/>      
        Cars
      </li>
      <li>
        <input type="checkbox" name='category'/>
        Motorcycles
      </li>
    </ul>
  )
}

export default Category