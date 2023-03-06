import React from 'react'

type Props = {
    blog: any
}

export default function BlogSectionItem({ blog }: Props) {
    return (
        <div>
            <div className="news-card to-top show-on-scroll">
                <a href="#" className="blog-card-img">
                    <div className="img-wrapper">
                        <div
                            className="img"
                            style={{ backgroundImage: `url(${blog.image})` }}
                        ></div>
                    </div>
                </a>
                <h3 className="blog-title">
                    <a href="#">
                       {blog.title}
                    </a>
                </h3>
                <p className="blog-preview">
                    {blog.description}
                </p>
                <a href="#" className="btn">
                    read more
                </a>
            </div>
        </div>
    )
}