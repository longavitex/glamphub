import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import TextHeading from '../TextHeading/TextHeading'

const RecommendOne = () => {
    return (
        <>
            <div className="recommend-block lg:pt-20 md:pt-14 pt-10">
                <div className="container">
                    <TextHeading title='Discovery Luxury Camping Near You On Glamp Hub' subTitle='Explore Luxe Camping Near You with Glamp Hub' />
                    <div className="list-cate grid lg:grid-cols-4 md:grid-cols-3 min-[360px]:grid-cols-2 lg:gap-[30px] gap-4 gap-y-7 md:mt-10 mt-6">
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/1.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/2.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/3.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/4.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/5.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/6.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/7.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="item hover-scale">
                            <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/tent/8.png'}
                                    width={2000}
                                    height={2000}
                                    alt='1'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="infor mt-4">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1">
                                        <Icon.MapPin className='md:text-xl text-variant1' />
                                        <div className="caption1 text-variant1">100 km</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-button-sm">4.2</div>
                                        <Icon.Star className='text-yellow' weight='fill' />
                                    </div>
                                </div>
                                <div className="name text-title mt-1">Ahungalla, Southern Province, Sri Lanka</div>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-variant1">Nov. 12 - 15</div>
                                    <div className="flex items-end">
                                        <span className='text-button'>$342</span>
                                        <span className='caption1 text-variant1'>/night</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-block w-full text-center md:mt-10 mt-6">
                        <Link href={'/camp/topmap-grid'} className="button-main">View All Camp</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendOne