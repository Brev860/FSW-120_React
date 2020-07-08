import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'



function Nav() {
  return (
    <div className="nav">
        <nav>
        <ul className='list'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/Services'>Services</Link>
            <Link className='navlink' to='/About'>About</Link>
        </ul>
            
        </nav>
        
    </div>
  );
}



export default Nav