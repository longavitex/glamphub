'use client'

import Image from 'next/image'
import React from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import BecomeHost from '@/components/BecomeHost/BecomeHost'
import Amenities from '@/components/Amenities/Amenities'
import Testimonial from '@/components/Testimonial/Testimonial'
import dataTestimonial from '@/data/Testimonial.json'
import News from '@/components/News/News'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HeaderOne />
      <BecomeHost />
      <Amenities />
      <Testimonial data={dataTestimonial} />
      <News />
      <Footer />
    </>
  )
}

export default Home
