import React from 'react'



function SuperHero(props){
        
        return(
            <div className='content'>
                <img className='img' src={props.img}
                onClick={()=> alert(props.phrase)}></img>
                 <h3>{props.name}</h3>
        <p><strong>Heros catch phrase:</strong>{' '} {props.phrase}</p>

            </div>
        )
    }



export default SuperHero