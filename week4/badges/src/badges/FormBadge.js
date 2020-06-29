import React, {Component} from 'react'
import BadList from './badgelist'
class FormBadge extends Component{

constructor(){
    super()
    this.state = {
        firstName:'',
        lastName:'',
        email:'',
        birthPlace:'',
        phone:'',
        food:'',
        info:'',
        newData:[]

        
    }
    this.handleChange = this.handleChange.bind(this)
    
 }

 handleChange = (e) =>{
   
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
   
   
  }
  handleSubmit = (e) => {
      e.preventDefault()
      let newForm = {
        firstName: this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email,
        birthPlace: this.state.birthPlace,
        phone: this.state.phone,
        food: this.state.food,
        info: this.state.info,
      }
      this.setState({newData : [newForm, ...this.state.newData]})

      console.log(newForm)
      
  }


render(){

    
    return(
        <div className='App'>
            
            <form onSubmit={this.handleSubmit}>
            <input 
            className='input' 
             type='text'
             placeholder='First Name' 
             name='firstName'
             minLength='3'
             value={this.state.firstName}
             required
             onChange={this.handleChange}
           />
           <input 
            className='input' 
             type='text'
             placeholder='Last Name' 
             name='lastName'
             minLength='3' 
             value={this.state.lastName}
             required
             onChange={this.handleChange}
           />
           
           <br/>
           
           <input 
            className='input' 
             type='email'
             placeholder='email' 
             name='email'
             minLength='3'
             value={this.state.email} 
             
             onChange={this.handleChange}
           />

        <input 
            className='input' 
             type='text'
             placeholder='Place of Birth' 
             name='birthPlace'
             required
             value={this.state.birthPlace} 
             minLength='3'
             onChange={this.handleChange}
           />
           <br/>

           <input 
            className='input' 
             type='text'
             placeholder='Phone' 
             name='phone'
             required
             value={this.state.phone} 
            minLength='3'
             onChange={this.handleChange}
           />
           <input 
            className='input' 
             type='text'
             placeholder='Favorite Food' 
             name='food'
             required
             value={this.state.food} 
             minLength='3'
             onChange={this.handleChange}
           />

           <br/>
           <textarea 
            className='input' 
             type='text'
             placeholder='Tell us about yourself' 
             name='info'
             
             value={this.state.info} 
             
             rows='7'
             cols='50'
             onChange={this.handleChange}
           />

           <br/>

           <button className='button'>Submit</button>
           </form>

           <BadList 
             newData={this.state.newData}
           />
     
        </div>
    )
}

}


   


export default FormBadge