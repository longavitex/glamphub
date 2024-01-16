'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import * as Icon from "phosphor-react";
import HeaderOne from '@/components/Header/HeaderOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import TestimonialItem from '@/components/Testimonial/TestimonialItem';
import { TestimonialType } from '@/type/TestimonialType';
import testimonialData from '@/data/Testimonial.json'
import Footer from '@/components/Footer/Footer'

const Review = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb img='/images/breadcrumb/review.png' heading='Our Testimonials' subHeading='Stories That Speak. Echoes of Experiences at GlampHub.' />
            <div className='review lg:py-20 md:py-14 py-10'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-[30px]">
                        {testimonialData.map(item => (
                            <TestimonialItem data={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Review