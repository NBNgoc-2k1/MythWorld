import React, { useEffect, useState } from 'react'
import { GetAllOrderedBlogs } from '../../../api/CRUD_API'
import BlogCard from '../../../global_component/BlogCard'
import Loading from '../../../global_component/Loading'
import Title from '../../../global_component/Title'

const LatestBlogs = () => {
    const [latestBlogs, setLatestBlogs] = useState([])

    useEffect(() => {
        GetAllOrderedBlogs('createdAt').then((allBlogs) => setLatestBlogs(allBlogs.slice(0, 3)))
    }, [])

    return (
        <div className="bg-light-silver">
            <Title title="Recent Blogs" className="my-8 text-3xl justify-center "/>
            {
                latestBlogs.length > 0 ? (
                    <div className="flex flex-row justify-evenly items-center">
                        {latestBlogs.map((blog) => <BlogCard item={blog} isEdit={false}
                        />)}
                    </div>
                ) : <Loading />
            }
        </div>
    )
}

export default LatestBlogs
