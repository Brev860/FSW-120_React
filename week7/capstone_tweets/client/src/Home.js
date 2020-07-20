 import React from 'react'


 const Home = (props) => {
    

    return(
        <div className='tweet-wrapper'>

           <form>
             <span>Posted: <strong>{props.date}</strong> By:<strong> {props.author}</strong> </span>
             <h1>{props.tweet}</h1>
            
             <button className='dltbutton' onClick={() => props.dltTweet(props._id)}>Delete</button>
            
           </form>
            
    
            
        </div>
    )
 }

 export default Home