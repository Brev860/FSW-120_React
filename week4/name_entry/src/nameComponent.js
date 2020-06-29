import React, {Component} from 'react'
import names from './names'
import AddName from './AddNames'
import ImportedNames from './ImportData'

class NameEntry extends Component {

  constructor(){
    super()
    this.state ={
      namelist: names,
      firstName:'',
      lastName: '',
       newName: []
     
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
     let newEntry = {
     firstName: this.state.firstName,
     lastName: this.state.lastName,
    
  }
  this.setState({newName : [newEntry, ...this.state.newName]})

  console.log(newEntry)
     
 }


  render(){

    const importList = this.state.namelist.map(list => <ImportedNames firstName={list.firstName} lastName={list.lastName}/>)
    
    return (
      <div className="App">
      

        <form onSubmit={this.handleSubmit}>
             <input className='input' type='text' name='firstName' placeholder='first name' onChange={this.handleChange}></input>
             <input className='input' type='text' name='lastName' placeholder='last name'onChange={this.handleChange}></input>
             <button className='button'>Add Name</button>
        </form>
    <h1>{this.state.firstName}{'  '}{this.state.lastName}</h1>
    {importList}
      <AddName newName={this.state.newName} />
       
      </div>
    );
  }
}

  export default NameEntry