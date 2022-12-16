import React from 'react'
import { useNavigate } from 'react-router'
import taiji from '../../assets/images/error_image/error404.png'
import AppButton from '../../global_component/AppButton'
const Error = () => {
    const navigation = useNavigate()
    return (
        <div className="grid lg:grid-cols-12 py-6">
            <div className="flex items-center justify-center lg:col-span-7">
                <p className="text-brown" style={{ fontSize: 224 }}>4</p>
                <img
                    src={taiji}
                    alt="Taiji"
                    className="m-0"
                />
                <p className="text-brown" style={{ fontSize: 224 }}>4</p>
            </div>
            <div className="flex flex-col items-baseline justify-center lg:col-span-5">
                <p className="text-brown text-4xl">SOMETHING WENT WRONG</p>
                <p className="w-8/12 my-8">
                    We are very sorry for inconvenience.
                    It looks you're trying to access a page that either has been deleted or never been existed.
                </p>
                <AppButton content="Back to home" onClick={() => navigation('/')}/>
            </div>
        </div>
    )
}

export default Error
