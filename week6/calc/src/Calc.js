import React, {Component} from 'react'


class Calc extends Component{
    constructor(){
         super()
         this.state = {
             a: 0,
             b: 0,
             sum: ''
         }
  this.handleEvent = this.handleEvent.bind(this)
  this.add = this.add.bind(this) 
  this.sub = this.sub.bind(this)
  this.mult = this.mult.bind(this)
  this.div = this.div.bind(this)     
    }
   handleEvent(e){

    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})  
    
   }

   add(e){
       e.preventDefault()
       const num1=this.state.a
       const num2=this.state.b
       const results = parseInt(num1) + parseInt(num2)
        this.setState({sum: results })
     console.log(results)
      
   }
   sub(e){
    e.preventDefault()
    const num1=this.state.a
    const num2=this.state.b
    const results = parseInt(num1) - parseInt(num2)
     this.setState({sum: results })
  console.log(results)
   
}

mult(e){
    e.preventDefault()
    const num1=this.state.a
    const num2=this.state.b
    const results = parseInt(num1) * parseInt(num2)
     this.setState({sum: results })
  console.log(results)
   
}

div(e){
    e.preventDefault()
    const num1=this.state.a
    const num2=this.state.b
    const results = parseInt(num1) / parseInt(num2)
     this.setState({sum: results })
  console.log(results)
   
}

    render(){
        return(

            <div className='wrapper'>
    
            <form className='inputs'>
    
                <input type='text' name='a' onChange={this.handleEvent} placeholder='enter 1st number' />
                <br/>
                <input type='text' name='b' onChange={this.handleEvent} placeholder='enter 2nd number' />
                 <br/>
                <button className='button' style={{backgroundColor:'red'}} onClick={this.add}>Add</button>
                <button className='button' style={{backgroundColor:'red'}} onClick={this.sub}>Sub</button>
                <button className='button' style={{backgroundColor:'red'}} onClick={this.mult}>Mult</button>
                <button className='button' style={{backgroundColor:'red'}} onClick={this.div}>Div</button>
            </form>

               <h1 className='results'>Equals:{this.state.sum}</h1>

    
            </div>
        )
        
    }
}


    
export default Calc