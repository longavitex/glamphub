'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import * as Icon from "phosphor-react";

const HeaderOne = () => {
    const pathname = usePathname()

    return (
        <>
            <div id="header" className='header'>
                <div className="header-main h-20 w-full bg-white min-[1322px]:px-10 px-4 flex items-center justify-between">
                    <Link href={'/'} className="logo">
                        <Image
                            src={'/images/logo.png'}
                            width={2000}
                            height={1000}
                            alt='logo'
                            className='sm:w-[220px] w-[160px]'
                        />
                    </Link>
                    <div className="menu-main h-full max-lg:hidden">
                        <ul className='flex items-center xl:gap-[50px] gap-10 h-full'>
                            <li className='h-full relative'>
                                <Link
                                    href="##"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/' || pathname.includes('/homepages/') ? 'active' : ''}`}
                                >
                                    Home
                                </Link>
                                <div className="sub-menu absolute bg-white">
                                    <ul>
                                        <li>
                                            <Link href="/" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/' ? 'active' : ''}`}>
                                                Homepage 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home2" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                                                Homepage 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home3" className={`link text-button text-variant1 py-4 pl-6 pr-16 duration-300 ${pathname === '/homepages/home3' ? 'active' : ''}`}>
                                                Homepage 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='h-full relative'>
                                <Link
                                    href="##"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname.includes('/camps/') ? 'active' : ''}`}
                                >
                                    Camps
                                </Link>
                                <div className="sub-menu absolute bg-white">
                                    <ul>
                                        <li>
                                            <Link href="/" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/' ? 'active' : ''}`}>
                                                Find Topmap Grid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home2" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                                                Find Topmap List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home3" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home3' ? 'active' : ''}`}>
                                                Filters Dropdown
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/' ? 'active' : ''}`}>
                                                Filters Scrolls
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home2" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                                                Find Topmap Sidebar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home3" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home3' ? 'active' : ''}`}>
                                                Find Halfmap List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home2" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                                                Find Halfmap List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/homepages/home3" className={`link text-button text-variant1 py-4 pl-6 pr-16 duration-300 ${pathname === '/homepages/home3' ? 'active' : ''}`}>
                                                Tent Details
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='h-full relative'>
                                <Link
                                    href="/about"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/about' ? 'active' : ''}`}
                                >
                                    About us
                                </Link>
                            </li>
                            <li className='h-full relative'>
                                <Link
                                    href="##"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname.includes('/blog/') ? 'active' : ''}`}
                                >
                                    Blog
                                </Link>
                                <div className="sub-menu absolute bg-white">
                                    <ul>
                                        <li>
                                            <Link href="/blog/default" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                Blog Default
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/grid" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/blog/grid' ? 'active' : ''}`}>
                                                Blog Grid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/detail" className={`link text-button text-variant1 py-4 pl-6 pr-16 duration-300 ${pathname === '/blog/detail' ? 'active' : ''}`}>
                                                Blog Detail
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='h-full relative'>
                                <Link
                                    href="##"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname.includes('/pages/') ? 'active' : ''}`}
                                >
                                    Pages
                                </Link>
                                <div className="sub-menu absolute bg-white">
                                    <ul>
                                        <li>
                                            <Link href="/pages/contact" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/faqs" className={`link text-button text-variant1 py-4 pl-6 pr-16 border-b border-outline duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                FAQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/review" className={`link text-button text-variant1 py-4 pl-6 pr-16 duration-300 ${pathname === '/pages/review' ? 'active' : ''}`}>
                                                Review
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
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
                            <Icon.CaretDown className='text-base arrow-down right-0' />
                        </div>
                        <div className="menu-mobile-icon lg:hidden flex items-center ml-4">
                            <Icon.List className='sm:text-xl text-2xl text-black' weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderOne