'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import * as Icon from "phosphor-react";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface GuestType {
    adult: number;
    children: number;
}

const HeaderThree = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        // Add event scroll when component mounted
        window.addEventListener('scroll', handleScroll);

        // Remove event scroll when component mounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const [openDate, setOpenDate] = useState(false)
    const [openGuest, setOpenGuest] = useState(false)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const [guest, setGuest] = useState<GuestType>(
        {
            adult: 0,
            children: 0
        }
    );

    const handleOpenDate = () => {
        setOpenDate(!openDate)
        setOpenGuest(false)
    }

    const handleOpenGuest = () => {
        setOpenGuest(!openGuest)
        setOpenDate(false)
    }

    // Check if the click event occurs outside the popup.
    const handleClickOutsideDatePopup: EventListener = (event) => {
        // Cast event.target to Element to use the closest method.
        const targetElement = event.target as Element;

        if (openDate && !targetElement.closest('.form-date-picker')) {
            setOpenDate(false)
        }
    }

    // Check if the click event occurs outside the popup.
    const handleClickOutsideGuestPopup: EventListener = (event) => {
        // Cast event.target to Element to use the closest method.
        const targetElement = event.target as Element;

        if (openGuest && !targetElement.closest('.sub-menu-guest')) {
            setOpenGuest(false)
        }
    }

    useEffect(() => {
        // Add a global click event to track clicks outside the popup.
        document.addEventListener('click', handleClickOutsideDatePopup);
        document.addEventListener('click', handleClickOutsideGuestPopup);

        // Cleanup to avoid memory leaks.
        return () => {
            document.removeEventListener('click', handleClickOutsideDatePopup);
            document.removeEventListener('click', handleClickOutsideGuestPopup);
        };
    }, [openDate, openGuest])

    // Increase number
    const increaseGuest = (type: keyof GuestType) => {
        setGuest((prevGuest) => ({
            ...prevGuest,
            [type]: prevGuest[type] + 1
        }));
    };

    // Decrease number
    const decreaseGuest = (type: keyof GuestType) => {
        if (guest[type] > 0) {
            setGuest((prevGuest) => ({
                ...prevGuest,
                [type]: prevGuest[type] - 1
            }));
        }
    };

    return (
        <>
            <div id="header" className='header'>
                <div className={`header-main h-20 w-full bg-white min-[1322px]:px-10 px-4 flex items-center justify-between ${fixedHeader ? 'fixed box-shadow' : ''}`}>
                    <Link href={'/'} className="logo">
                        <Image
                            src={'/images/logo.png'}
                            width={2000}
                            height={1000}
                            alt='logo'
                            className='sm:w-[220px] w-[160px]'
                        />
                    </Link>
                    <div className="menu-main style-three relative flex items-center justify-center gap-5 max-xl:hidden">
                        <div className="item flex items-center gap-2 py-3 px-5 border border-outline rounded-lg">
                            <Icon.MapPin className='text-xl' />
                            <div className="body2">Sri Lanka</div>
                        </div>
                        <div className="item py-3 px-5 border border-outline rounded-lg cursor-pointer">
                            <div className='flex items-center gap-2' onClick={handleOpenDate}>
                                <Icon.MapPin className='text-xl' />
                                <div className="body2">{state[0].startDate.toLocaleDateString()} - {state[0].endDate.toLocaleDateString()}</div>
                            </div>
                            <DateRangePicker
                                className={`form-date-picker box-shadow ${openDate ? 'open' : ''}`}
                                onChange={item => setState([item.selection] as any)}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                        </div>
                        <div className="item py-3 px-5 border border-outline rounded-lg">
                            <div className='flex items-center gap-2 cursor-pointer' onClick={handleOpenGuest}>
                                <Icon.MapPin className='text-xl' />
                                <div className="body2">
                                    {/* {guest.adult === 0 && guest.children === 0 ? '0 Guest' : 
                                    `${guest.adult > 0 ? (guest.adult === 1 ? (guest.adult + ' adult') : (guest.adult + ' adults')) : ('')}${guest.children > 0 ? (guest.children === 1 ? (', ' + guest.children + ' children') : (', ' + guest.children + ' childrens')) : ('')}`
                                    } */}
                                    {`${guest.adult + guest.children} guests`}
                                </div>
                            </div>
                            <div className={`sub-menu-guest bg-white rounded-b-xl overflow-hidden p-5 absolute top-full mt-px left-0 w-full box-shadow ${openGuest ? 'open' : ''}`}>
                                <div className="item flex items-center justify-between pb-4 border-b border-outline">
                                    <div className="left">
                                        <p>Adults</p>
                                        <div className="caption1 text-variant1">(12 Years+)</div>
                                    </div>
                                    <div className="right flex items-center gap-5">
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.adult === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                            onClick={() => decreaseGuest('adult')}
                                        >
                                            <Icon.Minus weight='bold' />
                                        </div>
                                        <div className="text-title">{guest.adult}</div>
                                        <div
                                            className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                            onClick={() => increaseGuest('adult')}
                                        >
                                            <Icon.Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div className="item flex items-center justify-between pb-4 pt-4 border-b border-outline">
                                    <div className="left">
                                        <p>Children</p>
                                        <div className="caption1 text-variant1">(2-12 Years)</div>
                                    </div>
                                    <div className="right flex items-center gap-5">
                                        <div
                                            className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.children === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                            onClick={() => decreaseGuest('children')}
                                        >
                                            <Icon.Minus weight='bold' />
                                        </div>
                                        <div className="text-title">{guest.children}</div>
                                        <div
                                            className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                            onClick={() => increaseGuest('children')}
                                        >
                                            <Icon.Plus weight='bold' />
                                        </div>
                                    </div>
                                </div>
                                <div className="button-main w-full text-center">Done</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="button-main">Search</div>
                        </div>
                    </div>
                    <div className="right flex items-center gap-3">
                        <div className="weather flex items-center gap-1 max-sm:hidden">
                            <Icon.CloudSun className='text-xl' />
                            <div className="text-button">18°C</div>
                        </div>
                        <div className='bg-outline w-px h-4 max-sm:hidden'></div>
                        <Link href={'/login'} className="text-button max-sm:hidden">Sign In</Link>
                        <div className='bg-outline w-px h-4 max-sm:hidden'></div>
                        <div className="select-block pr-5 max-sm:hidden">
                            <select name="language" id="language" className='text-button'>
                                <option value="EN">EN</option>
                                <option value="FR">FR</option>
                                <option value="GE">GE</option>
                            </select>
                            <Icon.CaretDown className='icon text-base right-0' />
                        </div>
                        <div className='bg-outline w-px h-4 max-sm:hidden'></div>
                        <div className="menu-mobile-icon flex items-center">
                            <Icon.List className='sm:text-xl text-2xl text-black' weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderThree