"use client"
import PropertyCard from '@/components/property_card';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "@/css/profile.css"  

export default function UserProfile({ params }: any) {

  const width = window.innerWidth;

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page <span className='p-2 rounded bg-blue-500 text-lg'>{params.id}</span></p>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={width > 1000 ? 4 : 1}
        modules={[Autoplay,Navigation, Pagination, Scrollbar, EffectFade,EffectCoverflow]}
        spaceBetween={20}
        loop = {true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        className='prop_swiper'
      >
        <SwiperSlide className='slide'>1<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>2<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>3<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>4<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>5<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>6<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>6<PropertyCard /></SwiperSlide>
        <SwiperSlide className='slide'>6<PropertyCard /></SwiperSlide>

       </Swiper>

    </div>
  )
}