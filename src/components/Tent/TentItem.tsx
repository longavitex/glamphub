import React from 'react'
import Image from 'next/image'
import * as Icon from 'phosphor-react'
import { TentType } from '@/type/TentType'

interface Props {
    data: TentType;
    type: string
}

const TentItem: React.FC<Props> = ({ data, type }) => {
    return (
        <>
            {type === "default" ? (
                <div className="tent-item hover-scale">
                    <div className="bg-img w-full aspect-square rounded-xl overflow-hidden">
                        <Image
                            src={data.image}
                            width={2000}
                            height={2000}
                            alt={data.image}
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
                                <div className="text-button-sm">{data.rate}</div>
                                <Icon.Star className='text-yellow' weight='fill' />
                            </div>
                        </div>
                        <div className="name text-title mt-1">{data.name}</div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-variant1">Nov. 12 - 15</div>
                            <div className="flex items-end">
                                <span className='text-button'>${data.price}</span>
                                <span className='caption1 text-variant1'>/night</span></div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default TentItem