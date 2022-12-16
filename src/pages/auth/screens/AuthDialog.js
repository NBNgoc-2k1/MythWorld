import auth_image from '../../../assets/images/auth_images/cosmic+shiva+by+android+jones.jpg'
import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Reset from '../components/Reset'
import { useAuth } from '../../../hooks'

const AuthDialog = () => {
    const [authPopup, setAuthPopup] = useAuth()

    function toggleOpenAuthDialog() {
        setAuthPopup(() => {
            return {
                open: !authPopup.open, authState: 'login'
            }
        })
        document.body.style.overflowY=""
    }

    return (
        <div className={`w-full h-screen inset-0 fixed ${authPopup.open ? 'flex' : 'hidden'} z-20 items-center justify-center`}>
            <div className="fixed inset-0 -z-10 bg-dark-grey opacity-60" onClick={toggleOpenAuthDialog}></div>
            <div className="flex w-2/3 h-2/3 bg-light-silver rounded-xl relative">
                <div className="w-5/12 my-2 max-h-full">
                    {(authPopup.authState === 'login') && <Login onClose={toggleOpenAuthDialog} />}
                    {(authPopup.authState === 'register') && <Register onClose={toggleOpenAuthDialog} />}
                    {(authPopup.authState === 'reset') && <Reset onClose={toggleOpenAuthDialog} />}
                </div>
                <img className="w-7/12 rounded-r-xl m-0"
                    src={auth_image}
                    alt="god in auth"
                />
            </div>
        </div>
    )
}

export default AuthDialog
