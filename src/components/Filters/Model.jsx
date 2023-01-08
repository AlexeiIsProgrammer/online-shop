import React from 'react'
import CheckBox from './CheckBox.jsx'

function Model({filter, setFilter, props, name}) {
  return (
    <ul>
      {
        props.map((item, ind) =>
          <CheckBox filter={filter} setFilter={setFilter} key={ind} iName={item} value={item} name={name} />  
        )
      }
    </ul>
  )
}

export default Model