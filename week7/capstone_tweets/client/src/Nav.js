import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{

     return(
         <div className='navbox'>
             <Link className='link' to='/Home'><i class="fas fa-home"></i></Link>
             <Link className='link' to='/Search'><i class="fas fa-search"></i></Link>
             <Link className='link' to='/Inbox'><i class="fas fa-envelope"></i></Link>
         </div>
     )

}

export default Nav