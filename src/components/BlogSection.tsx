import React from 'react'
import BlogSectionItem from './BlogSectionItem';

type Props = {}

export default function BlogSection({ }: Props) {
    const blogsData = [
        {
            title: ' Cycling On Your Period: Harness The Power Of Your Hormones',
            image: "/images/asoggetti-HPpj2190tGs-unsplash.jpg",
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas' +
                'exercitationem reprehenderit assumenda similique debitis consequuntur' +
                'aliquid eum temporibus tempora, error qui in iusto ducimus expedita' +
                'earum aspernatur dignissimos, porro dolores!',

        },
        {
            title: 'Major life altering accidents caused by cycling',
            image: "/images/paolo-chiabrando-KSwd2lb3lfs-unsplash.jpg",
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas' +
                'exercitationem reprehenderit assumenda similique debitis consequuntur' +
                'aliquid eum temporibus tempora, error qui in iusto ducimus expedita' +
                'earum aspernatur dignissimos, porro dolores!',
        },
        {
            title: 'Benefits of cycling everyday',
            image: "/images/portuguese-gravity-MLbsn2aQfQs-unsplash.jpg",
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas' +
                'exercitationem reprehenderit assumenda similique debitis consequuntur' +
                'aliquid eum temporibus tempora, error qui in iusto ducimus expedita' +
                'earum aspernatur dignissimos, porro dolores!',
        },
    ];
    return (
        <div className="section">
            <div className="section-title">
                <h3 className="second-title to-right show-on-scroll">Bike Blogs</h3>
                <h3 className="main-title to-left show-on-scroll">latest blogs</h3>
                <div className="btn-wrapper">
                    <div className=" to-top show-on-scroll">
                        <a href="#" className="btn">
                            view all blogs
                        </a>
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className='grid  grid-cols-1  lg:grid-col-3 xl:grid-cols-3 gap-5'>
                    {blogsData.map((blog, i)=>(
                        <BlogSectionItem key={i} blog={blog}/>
                    ))}
                </div>
            </div>
        </div>
    )
}