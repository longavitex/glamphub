import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import TextHeading from '../TextHeading/TextHeading'

const LocationTwo = () => {
    return (
        <>
            <div className="location-block lg:pt-20 md:pt-14 pt-10">
                <div className="container">
                    <TextHeading title='Locations on Glamping Hub' subTitle='Discover the Most Popular Places to Visit' />
                    <div className="list-location grid xl:grid-cols-3 md:grid-cols-2 lg:gap-[30px] gap-y-7 gap-4 md:mt-10 mt-6">
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/1.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                            <div className="name heading5">Namibia</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/2.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Tanzania</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/3.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Kenya</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/4.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Canada</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/5.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">United States</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/6.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Mexico</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/7.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">New Zealand</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/8.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Brazil</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale flex items-center bg-surface rounded-lg overflow-hidden">
                            <div className="left h-full w-1/2 pr-4">
                                <div className="bg-img w-full h-full overflow-hidden">
                                    <Image
                                        src={'/images/location/9.png'}
                                        width={3000}
                                        height={2000}
                                        alt='1.png'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className="right lg:pl-1.5 max-md:pl-1.5 lg:pr-6 md:pr-2 max-md:pr-3 py-6">
                                <div className="name heading5">Chile</div>
                                <div className="text-variant1 sm:mt-1">460 accommodations</div>
                                <div className="flex items-center gap-1 sm:mt-2 mt-1">
                                    <div className="text-button-sm">Explore Now</div>
                                    <Icon.CaretRight className='text-xs' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationTwo