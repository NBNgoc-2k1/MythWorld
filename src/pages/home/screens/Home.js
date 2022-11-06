import React from 'react'
import Intro from '../components/Intro'
import FeaturedBlog1 from '../components/FeaturedBlog1'
import LatestBlogs from '../components/LatestBlogs'
import FeaturedBlog2 from '../components/FeaturedBlog2'
import Error from '../../error/Error'

const Home = () => {
    return (
        <div>
            <Intro />
            <FeaturedBlog1
                title=""
                content=""
            />
            <FeaturedBlog2
                title=""
                content=""
            />
            <LatestBlogs />
        </div>
    )
}

export default Home
