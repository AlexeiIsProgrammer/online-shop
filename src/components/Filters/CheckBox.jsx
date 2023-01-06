import React from 'react'

function CheckBox({name, type}) {
    return (
        <li>
            <input type="checkbox" name={type}/>      
            {name}
        </li>
    )
}

export default CheckBox