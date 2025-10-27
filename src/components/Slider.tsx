"use client";

import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import "./Slider.css"

const sliderData = [
    {
        imgSrc: "/j1.jpg",
        title: "Jewellery 1",
        description: "Description for Jewellery 1",
        categories: ["Necklace", "Gold"]
    },
    {
        imgSrc: "/j2.jpg",
        title: "Jewellery 2",
        description: "Description for Jewellery 2",
        categories: ["Bracelet", "Silver"]
    },
    {
        imgSrc: "/j3.jpg",
        title: "Jewellery 3",
        description: "Description for Jewellery 3",
        categories: ["Earrings", "Platinum"]
    },
    {
        imgSrc: "/j4.jpg",
        title: "Jewellery 4",
        description: "Description for Jewellery 4",
        categories: ["Ring", "Diamond"]
    },

];

const Slider = () => {
    const swiperWrappedRef = useRef<HTMLElement>(null);
    function adjustMargin () {

        const screenW = window.innerWidth;
        
        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft = 
            screenW <= 520
            ? "0px"
            : screenW <= 650
            ? "-50px"
            : screenW <= 800
            ? "-100px"
            : "-150px";
        }
    }

    useEffect(() => {
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => window.removeEventListener("resize", adjustMargin);
    }, []);

  return (
    <main>
    <div className='container'>
        <Swiper modules={[Pagination, Autoplay]}
        grabCursor
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        initialSlide={0}
        centeredSlides
        slidesPerView={1}
        speed={800}
        slideToClickedSlide
        pagination={{ clickable: true }}
        breakpoints={{
            320: {spaceBetween: 40},
            650: {spaceBetween: 30},
            1000: {spaceBetween: 20},
        }}
        onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
        }}
        >
            {sliderData.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.imgSrc} alt={item.title}/>
                    <div className='title'>
                        <h1>{item.title}</h1>
                    </div>
                    <div className='content'>
                        <div className='text-box'>
                            <p>{item.description}</p>
                        </div>

                        <div className='footer'>
                            <div className='category'>
                                {item.categories.map((category, index) => (
                                    <span key={index} className='' style={{"--i": index+1} as React.CSSProperties}>{category}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
    </Swiper>
    </div>
    </main>
  )
}

export default Slider