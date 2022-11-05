import React from 'react'
import { Outlet } from 'react-router'
import Header from './global_component/Header'
import Footer from './global_component/Footer'
import ScrollButton from './global_component/ScrollButton'
const Root = () => {
    return (
        <div className="bg-background">
            <Header />
            <div id="detail">
                <Outlet />
            </div>
            <ScrollButton/>
            <Footer />
        </div>
    )
}

export default Root
