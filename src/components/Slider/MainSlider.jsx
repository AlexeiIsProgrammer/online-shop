import React from 'react'
import Slide from './Slide.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './Slider.scss'

function MainSlider({imageArray}) {
    return (
        <Swiper className='main-swiper'
        loop= {true}
        slidesPerView= {1}
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

export default MainSlider