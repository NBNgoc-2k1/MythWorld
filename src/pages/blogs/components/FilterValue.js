import React, { useState } from 'react'
import { useFilter } from '../../../hooks'

const FilterValue = (props) => {
    const [filterData, setFilterData] = useFilter()
    const [isSelected, setSelected] = useState(false)
    const propertyName = props.attributeName.toLowerCase()
    return (
        <div className={`rounded-full border-2 p-1 border-solid border-brown
            hover:bg-brown hover:text-white cursor-pointer
            ${(isSelected === true && filterData.unselectAll === false) ? 'bg-brown text-white' : 'bg-white text-dark-grey'}
        `}
            onClick={(e) => {
                if (!isSelected)
                    filterData.selectedValue[propertyName].push(e.target.innerHTML.toLowerCase())
                else filterData.selectedValue[propertyName] = filterData.selectedValue[propertyName].filter(item => item !== e.target.innerHTML.toLowerCase())
                setSelected(!isSelected)
            }}
        >
            <p className="text-center capitalize">{props.value}</p>
        </div>
    )
}

export default FilterValue
