'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import * as Icon from "phosphor-react";

const HeaderTwo = () => {
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
                    <div className="menu-main flex items-center justify-center gap-5">
                        <div className="item flex items-center gap-2 py-3 px-5 border border-outline rounded-lg">
                            <Icon.MapPin className='text-xl' />
                            <div className="body2">Sri Lanka</div>
                        </div>
                        <div className="item flex items-center gap-2 py-3 px-5 border border-outline rounded-lg">
                            <Icon.MapPin className='text-xl' />
                            <div className="body2">Nov. 12 - 15</div>
                        </div>
                        <div className="item flex items-center gap-2 py-3 px-5 border border-outline rounded-lg">
                            <Icon.MapPin className='text-xl' />
                            <div className="body2">3 Guests</div>
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

export default HeaderTwo