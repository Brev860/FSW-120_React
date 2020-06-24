import React from 'react'


function Box (props){
    
        return(
             

          <div>  
            <div className='gridbox1' style={{backgroundColor: props.backgroundColor}}></div>
            <button onClick={props.colorChange} >click me</button>
        </div>  
        )
    
}   

export default Box