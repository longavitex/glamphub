import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SliderOne = () => {
    const [openDate, setOpenDate] = useState(false)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const handleOpenDate = () => {
        setOpenDate(!openDate)
    }

    // Check if the click event occurs outside the popup.
    const handleClickOutsideLoginPopup: EventListener = (event) => {
        // Cast event.target to Element to use the closest method.
        const targetElement = event.target as Element;

        if (openDate && !targetElement.closest('.form-date-picker')) {
            setOpenDate(false)
        }
    }

    useEffect(() => {
        // Add a global click event to track clicks outside the popup.
        document.addEventListener('click', handleClickOutsideLoginPopup);

        // Cleanup to avoid memory leaks.
        return () => {
            document.removeEventListener('click', handleClickOutsideLoginPopup);
        };
    }, [openDate])

    return (
        <>
            <div className="slider-block style-one relative h-[620px]">
                <div className="bg-img absolute top-0 left-0 w-full h-full">
                    <Image
                        src={'/images/slider/slider-home1.png'}
                        width={4000}
                        height={3000}
                        alt='slider'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container py-[176px]">
                    <div className="content w-full relative">
                        <div className="heading flex-col items-center justify-center">
                            <div className="heading2 text-white text-center">Find yourself outside</div>
                            <div className="heading6 text-white text-center mt-3">Reserve beautiful private RV spots and campsites—found <br className='max-sm:hidden' />only on Hipcamp.</div>
                        </div>

                        <div className="form-search md:mt-10 mt-6 w-full">
                            <form className='bg-white rounded-lg p-5 flex max-md:flex-wrap items-center justify-between gap-5 relative'>
                                <div className="select-block w-full">
                                    <Icon.MapPin className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Search destination' />
                                </div>
                                <div className="relative w-full">
                                    <div className='select-block w-full' onClick={handleOpenDate}>
                                        <Icon.CalendarBlank className='icon text-xl left-5' />
                                        <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Add Dates' />
                                    </div>
                                    {
                                        openDate && (
                                            <DateRangePicker
                                                className='form-date-picker'
                                                onChange={item => setState([item.selection])}
                                                // showSelectionPreview={true}
                                                moveRangeOnFirstSelection={false}
                                                months={2}
                                                ranges={state}
                                                direction="horizontal"
                                            />
                                        )
                                    }
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
                </div>




            </div>
        </>
    )
}

export default SliderOne