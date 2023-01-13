import React from 'react'
import './Slider.scss'

function Slide({imageSlide}) {
    return (
    <img src={require(`../../img/${imageSlide}`)} alt="photo" />
  )
}

export default Slide