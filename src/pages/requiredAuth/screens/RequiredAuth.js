import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AppButton from '../../../global_component/AppButton'
import { useAuth } from '../../../hooks'

const RequiredAuth = () => {
    const [authPopup, setAuthPopup] = useAuth()
 
    return (
        <div className="flex items-center justify-evenly lg:py-8">
            <div>
                <FontAwesomeIcon
                    icon={faUserLock}
                    className="text-[20rem] text-dark-grey"
                />
            </div>
            <div className="flex flex-col items-baseline justify-center
                lg:mt-20
            ">
                <p className="text-brown text-4xl">REQUIRED AUTHENTICATION</p>
                <p className="w-8/12 my-8 text-lg lg:max-w-4xl leading-relaxed">
                    This page contains information or benefits that require a MythWorld account.
                    So please login or register to experience. <br /> Sincere thanks to everyone's contributions to Myth World
                </p>
                <AppButton content="Login/Register" onClick={() => {
                        setAuthPopup((previousState) => {
                            return {
                                ...previousState, open: !authPopup.open
                            }
                        })
                    }}/>
            </div>
        </div>
    )
}

export default RequiredAuth
