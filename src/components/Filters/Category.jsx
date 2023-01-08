import React from 'react'
import CheckBox from './CheckBox.jsx'
import cl from './Filter.module.scss'

function Category({filter, setFilter, name, props}) {
  return (
    <ul>
      {
        props.map((item, ind) =>
          <CheckBox filter={filter} setFilter={setFilter} key={ind} value={item} iName={item} name={name}/>  
        )
      }
    </ul>
  )
}

export default Category