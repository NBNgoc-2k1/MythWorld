import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/bundle'
import { GetAllOrderedBlogs } from '../../../../api/CRUD_API'
import BlogCard from '../../../../global_component/BlogCard'
import Loading from '../../../../global_component/Loading'
import Title from '../../../../global_component/Title'
import BlogSlide from '../../../../global_component/BlogSlide';
import { Autoplay, Pagination } from 'swiper';
const LatestBlogs = () => {
    const [latestBlogs, setLatestBlogs] = useState([])
    const [blog, setBlog] = useState()

    useEffect(() => {
        GetAllOrderedBlogs('createdAt').then((allBlogs) => {
            setLatestBlogs(allBlogs.slice(0, 3))
        })
    }, [])

    return (
        <div className="bg-light-silver">
            <Title title="Recent Blogs" className="my-4 text-xl justify-center
                sm:my-8
                md:text-3xl
                max-[414px]:text-base
            "
                barClass='w-24 sm:w-44'
            />
            {
                latestBlogs.length > 0 ? (
                    <>
                        <div className="hidden sm:flex flex-row justify-evenly items-center">
                            {latestBlogs.map((blog) => <BlogCard item={blog} isEdit={false}
                            />)}
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
                                latestBlogs.map((blog) => {

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

export default LatestBlogs
