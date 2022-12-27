import React from 'react'
import Title from '../Title'
import ImageMedalRank from './sub_components/ImageMedalRank'
import BlogsList from './sub_components/BlogsList'

const Trending = (props) => {

    return (
        <div className={`${props.className}`}>
            <Title title="Trending" className="text-2xl justify-start lg:mb-4 lg:ml-4" 
                barClass="w-16 xl:w-32 2xl:w-44"
            />
            <div className="flex flex-start">
                <ImageMedalRank />
                <BlogsList/>
            </div>
        </div>
    )
}

export default Trending
