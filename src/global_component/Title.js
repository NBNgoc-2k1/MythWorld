import React from 'react'

const Title = (props) => {
    return (
        <div className={`flex ${props.className} items-center `}>
            <div className="bg-dark-silver h-6 w-44"></div>
            <p className="text-dark-grey px-10"
            >{props.title}</p>
            <div className="bg-dark-silver h-6 w-44"></div>
        </div>
    )
}

export default Title
