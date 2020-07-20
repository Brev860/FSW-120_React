import React, { useState } from 'react'
import profile1 from './images/profile1.jpeg'


const AddText = (props) =>{

  
      return(
   <div className='addtweet'>
       <form  >
         <img 
         alt='profile pic' 
         className='img' 
         src={profile1}/> 
        <input 
          type="text" 
          rows='5'
          cols='30'
          name='tweet' 
          className="no-outline" 
          placeholder="Search by Keywords "
          />
          <button>Search</button>
      
      </form>
   </div>
     
    )
}

export default AddText