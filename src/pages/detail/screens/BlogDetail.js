import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetBlogById,GetAllOrderedBlogs, UpdateData } from '../../../api/CRUD_API'
import Loading from '../../../global_component/Loading'
import Error from '../../error/Error'
import parser from 'html-react-parser'
import '../../add/editor.css'
import Trending from '../../../global_component/Trending/Trending'
import BlogPart from '../../../global_component/BlogPart/BlogPart'
// import IconButton from '../../../global_component/IconButton'
// import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

const BlogDetail = () => {
    let { id } = useParams()
    const [requiredBlog, setRequiredBlog] = useState(null)
    const [sameAuthorBlogs, setSameAuthorBlogs] = useState([])

    useEffect(() => {
        GetBlogById(id).then((returnedBlog) => {
            setRequiredBlog(returnedBlog)
            UpdateData(id, 'blogs', { ...returnedBlog, totalView: returnedBlog.totalView + 1 }, () => { })
            GetAllOrderedBlogs('createdAt').then((allBlogs) => {
                var tempBlogs = allBlogs
                .filter(blog => blog.author.uid === returnedBlog.author.uid)
                .filter(blog => blog.id !== id)
                tempBlogs.length === 0 && tempBlogs.push(returnedBlog)
                setSameAuthorBlogs(tempBlogs)
            })
        })
    }, [id])


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
    
    return (
        <>
            {requiredBlog ? (
                <>
                    <div className="flex mx-6 lg:ml-14">
                        <div className="w-full lg:w-7/12">
                            <div className="bg-dark-grey flex mt-4 relative rounded-t-2xl sm:static">
                                <div className="max-sm:absolute text-white flex flex-col justify-end
                                    m-4 max-sm:bg-brown max-sm:rounded-2xl opacity-80 px-2 bottom-0
                                    sm:w-1/2">
                                    <p className="my-2 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl sm:my-4">{requiredBlog.blogTitle}</p>
                                    <p className="my-2 text-sm sm:text-base 2xl:text-lg sm:my-4">
                                        {formattedDate(requiredBlog.createdAt.seconds)} by {requiredBlog.author.name}
                                    </p>
                                </div>
                                <img src={requiredBlog.coverPhoto}
                                    className="w-full rounded-2xl sm:w-1/2 sm:rounded-tr-2xl sm:rounded-none"
                                />
                            </div>
                            <div className="ql-snow bg-dark-silver lg:mb-4 rounded-b-2xl">
                                <div className="ql-editor editor-container">
                                    {parser(requiredBlog.content, options)}
                                </div>
                            </div>
                        </div>
                        <Trending className="max-lg:hidden w-5/12 relative lg:left-8 lg:top-[20rem]" />
                    </div>
                    <BlogPart title='Same Author' data={sameAuthorBlogs}/>
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
