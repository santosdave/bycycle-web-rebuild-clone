import React from 'react'
import NewArrivalsSectionItem from './NewArrivalsSectionItem';

type Props = {}

export default function NewArrivalsSection({ }: Props) {
    const newArrivalBikes = [
        {
            name: "norco youth bicycle",
            image: "/images/b2.png",
        },
        {
            name: "  mt bromo n7",
            image: "/images/MTBROMO_N7_2022.png",
        },
        {
            name: "haibike xduro rx",
            image: "/images/b1.png",
        },
        {
            name: "polygon siskiu",
            image: "/images/531352.png",
        },
    ];
    return (
        <div className="section">
            <div className="section-title">
                <h3 className="second-title to-right show-on-scroll">new bikes</h3>
                <h3 className="main-title to-left show-on-scroll">new arrivals</h3>
                <div className="btn-wrapper">
                    <div className="to-top show-on-scroll">
                        <a href="#" className="btn ">
                            view all bikes
                        </a>
                    </div>
                </div>
            </div>
            <div className='section-content'>
                <div className='grid  grid-cols-1  lg:grid-col-3 xl:grid-cols-3 gap-5'>
                    <div className='col-center'>
                        <div className="to-right show-on-scroll">
                            <div className="product-card product-card-large">
                                <a href="#">
                                    <div className="product-card-img">
                                        <img src="/images/Polygon Cascade.png" alt="" />
                                    </div>
                                    <h3 className="product-name">polygon cascade</h3>
                                    <span className="product-price">KES 400,900.00</span>
                                </a>
                                <button className="btn">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='grid  grid-cols-1  lg:grid-col-3 xl:grid-cols-3 gap-5'>
                                {newArrivalBikes.map((bike,i)=>(
                                    <NewArrivalsSectionItem key={i} bike={bike}/>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}