import React from 'react'

type Props = {
    category: any
}

export default function CategorySectionItem({ category }: Props) {
    return (
        <div className=''>
            <div className="category-img to-top show-on-scroll">
                <div
                    className="category-img-inner"
                    style={{
                        backgroundImage: `url(${category.image})`,
                    }}
                ></div>
                <div className="category-title">{category.category}</div>
            </div>
        </div>
    )
}