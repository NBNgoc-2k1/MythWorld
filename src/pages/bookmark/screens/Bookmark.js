import React, { useEffect, useState } from 'react'
import BlogCard from '../../../global_component/BlogCard'
import sad_face from '../../../assets/images/error_image/sad_face.png'
import Loading from '../../../global_component/Loading';
import { GetSingleData } from '../../../api/CRUD_API';
import RequiredAuth from '../../requiredAuth/screens/RequiredAuth';
import Title from '../../../global_component/Title';
import BlogSlide from '../../../global_component/BlogSlide';

const Bookmark = (props) => {
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

    useEffect(() => {
        props.user.bookmark.map(blogId =>
            GetSingleData('blogs', blogId).then(bookmarkedBlog => {
                setBookmarkedBlogs([...bookmarkedBlogs,bookmarkedBlog])
            })
        )
    }, [])

    return (
        <>
            {
                props.user ? (
                    <>
                        {props.user.bookmark.length <= 0 ? (
                            <diV className="my-20">
                                <img
                                    src={sad_face}
                                    alt="Sad Face"
                                    className="m-auto"
                                />
                                <p className="text-center text-4xl mt-8"
                                >Oops...! You don't have any bookmark blog</p>
                            </diV>
                        ) : (
                            <>
                                <Title title="My Bookmark" className="mt-10 justify-center text-lg sm:text-2xl md:text-3xl"
                                    barClass='w-24 sm:w-44'
                                />
                                {(bookmarkedBlogs.length > 0) ? (
                                    <>
                                        <div className={`lg:pt-10 lg:pl-10 hidden
                                            ${bookmarkedBlogs.length < 4 ? 'min-[414px]:flex justify-around'
                                                : 'min-[414px]:grid grid-cols-2 lg:grid-cols-3 gap-4'} `}
                                        >
                                            {bookmarkedBlogs.map((blog) => <BlogCard item={blog} isEdit={false}
                                            />)}
                                        </div>
                                        <div className={`lg:pt-10 lg:pl-10 min-[414px]:hidden`}>
                                            {bookmarkedBlogs.map((blog) => <BlogSlide item={blog} isEdit={false}
                                            />)}
                                        </div>
                                    </>
                                ) :
                                    <Loading />
                                }
                            </>
                        )
                        }
                    </>
                ) : (
                    <RequiredAuth />
                )
            }
        </>
    )
}

export default Bookmark
