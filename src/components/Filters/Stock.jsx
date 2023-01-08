import React from 'react'

function Stock({...props}) {
  return (
    <input type='range' {...props} />
  )
}

export default Stock