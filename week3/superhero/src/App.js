import React from 'react';
import  data from './data.json'
import SuperHero from './heros'



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      hero: data
    }
  }
   
  render(){
    const heroList = this.state.hero.map(goodGuy => <SuperHero name={goodGuy.name} show={goodGuy.show} img={goodGuy.imageName} phrase={goodGuy.catchPhrase}/> )
  
    return (
      <div className='wrapper'>
       {heroList}
      </div>
    )
  }
}



export default App;
