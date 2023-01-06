import React from 'react'
import '../styles/App.scss'

function Error() {
    return (
        <div className='error'>
            <div className="container">
                <p className='error__type'>
                    404
                </p>
                <p className='error__name'>
                    страница не найдена!
                </p>
            </div>
        </div>
    )
}

export default Error