import React from 'react'
import cl from './MyInput.module.scss'

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cl.input} {...props} />
    )
})

export default MyInput