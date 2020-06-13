import React from 'react';



const ListItem = (props)=>{
    return (
        <div className='list'style={{backgroundColor: props.backgroundColor}}>
            <h1 style={{font:props.fontTitle, fontStyle: props.fontStyle2}}>{props.title}</h1>
            <h2 style={{fontStyle:props.fontStyle1}}>{props.subtitle}</h2>
            <p style={{backgroundColor: props.backgroundColor2, padding:'20px', fontStyle:props.fontStyle2}}>Song Lyrics:{' '+ props.information }</p>
            <p style={{fontStyle:props.fontStyle1}}>Artist:{' ' + props.artist}</p>
        </div>
    )
}

export default ListItem