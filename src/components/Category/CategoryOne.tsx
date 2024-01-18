import React from 'react'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import TextHeading from '../TextHeading/TextHeading'

const CategoryOne = () => {
    return (
        <>
            <div className="category-block lg:pt-20 md:pt-14 pt-10">
                <div className="container">
                    <TextHeading title='Try Searching For' subTitle='Explore Distinctive Selections with Our Thoughtfully Curated Categories' />
                    <div className="list-cate grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-cabin text-4xl'></span>
                            <div className="text-title mt-2">Cabin</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-tented-cabin text-4xl'></span>
                            <div className="text-title mt-2">Tented Cabins</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-safari-tent text-4xl'></span>
                            <div className="text-title mt-2">Safari Tents</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-cottages text-4xl'></span>
                            <div className="text-title mt-2">Cottages</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-tiny-house text-4xl'></span>
                            <div className="text-title mt-2">Tiny Houses</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-cravan text-4xl'></span>
                            <div className="text-title mt-2">Caravans</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-domes text-4xl'></span>
                            <div className="text-title mt-2">Domes</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-log-cabin text-4xl'></span>
                            <div className="text-title mt-2">Log Cabins</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-yurt text-4xl'></span>
                            <div className="text-title mt-2">Yurts</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-bell-tent text-4xl'></span>
                            <div className="text-title mt-2">Bell Tents</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-container text-4xl'></span>
                            <div className="text-title mt-2">Containers</div>
                        </div>
                        <div className="item bg-surface py-[22px] flex flex-col items-center rounded-xl duration-300 cursor-pointer hover:bg-black hover:text-white">
                            <span className='icon-cottages text-4xl'></span>
                            <div className="text-title mt-2">Tree Houses</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryOne