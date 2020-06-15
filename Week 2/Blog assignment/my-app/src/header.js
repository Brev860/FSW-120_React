import React from 'react';
import desk from './desk.jpg'




const Header = ()=>{
    return(
        <header className="heading" >
           <img id='img' src={desk}/>
             <div className="text">
                  <h1 id='title'>Clean Blog</h1>
                  <span id='subtitle'>A Blog Theme by Start Bootstrap</span>
            
           </div>
    
         </header>
    )
}
export default Header