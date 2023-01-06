import React from 'react'
import CheckBox from './CheckBox.jsx'
import cl from './Filter.module.scss'

function Category({props}) {
  return (
    <ul>
      {
        props.map((item, ind) =>
          <CheckBox key={ind} name={item} type={'category'}/>  
        )
      }
    </ul>
  )
}

export default Category