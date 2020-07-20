import React, { useState } from 'react'
import profile1 from './images/profile1.jpeg'


const AddText = (props) =>{
 const [tweet, setTweet] = useState([])
 
 
 const handleTweet = (e) =>{
  let dateStamp = new Date()

     
     let author = 'Khalid'
    let newTweet = {tweet: tweet, date: dateStamp, author: author}
    setTweet([...tweet, newTweet])
    props.addTweet(newTweet)
    console.log(newTweet)
    setTweet('')
 }
  
      return(
   <div className='addtweet'>
       <form onSubmit={handleTweet} >
         <img 
         alt='profile pic' 
         className='img' 
         src={profile1}/> 
        <textarea 
          type="text" 
          rows='5'
          cols='30'
          name='tweet' 
          className="no-outline" 
          placeholder="What's happening"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}/>
          <button>Post</button>
      
      </form>
   </div>
     
    )
}

export default AddText