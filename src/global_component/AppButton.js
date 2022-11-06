import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppButton = (props) => {
    return (
        <div className={`flex justify-around bg-teal rounded-full ${props.className} lg:w-64 lg:my-4 cursor-pointer `}
            onClick={props.onClick}
        >
            <p className={`text-white text-center ${props.icon ? 'lg:text-2xl' : 'lg:text-xl'} lg:my-2 `}
            >{props.content}</p>
            {
                props.icon && (
                    <FontAwesomeIcon icon={props.icon} className="lg:text-2xl lg:mt-3 text-white"/>
                )
            }
        </div>
    )
}

AppButton.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.string,
    className: PropTypes.string
}

export default AppButton
