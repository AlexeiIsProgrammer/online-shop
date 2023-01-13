import React from 'react'

function CheckBox({filter, setFilter, iName, ...props}) {

    function onChangeState (e) {
        if(e.target.checked) {
            setFilter({...filter, [`${e.target.name}`]: [...filter[`${e.target.name}`], iName]})
        } else {
            setFilter({...filter, [`${e.target.name}`]: [...filter[`${e.target.name}`].slice(0, filter[`${e.target.name}`].indexOf(iName)), ...filter[`${e.target.name}`].slice(filter[`${e.target.name}`].indexOf(iName) + 1)] })
        }
    }

    return (
        <li>
            <input type='checkbox' onChange={(e) => onChangeState(e)} {...props}/>      
            {iName}
        </li>
    )
}

export default CheckBox