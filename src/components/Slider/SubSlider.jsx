import React, { useEffect, useLayoutEffect } from 'react'
import Slide from './Slide.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './Slider.scss'
import { Controller } from 'swiper';

function SubSlider({imageArray, controlSwiper, secondControl}) {
    useEffect(() => {
        controlSwiper.current.controller.control = secondControl.current;
    }, [])
    return (
        <Swiper className='sub-swiper'
        onSwiper={(swiper) => {
            controlSwiper.current = swiper;
        }}
        direction= {'vertical'}
        loop= {true}
        slidesPerView= {3}
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

export default SubSlider