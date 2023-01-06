import React from 'react'
import Slide from './Slide.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './Slider.scss'

function SubSlider({imageArray}) {
  return (
    <Swiper className='sub-swiper'
    direction= {'vertical'}
    loop= {true}
    slidesPerView= {3}
    >

      {    
          imageArray.map((item, ind) => 
              <SwiperSlide key={ind}>
                <Slide imageSlide = {item}/>
              </SwiperSlide>
          )
      }
    </Swiper>
  )
}

export default SubSlider