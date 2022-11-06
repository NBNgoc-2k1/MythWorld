import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import PropTypes from 'prop-types'


const IconButton = (props) => {
    
    return (
        <div className={`rounded-full cursor-pointer ${props.className}`}
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={props.icon} className={props.iconClass}/>
        </div>
    )       
}

IconButton.propsTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
}

export default IconButton
