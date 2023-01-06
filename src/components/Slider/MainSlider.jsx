import React from 'react'
import Slide from './Slide.jsx'
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './Slider.scss'

function MainSlider({imageArray, controlSwiper, onSwiperControl}) {
    return (
        <Swiper className='main-swiper'
        loop= {true}
        slidesPerView= {1}
        modules={[Controller]}
        // onSwiper={onSwiperControl}
        // controller={{ control: controlSwiper }}
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