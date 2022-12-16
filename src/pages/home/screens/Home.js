import React, { useEffect, useState } from 'react'
import Intro from '../components/Intro'
import FeaturedBlog1 from '../components/FeaturedBlog1'
import LatestBlogs from '../components/LatestBlogs'
import FeaturedBlog2 from '../components/FeaturedBlog2'
import { GetAllOrderedBlogs } from '../../../api/CRUD_API'
import { useNavigate } from 'react-router'

const Home = (props) => {
    const [twoHighestViewBlog, setTwoHighestViewBlog] = useState([]);
    const navigation = useNavigate()

    useEffect(() => {
        GetAllOrderedBlogs('totalView').then((orderByViewBlogs) => {
            setTwoHighestViewBlog(orderByViewBlogs.slice(0, 2))
        })
    }, [])

    return (
        <div>
            <Intro user={props.user} />
            {twoHighestViewBlog.length > 0 && <>
                <FeaturedBlog1
                    title={twoHighestViewBlog[0].blogTitle}
                    avatarSrc={twoHighestViewBlog[0].coverPhoto}
                    content={twoHighestViewBlog[0].content.split('</p>')[0]}
                    onClick={() => {
                        navigation(`/blogs/${twoHighestViewBlog[0].id}`)
                    }}
                />
                <FeaturedBlog2
                    title={twoHighestViewBlog[1].blogTitle}
                    avatarSrc={twoHighestViewBlog[1].coverPhoto}
                    content={twoHighestViewBlog[1].content.split('</p>')[0]}
                    onClick={() => {
                        navigation(`/blogs/${twoHighestViewBlog[1].id}`)
                    }}
                />
            </>}
            <LatestBlogs />
        </div>
    )
}

export default Home
