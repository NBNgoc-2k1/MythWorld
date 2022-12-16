import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetAllOrderedBlogs, GetBlogById, UpdateData } from '../../../api/CRUD_API'
import Loading from '../../../global_component/Loading'
import Error from '../../error/Error'
import parser from 'html-react-parser'
import '../../add/editor.css'
import BlogCard from '../../../global_component/BlogCard'
import Trending from '../../../global_component/Trending/Trending'

const BlogDetail = () => {
    let { id } = useParams()
    const [requiredBlog, setRequiredBlog] = useState(null)
    const [sameAuthorBlogs, setSameAuthorBlogs] = useState([])
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const options = {
        replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.class === 'remove') {
                return <></>;
            }
        },
    };

    const formattedDate = (dateSeconds) => {
        const date = new Date(dateSeconds * 1000);
        var dateString = date.toDateString()
        return dateString.substring(4, dateString.length)
    }

    useEffect(() => {
        GetBlogById(id).then((returnedBlog) => {
            setRequiredBlog(returnedBlog)
            UpdateData(id, 'blogs', { ...returnedBlog, totalView: returnedBlog.totalView + 1 }, () => { })
        })

        GetAllOrderedBlogs('createdAt').then((allBlogs) => setSameAuthorBlogs(allBlogs
            .filter(blog => blog.author.uid === currentUser.uid)
            .filter(blog => blog.id !== id)))
    }, [id])

    return (
        <>
            {requiredBlog ? (
                <>
                    <div className="flex ml-14">
                        <div className="w-7/12">
                            <div className="bg-dark-grey grid lg:grid-cols-12 lg:mt-4 rounded-t-2xl">
                                <div className="text-white flex flex-col justify-end lg:col-span-6 lg:m-4">
                                    <p className="lg:text-5xl lg:my-4">{requiredBlog.blogTitle}</p>
                                    <p className="lg:text-lg lg:my-4">
                                        Posted on: {formattedDate(requiredBlog.createdAt.seconds)} by {requiredBlog.author.name}
                                    </p>
                                </div>
                                <img src={requiredBlog.coverPhoto}
                                    className="lg:col-span-6 w-full rounded-tr-2xl"
                                />
                            </div>
                            <div className="ql-snow bg-dark-silver lg:mb-4 rounded-b-2xl">
                                <div className="ql-editor editor-container">
                                    {parser(requiredBlog.content, options)}
                                </div>
                            </div>
                        </div>
                        <Trending className="w-5/12 relative lg:left-8 lg:top-[16rem]" />
                    </div>
                    <div className="bg-light-silver">
                        <p className="text-center text-2xl mt-8 mb-2"
                        >Same Author</p>
                        <div className="flex items-center justify-evenly">
                            {
                                sameAuthorBlogs.length > 0 && (
                                    <div className={`
                                        ${sameAuthorBlogs.length < 4 ? 'flex justify-around' : 'grid lg:grid-cols-3 gap-4'}`}>
                                        {sameAuthorBlogs.map((blog) => <BlogCard item={blog} isEdit={false}
                                        />)}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {(requiredBlog === null) && <Loading />}
                    {(requiredBlog === undefined) && <Error />}
                </>
            )}
        </>
    )
}

export default BlogDetail
