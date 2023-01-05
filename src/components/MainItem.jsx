import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainItem() {
    const router = useNavigate()
    return (
        <h1>
            <button onClick={() => router(`/main/${props.item.id}`)}></button>
        </h1>
    )
}

export default MainItem