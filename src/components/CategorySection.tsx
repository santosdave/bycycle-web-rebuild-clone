import React from 'react'
import CategorySectionItem from './CategorySectionItem';

type Props = {}

export default function CategorySection({ }: Props) {
    const categoryData = [
        {
            category: "Urban",
            image: "/images/alvan-nee-EHILKZNmTuA-unsplash.jpg",
        },
        {
            category: "mountain",
            image: "/images/eberhard-grossgasteiger-8lDkmXnKo7s-unsplash.jpg",
        },
        {
            category: "Road",
            image: "/images/tom-austin-3L76b-LMyeI-unsplash.jpg",
        },
        {
            category: "Sport",
            image: "/images/tom-austin-3L76b-LMyeI-unsplash.jpg",
        },
    ];
    return (
        <div className='section'>
            <div className='section-title'>
                <h3 className="second-title to-right show-on-scroll">Bike category</h3>
                <h3 className="main-title to-left show-on-scroll">choose your style</h3>
                <div className="btn-wrapper">
                    <div className="to-top show-on-scroll">
                        <a href="#" className="btn ">
                            view all categories
                        </a>
                    </div>
                </div>
            </div>
            <div className='section-content'>
                <div className='grid  grid-cols-1  lg:grid-col-3 xl:grid-cols-3 gap-5'>
                    {categoryData.map((category, i) => (
                        <CategorySectionItem key={i} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}