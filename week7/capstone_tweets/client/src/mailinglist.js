import React from 'react'



const MailingList = () =>{

  
      return(
   <div className='addtweet'>
       
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="enter first name"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text"  value="enter last name"/><br/>
  <label for="email">email:</label><br/>
  <input type="email"  value=" enter email"/><br/>
  <input type="submit" value="Submit"/>
    
   </div>
     
    )
}

export default MailingList