import React, {Component} from 'react'
import BadgeCard from './badgecard'

class BadgeList extends Component{


    render(){

        const cardData = this.props.newData.map((badge, i) =>{
            return(
                <BadgeCard 
                key={i}
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                birthPlace={badge.birthPlace}
                phone={badge.phone}
                food={badge.food}
                info={badge.info}
                />
            )
        })
        return(
           <div className='App'>
               
               {cardData}
           </div>

        )
    }
}

export default BadgeList