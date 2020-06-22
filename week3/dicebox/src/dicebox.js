import React, { Component } from 'react';
import './App.css';


class DiceBox extends Component {

  constructor(){
    super()
    this.state ={
        roll1: 0,
        roll2: 0,
        roll3: 0,
        roll4: 0,
        roll5: 0
    }
    this.roll = this.roll.bind(this)

  
  }
  roll(){
    
    this.setState(prevState => {
      return {
          
        roll1: prevState.count = Math.floor(Math.random() * 7),
        roll2: prevState.count = Math.floor(Math.random() * 7),
        roll3: prevState.count = Math.floor(Math.random() * 7),
        roll4: prevState.count = Math.floor(Math.random() * 7),
        roll5: prevState.count = Math.floor(Math.random() * 7)
         
      }
      
      
   })
  }

  render(){
    return (
      <div className='wrapper'>
        <div className='title'>
          <h3>Click box to roll di</h3>
        </div>

          <div className='box'> 
          <div>          
            <strong>{this.state.roll1}</strong>
         </div>
         <div>
            <strong>{this.state.roll2}</strong>
            </div>
            <div>
            <strong>{this.state.roll3}</strong>
            </div>
            <div>
            <strong>{this.state.roll4}</strong>
            </div>
            <div>
            <strong>{this.state.roll5}</strong>
          </div>

          </div>

          <div>
          <button onClick={this.roll }><strong>Roll</strong></button>
          </div>      

      </div>
    )

  }
  
}

export default DiceBox;
