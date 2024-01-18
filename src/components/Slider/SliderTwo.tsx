import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'

const SliderOne = () => {

    return (
        <>
            <div className="slider-block style-one relative h-[508px] pb-12">
                <div className="bg-img w-full h-full">
                    <Image
                        src={'/images/slider/slider-home1.png'}
                        width={4000}
                        height={3000}
                        alt='slider'
                        className='w-full h-full object-cover'
                    />
                </div>
                {/* <div className="container relative -mt-[90px]">
                    <div className="content">
                        <div className="form-search md:mt-10 mt-6 w-full">
                            <form className='bg-white rounded-lg p-5 flex max-md:flex-wrap items-center justify-between gap-5 relative box-shadow'>
                                <div className="select-block w-full">
                                    <Icon.MapPin className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Search destination' />
                                </div>
                                <div className="select-block w-full">
                                    <Icon.CalendarBlank className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="date" placeholder='Add Dates' />
                                </div>
                                <div className="select-block w-full">
                                    <Icon.Users className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Add Guest' />
                                </div>
                                <div className="button-block flex-shrink-0 max-sm:w-full">
                                    <button className='button-main max-sm:w-full'>Searching</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default SliderOne