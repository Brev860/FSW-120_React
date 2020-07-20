import React from 'react'
import {Link} from 'react-router-dom'


  const TextIcon = () =>{
     
      return(
          <div>
              <nav>
                <Link to='/Addtext' className='addtext'><i class="fab fa-twitter"></i></Link>
              </nav>
          </div>
      )

  }


export default TextIcon