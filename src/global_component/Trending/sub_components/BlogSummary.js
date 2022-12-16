import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import IconButton from '../../IconButton';

const BlogSummary = (props) => {
    const [datePost, setDatePost] = useState('')
    const navigation = useNavigate()

    useEffect(() => {
        const date = new Date(props.item.createdAt.seconds * 1000);
        var dateString = date.toDateString()
        dateString = dateString.substring(4, dateString.length)
        setDatePost(dateString)
    }, [])

    return (
        <div className="flex my-4 bg-brown w-[30rem] rounded-2xl">
            <img className="m-0 w-36 h-auto rounded-l-2xl"
                src={props.item.coverPhoto}
            />
            <div className="flex items-center justify-around w-full">
                <div className="flex flex-col mt-4 w-[19rem]">
                    <p className="text-3xl text-white ml-6">{props.item.blogTitle}</p>
                    <p className="text-md text-white ml-6">Post on: {datePost}
                    </p>
                    <div className="flex my-2">
                        <FontAwesomeIcon icon={faEye} className="text-white ml-6 mt-2" />
                        <p className="text-white text-lg ml-2 ">{props.item.totalView}</p>
                    </div>
                </div>
                <IconButton icon={faArrowRight} className="bg-teal w-12 h-12 mr-[9.5rem]" iconClass="text-white text-xl m-3.5" 
                    onClick={() => navigation(`/blogs/${props.item.id}`)}
                />
            </div>
        </div>
    )
}

export default BlogSummary
