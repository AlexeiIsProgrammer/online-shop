import React from 'react'
import CheckBox from './CheckBox.jsx'

function Model({props}) {
  return (
    <ul>
      {
        props.map((item, ind) =>
          <CheckBox key={ind} name={item} type={'model'}/>  
        )
      }
    </ul>
  )
}

export default Model