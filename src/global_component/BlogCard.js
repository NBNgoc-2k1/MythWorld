import { faArrowRight, faEye, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppButton from './AppButton'
import { useNavigate } from 'react-router'
import IconButton from './IconButton'
import { DeleteBlogById } from '../api/CRUD_API'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogCard = (props) => {
    const [datePost, setDatePost] = useState('')
    const navigation = useNavigate()
    const [confirmDelete, setConfirmDelete] = useState(false);

    const toggleConfirmPopup = () => {
        setConfirmDelete(!confirmDelete)
    }

    useEffect(() => {
        const date = new Date(props.item.createdAt.seconds * 1000);
        var dateString = date.toDateString()
        dateString = dateString.substring(4, dateString.length)
        setDatePost(dateString)
    }, [])

    return (
        <div className="bg-brown rounded-2xl lg:w-[18rem] lg:m-4">
            <div className="relative lg:h-48">
                <img
                    src={props.item.coverPhoto}
                    alt="blog avatar"
                    className="rounded-t-2xl w-full h-full"
                />
                {props.isEdit && (
                    <div className>
                        <IconButton
                            className="blogcard_iconbtn lg:left-60"
                            icon={faPen}
                            iconClass="text-lg"
                            onClick={() => navigation(`/add/${props.item.id}`)}

                        />
                        <IconButton
                            icon={faTrashAlt}
                            className="blogcard_iconbtn lg:left-48"
                            iconClass="text-lg"
                            onClick={() => {
                                toggleConfirmPopup()
                            }}
                        />
                    </div>
                )}
            </div>
            <div className="m-4">
                <p className="text-white text-2xl h-16">
                    {props.item.blogTitle}
                    <br />
                    <div className="flex">
                        <FontAwesomeIcon icon={faEye} className="text-white mt-1" />
                        <p className="text-white text-lg ml-2 ">{props.item.totalView}</p>
                    </div>
                </p>
                <p className="text-white text-md">
                    Posted on: {datePost}
                </p>

                <AppButton content="Explore Myth" icon={faArrowRight} className="lg:mt-6" onClick={() => {
                    navigation(`/blogs/${props.item.id}`)
                }} />
            </div>
            <Dialog open={confirmDelete} onClose={toggleConfirmPopup}>
                <DialogTitle className="bg-brown text-center text-white">Delete Blog</DialogTitle>
                <DialogContent sx={{ marginTop: '1.25em' }}>
                    <p className="">Are you sure you want to delete this blog?</p>
                </DialogContent>
                <DialogActions>
                    <AppButton content="No" onClick={() => toggleConfirmPopup()} />
                    <AppButton content="Yes" className="bg-dark-grey" onClick={() => {
                        DeleteBlogById(props.item.id)
                    }} />
                </DialogActions>
            </Dialog>
        </div>
    )
}

BlogCard.propTypes = {
    avtSrc: PropTypes.string.isRequired,
    isEdit: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    updateDate: PropTypes.number.isRequired,
}

export default BlogCard
