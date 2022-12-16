import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppButton = (props) => {
    return (
        <div className={`flex justify-around 
                ${props.disabled ? 'bg-dark-silver cursor-default pointer-events-none' : 'bg-teal cursor-pointer hover:brightness-75'} rounded-full 
                ${props.className} 
                px-8 w-fit lg:my-4 `}
            onClick={props.onClick}
        >
            <p className={`${props.disabled ? 'text-dark-grey' : 'text-white'} text-center ${props.icon ? 'lg:text-xl' : 'lg:text-lg'} lg:my-2 `}
            >{props.content}</p>
            {
                props.icon && (
                    <FontAwesomeIcon icon={props.icon} className={`${props.iconClassName} lg:ml-3 lg:text-2xl lg:mt-3 text-white`}/>
                )
            }
        </div>
    )
}

AppButton.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    disabled: PropTypes.bool,
}

export default AppButton
