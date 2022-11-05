import { ArrowUpward } from '@mui/icons-material';
import React, { useState } from 'react'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

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

    return (
        <div className={`fixed ${visible ? 'inline' : 'hidden'} right-24 top-3/4 bg-button rounded-full w-14 h-14 cursor-pointer`}
            onClick={scrollToTop}
        >
            <ArrowUpward fontSize="large" className="text-textBtn my-3 mx-2.5" />
        </div >
    )
}

export default ScrollButton
