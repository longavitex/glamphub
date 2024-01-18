'use client'

import React from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderTwo from '@/components/Slider/SliderTwo'
import LocationTwo from '@/components/Location/LocationTwo'
import CategoryTwo from '@/components/Category/CategoryTwo'
import RecommendOne from '@/components/Recommend/RecommendOne'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HeaderOne />
      <SliderTwo />
      <CategoryTwo />
      <RecommendOne />
      <LocationTwo />
      <div className="lg:pb-20 md:pb-14 pb-10"></div>
      <Footer />
    </>
  )
}

export default Home
