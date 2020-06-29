import React from 'react'

const NameList = ({firstName, lastName}) =>{

    return(
        <div>
            <ul>
               <li>{firstName}{' '} {lastName}</li>
            </ul>
        </div>
    )
}

export default NameList