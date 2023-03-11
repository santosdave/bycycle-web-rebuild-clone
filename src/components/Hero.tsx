import React from 'react'
import BikeSlideItem from './BikeSlideItem';
import {
   ArrowCircleLeftIcon,
   ArrowCircleRightIcon
 } from "@heroicons/react/solid";


type Props = {}

export default function Hero({ }: Props) {
    const bikeData = [
        {
            name: "polygon siskiu",
            image: "/images/MTBROMO_N7_2022.png",
        },
        {
            name: "mt bromo n7",
            image: "/images/6489548.png",
        },
        {
            name: "cascade mount",
            image: "/images/b1.png",
        },
    ];
    return (
        <div className='hero'>
            <div className='slide-container' id='hero-slide'>
                {bikeData.map((bike, i) => (
                    <BikeSlideItem key={i} bike={bike} />
                ))}
            </div>
            <div className="hero-txt">you ride</div>

            <ul className="slide-control">
                <li className="slide-prev" id='slide-prev'>
                   <ArrowCircleLeftIcon className='w-9 h-9 text-gray-200' />
                </li>
                <li className="slide-control-item active">01</li>
                <li className="slide-control-item">02</li>
                <li className="slide-control-item">03</li>
                <li className="slide-next" id='slide-next'>
                   <ArrowCircleRightIcon className='w-9 h-9 text-gray-200 '/>
                </li>
            </ul>
        </div>
    )
}