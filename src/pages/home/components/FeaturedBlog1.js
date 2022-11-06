import React from 'react'
import PropTypes from 'prop-types'
import AppButton from '../../../global_component/AppButton'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FeaturedBlog1 = (props) => {
    return (
        <div className="bg-brown grid lg:grid-cols-12">
            <img className="lg:col-span-7"
                src={props.avatarSrc}
                alt="blog avatar"
            />
            <div className="flex flex-col justify-center items-baseline lg:ml-20 lg:col-span-5">
                <p className="lg:text-2xl text-white">
                    {props.title}
                </p>
                <p className="text-white lg:text-md lg:my-6">
                    {props.content}
                </p>
                <AppButton content="Explore Myth" icon={faArrowRight}/>
            </div>
        </div>
    )
}

FeaturedBlog1.propTypes = {
    avatarSrc:PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default FeaturedBlog1
