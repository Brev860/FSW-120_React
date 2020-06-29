import React, {Component} from 'react'
import NameList from './NameList'


class AddName extends Component{
  

    render(){

        const mappedNames = this.props.newName.map( (name, i) =>{
            return(
                <NameList 
                key={i}
                firstName={name.firstName}
                lastName={name.lastName}
                />
            )
        })
        return(
            <div>
               {mappedNames}
            </div>
        )
    }


}

export default AddName