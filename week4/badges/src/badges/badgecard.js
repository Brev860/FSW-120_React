import React from 'react'


const BadgeCard = ({firstName, lastName, email, birthPlace, phone, food, info})=>{
    
        return(
           <div className='App'>
               <header className='header'><h2>Badge: </h2></header>
               <p className='fill1'>Name:{firstName}{' '} {lastName}</p>
               <p>{'    '} Phone:{phone}</p>
                

               <br/>
               <p className='fill1'> Place of birth: {birthPlace}</p>
               <p>{'     '} Favorite Food: {food}</p>
               
               <br/>
               <p className='fill1'>Email: {email} </p>
               
               <br/>
               <br/>
               <div className='info'>{info}</div>
              
           </div>

        )
    
}

export default BadgeCard