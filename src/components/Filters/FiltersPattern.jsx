import React from 'react'
import cl from './Filter.module.scss'

function FiltersPattern({name = 'Filter', children}) {
  return (
    <div className={cl.filter__item}>
        <h4 className={cl.filter__header}>
            {name}
        </h4>
        <div className={cl.filter__body}>
            {children}    
        </div>
    </div>
  )
}

export default FiltersPattern