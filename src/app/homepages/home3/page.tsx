'use client'

import React, { useState } from 'react'
import HeaderThree from '@/components/Header/HeaderThree'
import tentData from '@/data/Tent.json'
import Footer from '@/components/Footer/Footer'
import * as Icon from 'phosphor-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import TentItem from '@/components/Tent/TentItem'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { TentType } from '@/type/TentType';


const HomeThree = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = { lat: 0, lng: 0 };
  const [activeCategory, setActiveCategory] = useState<string>('cabin')

  const handleCategory = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <>
      <HeaderThree />
      <div className="category-block overflow-hidden px-10 border-b border-outline">
        <div className="list-cate style-navigation style-three">
          <div className="custom-swiper-button-prev">
            <Icon.CaretLeft className='text-xl' />
          </div>
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
              1180: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1290: {
                slidesPerView: 12,
                spaceBetween: 0,
              },
            }}
            className='h-full'
          >
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'cabin' ? 'active' : ''}`}
                onClick={() => handleCategory('cabin')}
              >
                <span className='icon-cabin text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Cabin</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'tented cabins' ? 'active' : ''}`}
                onClick={() => handleCategory('tented cabins')}
              >
                <span className='icon-tented-cabin text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Tented Cabins</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'safari tents' ? 'active' : ''}`}
                onClick={() => handleCategory('safari tents')}
              >
                <span className='icon-safari-tent text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Safari Tents</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'cottages' ? 'active' : ''}`}
                onClick={() => handleCategory('cottages')}
              >
                <span className='icon-cottages text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Cottages</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'tiny houses' ? 'active' : ''}`}
                onClick={() => handleCategory('tiny houses')}
              >
                <span className='icon-tiny-house text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Tiny Houses</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'caravans' ? 'active' : ''}`}
                onClick={() => handleCategory('caravans')}
              >
                <span className='icon-cravan text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Caravans</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'domes' ? 'active' : ''}`}
                onClick={() => handleCategory('domes')}
              >
                <span className='icon-domes text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Domes</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'log cabins' ? 'active' : ''}`}
                onClick={() => handleCategory('log cabins')}
              >
                <span className='icon-log-cabin text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Log Cabins</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'yurts' ? 'active' : ''}`}
                onClick={() => handleCategory('yurts')}
              >
                <span className='icon-yurt text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Yurts</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'bell tents' ? 'active' : ''}`}
                onClick={() => handleCategory('bell tents')}
              >
                <span className='icon-bell-tent text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Bell Tents</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'tree houses' ? 'active' : ''}`}
                onClick={() => handleCategory('tree houses')}
              >
                <span className='icon-cottages text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Tree Houses</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item flex flex-col items-center rounded-xl duration-300 cursor-pointer ${activeCategory === 'containers' ? 'active' : ''}`}
                onClick={() => handleCategory('containers')}
              >
                <span className='icon-container text-4xl text-variant1 duration-300'></span>
                <div className="text-title text-variant1 whitespace-nowrap duration-300 mt-2">Containers</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-swiper-button-next">
            <Icon.CaretRight className='text-xl' />
          </div>
        </div>
      </div>
      <div className="list-tent-block flex h-[720px] overflow-hidden">
        <div className="left basis-7/12 px-10 py-6 max-h-[720px] overflow-x-auto">
          <div className="heading4">Discovery Luxury Camping Near You</div>
          <div className="list-tent grid grid-cols-3 gap-[30px] mt-5">
            {tentData.map(item => (
              <TentItem key={item.id} data={item} type='default' />
            ))}
          </div>
        </div>
        <div className="right basis-5/12 h-full">
          {/* <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5146725494856!2d81.0526394758883!3d6.8287206931691555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f60b1db5c65%3A0x443a9d8835153ea7!2sBoody&#39;s%20Camping%20Site!5e0!3m2!1svi!2s!4v1705656455097!5m2!1svi!2s" loading="lazy"></iframe> */}
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
              {tentData.map((hotel) => (
                <Marker
                  key={hotel.id}
                  position={hotel.locationMap}
                  title={hotel.name}
                  label={hotel.name[0]} // Use the first letter of the hotel name as the label
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeThree
