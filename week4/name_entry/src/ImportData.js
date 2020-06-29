import React from 'react'


const ImportedNames = (props) =>{
    return(
        <div>
            <ul>
              <li>{props.firstName} {'  '}{props.lastName}</li>
            </ul>
        </div>
    )
}

export default ImportedNames