import React from 'react'
import cl from './CardPattern.module.scss'

function CardPattern({name, description}) {
  return (
    <div className={cl.info__block}>
        <p className={cl.info__name}>
            {name}
        </p>
        <p className={cl.info__description}>
            {description}
        </p>
    </div>
  )
}

export default CardPattern