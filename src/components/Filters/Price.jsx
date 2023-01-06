import React from 'react'
import '../../multirange.js';
import '../../multirange.css';

function Price({...props}) {
  return (
    <input {...props} />
  )
}

export default Price