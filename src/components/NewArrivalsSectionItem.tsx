import React from 'react'

type Props = {
    bike: any
}

export default function NewArrivalsSectionItem({ bike }: Props) {
    return (
        <div>
            <div className="to-top show-on-scroll">
                <div className="product-card">
                    <a href="#">
                        <div className="product-card-img">
                            <img src={bike.image} alt="" />
                        </div>
                        <h3 className="product-name">{bike.name}</h3>
                        <span className="product-price">$3,900.00</span>
                    </a>
                    <button className="btn">add to cart</button>
                </div>
            </div>
        </div>
    )
}