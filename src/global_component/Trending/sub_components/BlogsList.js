import React, { useEffect, useState } from 'react'
import { GetAllOrderedBlogs } from '../../../api/CRUD_API'
import BlogSummary from './BlogSummary'
const BlogsList = (props) => {
    const [trendingBlog, setTrendingBlog] = useState([])

    useEffect(() => {
        GetAllOrderedBlogs('totalView').then((orderByViewBlogs) => {
            setTrendingBlog(orderByViewBlogs.slice(0, 3))
        })
    }, [props.currentBlogId])

    return (
        <div className="flex flex-col justify-evenly">
            {
                trendingBlog.map((blog) => <BlogSummary
                    item={blog}
                />)
            }
        </div>
    )
}

export default BlogsList
