import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'phosphor-react'
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SliderOne = () => {
    // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

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
                <div className="container py-[176px] flex flex-col items-center justify-center">
                    <div className="content w-full">
                        <div className="heading basis-1/2">
                            <div className="heading2 text-white">Find yourself outside</div>
                            <div className="heading6 text-white text-center mt-3">Reserve beautiful private RV spots and campsites—found only on Hipcamp.</div>
                        </div>

                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                                <DatePicker
                                    label="Controlled picker"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider> */}

                        <div className="form-search md:mt-10 mt-6 w-full">
                            <form className='bg-white rounded-lg p-5 flex max-md:flex-wrap items-center justify-between gap-5 relative'>
                                <div className="select-block w-full">
                                    <Icon.MapPin className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="text" placeholder='Search destination' />
                                </div>
                                <div className="select-block w-full">
                                    <Icon.CalendarBlank className='icon text-xl left-5' />
                                    <input className='body2 w-full pl-12 pr-5 py-3 border border-outline rounded-lg' type="date" placeholder='Add Dates' />
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