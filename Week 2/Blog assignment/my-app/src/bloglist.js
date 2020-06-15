import React from 'react';




const BlogsComponent = (props)=>{

    return(
        <div id='blogwrapper'>
            
         <h1>{props.title}</h1>
         
         <h3>{props.subtitle}</h3>
         <p>Posted by.{' ' +  props.author}  On. {' ' + props.date}</p> 
             
        </div>
    )
};

export default BlogsComponent