import React from 'react'


const Spots = (props)=>{

 
    return(
        <div id='card'>
          <h3>Destination:{' '+ props.place}</h3>  
          <p>${props.price}</p>
          <p>Best when visited during:<strong>{' '+ props.season}</strong></p>
            
        </div>
    )
}
export default Spots