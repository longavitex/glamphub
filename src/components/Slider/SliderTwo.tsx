import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { TentType } from '@/type/TentType';

interface HotelMapProps {
    hotels: Array<TentType>;
}

interface GuestType {
    adult: number;
    children: number;
    infant: number;
    pet: number;
}

const SliderTwo: React.FC<HotelMapProps> = ({ hotels }) => {
    const mapStyles = {
        height: '100%',
        width: '100%',
    };

    const defaultCenter = { lat: 0, lng: 0 };
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
            children: 0,
            infant: 0,
            pet: 0
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
            <div className="slider-block style-one relative h-[508px] pb-12">
                <div className="bg-img w-full h-full">
                    {/* <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5146725494856!2d81.0526394758883!3d6.8287206931691555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f60b1db5c65%3A0x443a9d8835153ea7!2sBoody&#39;s%20Camping%20Site!5e0!3m2!1svi!2s!4v1705656455097!5m2!1svi!2s" loading="lazy"></iframe> */}
                    <LoadScript googleMapsApiKey="AIzaSyAlqPjtwBIJDycOHLBIu7GV9SnkOATwbDs">
                        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
                            {hotels.map((hotel) => (
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
                <div className="container relative lg:-mt-[90px] -mt-[124px]">
                    <div className="content">
                        <div className="form-search md:mt-10 mt-6 w-full">
                            <form className='bg-white rounded-lg p-5 flex max-lg:flex-wrap items-center justify-between gap-5 relative box-shadow'>
                                <div className="select-block lg:w-full md:w-[48%] w-full">
                                    <Icon.MapPin className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Search destination' />
                                </div>
                                <div className="relative lg:w-full md:w-[48%] w-full">
                                    <div className='select-block w-full' onClick={handleOpenDate}>
                                        <Icon.CalendarBlank className='icon text-xl left-5' />
                                        {/* <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Add Dates' /> */}
                                        <input
                                            className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg'
                                            type="text"
                                            placeholder='Add Dates'
                                            value={`${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`}
                                            readOnly // prevent user edit value
                                        />
                                    </div>
                                    <DateRangePicker
                                        className={`form-date-picker box-shadow md:border-t border-outline ${openDate ? 'open' : ''}`}
                                        onChange={item => setState([item.selection] as any)}
                                        // showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={state}
                                        direction="horizontal"
                                    />
                                </div>
                                <div className="relative lg:w-full md:w-[48%] w-full">
                                    <div className="select-block w-full" onClick={handleOpenGuest}>
                                        <Icon.Users className='icon text-xl left-5' />
                                        <input
                                            className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg'
                                            type="text"
                                            value={`${guest.adult > 0 ? (guest.adult === 1 ? (guest.adult + ' adult') : (guest.adult + ' adults')) : ('')}${guest.children > 0 ? (guest.children === 1 ? (', ' + guest.children + ' children') : (', ' + guest.children + ' childrens')) : ('')}${guest.infant > 0 ? (guest.infant === 1 ? (', ' + guest.infant + ' infant') : (', ' + guest.infant + ' infants')) : ('')}${guest.pet > 0 ? (guest.pet === 1 ? (', ' + guest.pet + ' pet') : (', ' + guest.pet + ' pets')) : ('')}`}
                                            placeholder='Add Guest'
                                        />
                                    </div>
                                    <div className={`sub-menu-guest bg-white rounded-b-xl overflow-hidden p-5 absolute top-full md:mt-5 mt-3 left-0 w-full box-shadow md:border-t border-outline ${openGuest ? 'open' : ''}`}>
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
                                        <div className="item flex items-center justify-between pb-4 pt-4 border-b border-outline">
                                            <div className="left">
                                                <p>Infants</p>
                                                <div className="caption1 text-variant1">(0-2 Years)</div>
                                            </div>
                                            <div className="right flex items-center gap-5">
                                                <div
                                                    className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.infant === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                                    onClick={() => decreaseGuest('infant')}
                                                >
                                                    <Icon.Minus weight='bold' />
                                                </div>
                                                <div className="text-title">{guest.infant}</div>
                                                <div
                                                    className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                                    onClick={() => increaseGuest('infant')}
                                                >
                                                    <Icon.Plus weight='bold' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item flex items-center justify-between pb-4 pt-4">
                                            <div className="left">
                                                <p>Pets</p>
                                            </div>
                                            <div className="right flex items-center gap-5">
                                                <div
                                                    className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.pet === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                                    onClick={() => decreaseGuest('pet')}
                                                >
                                                    <Icon.Minus weight='bold' />
                                                </div>
                                                <div className="text-title">{guest.pet}</div>
                                                <div
                                                    className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                                    onClick={() => increaseGuest('pet')}
                                                >
                                                    <Icon.Plus weight='bold' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-main w-full text-center">Done</div>
                                    </div>
                                </div>
                                <div className="button-block flex-shrink-0 max-lg:w-[48%] max-md:w-full">
                                    <button className='button-main max-lg:w-full'>Searching</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderTwo