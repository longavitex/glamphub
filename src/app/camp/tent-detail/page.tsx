'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderTwo from '@/components/Slider/SliderTwo'
import Footer from '@/components/Footer/Footer'
import tentData from '@/data/Tent.json'
import { TentType } from '@/type/TentType'
import TentItem from '@/components/Tent/TentItem'
import { useSearchParams } from 'next/navigation'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TentDetail = () => {
    const params = useSearchParams()
    let tentId = params.get('id')
    if (tentId === null || undefined) {
        tentId = '1'
    }

    const tentMain = tentData.find(tent => tent.id === tentId) as TentType

    const settings = {
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        useTransform: false,
        centerMode: true,
        centerPadding: '300px',
    };

    return (
        <>
            <div className='overflow-hidden'>
                <HeaderOne />
                <div className="list-img-detail">
                    <Slider {...settings} className="h-full">
                        {tentMain.listImage.map((img, index) => (
                            <div className="bg-img w-full aspect-[4/3]" key={index}>
                                <Image
                                    src={img}
                                    width={3000}
                                    height={3000}
                                    alt={img}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="content-detail lg:py-20 md:py-14 py-10">
                    <div className="container">
                        <div className="flex justify-between">
                            <div className="content w-2/3 pr-[15px]">
                                <div className="flex items-center justify-between">
                                    <div className="heading3">{tentMain.name}</div>
                                    <div className="share w-12 h-12 rounded-full bg-white border border-outline flex items-center justify-center cursor-pointer duration-300 hover:bg-black hover:text-white">
                                        <Icon.ShareNetwork className='text-2xl' />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <Icon.MapPin className='text-variant1' />
                                        <span className='text-variant1'>{tentMain.location}</span>
                                    </div>
                                    <Link href={'https://www.google.com/maps'} target='_blank' className='text-primary underline'>Show on map</Link>
                                </div>
                            </div>
                            <div className="sidebar w-1/3 pl-[45px]"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default TentDetail