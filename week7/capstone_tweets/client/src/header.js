import React from 'react';
import profile1 from './images/profile1.jpeg'




const Header = ()=>{
    return(
        <header className="heading" >
          <img alt='profile' id='img' src={profile1}/>
            <h1 className='home' ><strong>Khalid's Tweets</strong></h1>
    
         </header>
    )
}
export default Header