import React, { useState,useEffect } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useLocation } from 'react-router'
import Header from './global_component/Header'
import Footer from './global_component/Footer'
import IconButton from './global_component/IconButton'
import {useBlog} from './hooks'
const Root = (props) => {
    const location = useLocation()
    const [visible, setVisible] = useState(false)
    const [blogData, setBlogData] = useBlog()

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150) {
            setVisible(true)
        }
        else if (scrolled <= 150) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    useEffect(() => {
        if (location.pathname !== '/add')
        {
            setBlogData((previousState) => {
                return {
                    ...previousState, coverPhotoSrc: ''
                }
            })
        }
    },[location.pathname])

    return (
        <div className="bg-light-silver">
            <Header user={props.user}/>
            <div id="detail">
                <Outlet />
            </div>
            <IconButton icon={faArrowUp}
                className={`fixed ${visible ? 'inline' : 'hidden'} lg:right-24 lg:top-3/4 bg-teal lg:w-14 lg:h-14 `}
                onClick={scrollToTop}
                iconClass="text-white lg:my-3 lg:mx-4 lg:text-3xl"
            />
            <Footer />
        </div>
    )
}

export default Root
