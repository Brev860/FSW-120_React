import React, {Component} from 'react'
import Box from './box'
import color from './color'

class App extends Component{
  
    constructor(){
        super()
        this.state ={
            colors: color,
        }
        this.colorChange = this.colorChange.bind(this)

    }

    
    colorChange(){
        this.setState(prevState =>{
        const squareColor = prevState.colors.map(box =>{
            if(box === 'white'){
              box = 'black'
            }else if(box === 'black'){
              box = 'white'
            }
            return box
        })
        return {
            colors: squareColor
        }
      })
    }

        render(){
            return(
          <div className='wrapper'>       
               <div >
                  <Box backgroundColor= {this.state.colors[0]} colorChange={this.colorChange} />
                </div>

                <div  >
                  <Box backgroundColor= {this.state.colors[1]} colorChange={this.colorChange} />
                </div>

                <div  >
                  <Box backgroundColor= {this.state.colors[2]} colorChange={this.colorChange} />
                </div>

                <div  >
                  <Box backgroundColor= {this.state.colors[3]} colorChange={this.colorChange} />
                </div>
            
          </div>     
            )
        }
    }


export default App

