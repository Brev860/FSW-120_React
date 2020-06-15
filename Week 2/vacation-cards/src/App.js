import React from 'react';
import './App.css';
import vacationSpots from './locations'
import Spots from './spots'




function App() {
const cards = vacationSpots.map(spots => <Spots place={spots.place} price={spots.price} season={spots.timeToGo} img={spots.img}/>)

  return (
    <div className="App">
      
      {cards}
        
    </div>
  );
}

export default App;
