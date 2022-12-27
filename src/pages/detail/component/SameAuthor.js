import React, { useState, useEffect } from 'react'
import { GetAllOrderedBlogs } from '../../../api/CRUD_API'
import BlogCard from '../../../global_component/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/bundle'
import Title from '../../../global_component/Title'
import Loading from '../../../global_component/Loading'
import BlogSlide from '../../../global_component/BlogSlide';
import { Autoplay, Pagination } from 'swiper';
import '../../home/components/LatestBlog/slider-style.css'

const SameAuthor = (props) => {
    const [sameAuthorBlogs, setSameAuthorBlogs] = useState([])
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        GetAllOrderedBlogs('createdAt').then((allBlogs) => setSameAuthorBlogs(allBlogs
            .filter(blog => blog.author.uid === currentUser.uid)
            .filter(blog => blog.id !== props.blogId)))
    }, [props.blogId])

    return (
        <div className="bg-light-silver">
            <Title title="Same Author" className="my-4 text-xl justify-center
                sm:my-8
                md:text-3xl
                max-[414px]:text-base
            "
                barClass='w-24 sm:w-44'
            />
            {
                sameAuthorBlogs.length > 0 ? (
                    <>
                        <div className="hidden sm:flex flex-row justify-evenly items-center">
                            {sameAuthorBlogs.map((blog, index) => {
                                if (index > 2) return

                                return (
                                    <BlogCard item={blog} isEdit={false} />
                                )
                            })}
                        </div>
                        <Swiper className='sm:hidden h-48'
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            pagination={true}
                            autoplay={{
                                delay: 3000,
                            }}
                        >
                            {
                                sameAuthorBlogs.map((blog) => {
                                    return (
                                        <SwiperSlide>
                                            <BlogSlide item={blog} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </>
                ) : <Loading />
            }
        </div>
    )
}

export default SameAuthor
