import React from 'react'
import cl from './MyButton.module.scss'

function MyButton({children, ...props}) {
  return (
    <button {...props} className={cl.button}>
        {children}
    </button>
  )
}

export default MyButton