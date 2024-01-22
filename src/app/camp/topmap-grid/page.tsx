'use client'

import React, { useState, useEffect } from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderTwo from '@/components/Slider/SliderTwo'
import Footer from '@/components/Footer/Footer'
import tentData from '@/data/Tent.json'
import { TentType } from '@/type/TentType'
import TentItem from '@/components/Tent/TentItem'
import * as Icon from 'phosphor-react'
import HandlePagination from '@/components/Other/HandlePagination'

const TopMapGrid = () => {
  const [showOnlySale, setShowOnlySale] = useState(false)
  const [sortOption, setSortOption] = useState('');
  // const [type, setType] = useState<string | null | undefined>(dataType)
  const [size, setSize] = useState<string | null>()
  const [color, setColor] = useState<string | null>()
  const [brand, setBrand] = useState<string | null>()
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });
  const [currentPage, setCurrentPage] = useState(0);
  const [tentPerPage, setTentPerPage] = useState<number>(8);
  const tentsPerPage = tentPerPage;
  const offset = currentPage * tentsPerPage;

  const handleTentPerPage = (option: number) => {
    setTentPerPage(option);
    setCurrentPage(0);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(0);
  };

  // const handleType = (type: string | null) => {
  //   setType((prevType) => (prevType === type ? null : type))
  //   setCurrentPage(0);
  // }

  const handleSize = (size: string) => {
    setSize((prevSize) => (prevSize === size ? null : size))
    setCurrentPage(0);
  }

  const handlePriceChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setPriceRange({ min: values[0], max: values[1] });
      setCurrentPage(0);
    }
  };

  const handleColor = (color: string) => {
    setColor((prevColor) => (prevColor === color ? null : color))
    setCurrentPage(0);
  }

  const handleBrand = (brand: string) => {
    setBrand((prevBrand) => (prevBrand === brand ? null : brand));
    setCurrentPage(0);
  }


  // Filter tent
  let filteredData = tentData.filter(tent => {
    let isShowOnlySaleMatched = true;

    // let isDatagenderMatched = true;

    // let isDataCategoryMatched = true;
    // if (category) {
    //   isDataCategoryMatched = tent.category === category
    // }

    // let isDataTypeMatched = true;
    // if (dataType) {
    //   isDataTypeMatched = tent.type === dataType
    // }

    // let isTypeMatched = true;
    // if (type) {
    //   dataType = type
    //   isTypeMatched = tent.type === type;
    // }

    // let isSizeMatched = true;
    // if (size) {
    //   isSizeMatched = tent.sizes.includes(size)
    // }

    // let isPriceRangeMatched = true;
    // if (priceRange.min !== 0 || priceRange.max !== 100) {
    //   isPriceRangeMatched = tent.price >= priceRange.min && tent.price <= priceRange.max;
    // }

    // let isColorMatched = true;
    // if (color) {
    //   isColorMatched = tent.variation.some(item => item.color === color)
    // }

    // let isBrandMatched = true;
    // if (brand) {
    //   isBrandMatched = tent.brand === brand;
    // }

    return isShowOnlySaleMatched
  })


  // Create a copy array filtered to sort
  let sortedData = [...filteredData];

  // if (sortOption === 'soldQuantityHighToLow') {
  //   filteredData = sortedData.sort((a, b) => b.sold - a.sold)
  // }

  // if (sortOption === 'discountHighToLow') {
  //   filteredData = sortedData
  //     .sort((a, b) => (
  //       (Math.floor(100 - ((b.price / b.originPrice) * 100))) - (Math.floor(100 - ((a.price / a.originPrice) * 100)))
  //     ))
  // }

  // if (sortOption === 'priceHighToLow') {
  //   filteredData = sortedData.sort((a, b) => b.price - a.price)
  // }

  // if (sortOption === 'priceLowToHigh') {
  //   filteredData = sortedData.sort((a, b) => a.price - b.price)
  // }

  // const totalTents = filteredData.length
  // const selectedType = type
  // const selectedSize = size
  // const selectedColor = color
  // const selectedBrand = brand


  // if (filteredData.length === 0) {
  //   filteredData = [{
  //     id: 'no-data',
  //     category: 'no-data',
  //     type: 'no-data',
  //     name: 'no-data',
  //     gender: 'no-data',
  //     new: false,
  //     sale: false,
  //     rate: 0,
  //     price: 0,
  //     originPrice: 0,
  //     brand: 'no-data',
  //     sold: 0,
  //     quantity: 0,
  //     quantityPurchase: 0,
  //     sizes: [],
  //     variation: [],
  //     thumbImage: [],
  //     images: [],
  //     description: 'no-data',
  //     action: 'no-data',
  //     slug: 'no-data'
  //   }];
  // }


  // Find page number base on filteredData
  const pageCount = Math.ceil(filteredData.length / tentsPerPage);

  // If page number 0, set current page = 0
  if (pageCount === 0) {
    setCurrentPage(0);
  }

  // Get tent data for current page
  let currentTents: TentType[];

  if (filteredData.length > 0) {
    currentTents = filteredData.slice(offset, offset + tentsPerPage);
  } else {
    currentTents = []
  }

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };


  return (
    <>
      <HeaderOne />
      <SliderTwo hotels={tentData} />
      <div className="lg:py-20 md:py-14 max-lg:mt-10 max-md:mt-40 py-10">
        <div className="container">
          <div className="heading flex items-center justify-between gap-6 flex-wrap">
            <div className="left flex items-center sm:gap-5 gap-3 max-sm:flex-wrap">
              <div className="flex items-center gap-3">
                <div className="show-filter-btn flex items-center gap-2 sm:px-4 px-3 py-2.5 border border-outline rounded-lg cursor-pointer duration-300 hover:bg-black hover:text-white">
                  <Icon.SlidersHorizontal className='text-xl' />
                  <p>Show Filters</p>
                </div>
                <Icon.SquaresFour className='text-3xl cursor-pointer' />
                <Icon.Rows className='text-3xl cursor-pointer text-variant2 duration-300 hover:text-black' />
              </div>
              <div className="line w-px h-7 bg-outline max-[400px]:hidden"></div>
              <div className="body2">Showing 1-{tentPerPage} of {currentTents.length}</div>
            </div>
            <div className="right flex items-center gap-3">
              <div className="select-block relative">
                <select
                  id="select-filter"
                  name="select-filter"
                  className='py-2.5 pl-4 md:pr-14 pr-10 rounded-lg border border-line'
                  onChange={(e) => { handleTentPerPage(Number(e.target.value)) }}
                >
                  <option value="8">8 Per Page</option>
                  <option value="12">12 Per Page</option>
                  <option value="16">16 Per Page</option>
                </select>
                <Icon.CaretDown className='text-xl absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
              </div>
              <div className="select-block relative">
                <select
                  id="select-filter"
                  name="select-filter"
                  className='py-2.5 pl-4 md:pr-14 pr-10 rounded-lg border border-line'
                  onChange={(e) => { handleSortChange(e.target.value) }}
                  defaultValue={'Sorting'}
                >
                  <option value="Sorting" disabled>Sort by (Defaut)</option>
                  <option value="starHighToLow">Best Review</option>
                  <option value="priceHighToLow">Price High To Low</option>
                  <option value="priceLowToHigh">Price Low To High</option>
                </select>
                <Icon.CaretDown className='text-xl absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
              </div>
            </div>
          </div>

          <div className="list-tent md:mt-10 mt-6 grid lg:grid-cols-4 md:grid-cols-3 min-[360px]:grid-cols-2 lg:gap-[30px] gap-4 gap-y-7">
            {currentTents.map((item) => (
              item.id === 'no-data' ? (
                <div key={item.id} className="no-data-product">No tents match the selected criteria.</div>
              ) : (
                <TentItem key={item.id} data={item} type='default' />
              )
            ))}
          </div>

          {pageCount > 1 && (
            <div className="list-pagination flex items-center md:mt-10 mt-7">
              <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TopMapGrid
