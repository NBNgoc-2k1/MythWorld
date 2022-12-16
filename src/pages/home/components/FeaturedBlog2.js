import React from 'react'
import PropTypes from 'prop-types'
import AppButton from '../../../global_component/AppButton'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import parser from 'html-react-parser'
import '../../add/editor.css'

const FeaturedBlog2 = (props) => {
    const options = {
        replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.class === 'remove') {
                return <></>;
            }
        },
    };

    return (
        <div className="bg-brown grid lg:grid-cols-12">
            <div className="flex flex-col justify-center items-baseline lg:ml-20 lg:w-4/5 lg:col-span-5">
                <p className="lg:text-4xl text-white">
                    {props.title}
                </p>
                <div className="text-white lg:h-36 lg:w-4/5 lg:my-6">
                    {parser(props.content, options)}
                </div>
                <AppButton content="Explore Myth" icon={faArrowRight} onClick={props.onClick}/>
            </div>
            <img className="w-full h-auto lg:col-span-7"
                src={props.avatarSrc}
                alt="blog avatar"
            />
        </div>
    )
}

FeaturedBlog2.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default FeaturedBlog2
