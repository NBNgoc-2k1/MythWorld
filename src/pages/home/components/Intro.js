import React from 'react'
import avt from '../../../assets/images/home_images/291119249_2002840966575129_602900069910579026_n.jpg'
import AppButton from '../../../global_component/AppButton'
import { useAuth } from '../../../hooks'

const Intro = (props) => {
    const [authPopup, setAuthPopup] = useAuth()

    function toggleOpenAuthDialog() {
        setAuthPopup((previousState) => {
            return {
                ...previousState, open: !authPopup.open
            }
        })
        document.body.style.overflowY="hidden"
    }

    return (
        <div className="bg-dark-grey grid grid-cols-12">
            <div className="flex flex-col justify-center items-baseline ml-20 col-span-5">
                <p className="text-2xl text-white">
                    WELCOME!
                </p>
                <p className="text-white w-7/12 text-md my-6">
                    A worldwide mythological blog for those interested in the subject. Register today never miss any article
                    and write your blogs.
                </p>
                {!props.user && <AppButton content="Login/Register" onClick={toggleOpenAuthDialog} />}
            </div>
            <img className="col-span-7"
                src={avt}
                alt="blog avatar"
            />
        </div>
    )
}

export default Intro
