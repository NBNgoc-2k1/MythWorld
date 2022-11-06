import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import PropTypes from 'prop-types'
import AppButton from './AppButton'

const BlogCard = (props) => {
    return (
        <div className="bg-brown rounded-2xl lg:w-72 m-8">
            <img
                src={props.avtSrc}
                alt="blog avatar"
                className="rounded-t-2xl"
            />
            <div className="m-4 pb-4">
                <p className="text-white text-2xl h-16">
                    {props.title}
                </p>
                <p className="text-white text-md">
                    Posted on: {props.updateDate}
                </p>
                <AppButton content="Explore Myth" icon={faArrowRight} className="lg:mt-8"/>
            </div>
        </div>
    )
}

BlogCard.propTypes = {
    avtSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateDate: PropTypes.string.isRequired,
}

export default BlogCard
