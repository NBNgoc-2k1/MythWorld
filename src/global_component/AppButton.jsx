import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AppButton = (props) => {
    return (
        <div className={`flex justify-around w-fit my-5 lg:my-4 
                ${props.disabled ? 'bg-dark-silver cursor-default pointer-events-none' : 'bg-teal cursor-pointer hover:brightness-75'} rounded-full 
                ${props.className}
                px-4`}
            onClick={props.onClick}
        >
            <p className={`text-center my-2 lg:my-2.5 first-letter:uppercase text-lg lg:text-xl
                ${props.disabled ? 'text-dark-grey' : 'text-white'} 
                ${props.icon ? 'lg:text-2xl' : 'lg:text-xl'} 
            `}
            >{props.content}</p>
            {
                props.icon && (
                    <FontAwesomeIcon icon={props.icon} className={`${props.iconClassName} ml-3 text-xl mt-2 lg:text-2xl lg:mt-4 ${props.disabled ? 'text-dark-grey' : 'text-white'}`}/>
                )
            }
        </div>
    )
}

AppButton.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    disabled: PropTypes.bool,
}

export default AppButton
