'use client'

import React from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderTwo from '@/components/Slider/SliderTwo'
import LocationTwo from '@/components/Location/LocationTwo'
import CategoryTwo from '@/components/Category/CategoryTwo'
import RecommendOne from '@/components/Recommend/RecommendOne'
import tentData from '@/data/Tent.json'
import Footer from '@/components/Footer/Footer'

const HomeTwo = () => {
  return (
    <>
      <HeaderOne />
      <SliderTwo />
      <CategoryTwo />
      <RecommendOne data={tentData} />
      <LocationTwo />
      <div className="lg:pb-20 md:pb-14 pb-10"></div>
      <Footer />
    </>
  )
}

export default HomeTwo
