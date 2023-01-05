import { faArrowRight, faClock, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from './IconButton';

const BlogSlide = (props) => {
    const [datePost, setDatePost] = useState('')
    const navigation = useNavigate()

    useEffect(() => {
        const date = new Date(props.item.createdAt.seconds * 1000);
        var dateString = date.toDateString()
        dateString = dateString.substring(4, dateString.length)
        setDatePost(dateString)
    }, [])

    return (
        <div className='flex m-4 bg-brown rounded-2xl'>
            <img className="m-0 w-28 min-[361px]:w-32 h-auto rounded-l-2xl"
                src={props.item.coverPhoto}
            />
            <div className='flex items-center justify-evenly w-full w-64'>
                <div className="flex flex-col mt-4 ml-4">
                    <p className="text-lg min-[361px]:text-xl text-white">{props.item.blogTitle}</p>
                    <div className="flex">
                        <FontAwesomeIcon icon={faClock} className="text-white mt-1 md:mt-2 md:mr-2" />
                        <p className="text-sm ml-1 min-[361px]:text-base text-white">{datePost}
                        </p>
                    </div>
                    <div className="flex my-2">
                        <FontAwesomeIcon icon={faEye} className="text-white mt-1" />
                        <p className="text-white ml-2 ">{props.item.totalView}</p>
                    </div>
                </div>
                <IconButton icon={faArrowRight} className="bg-teal w-12 h-12 mt-12" iconClass="text-white text-xl m-3.5"
                    onClick={() => navigation(`/blogs/${props.item.id}`)}
                />
            </div>
        </div>
    )
}

export default BlogSlide
