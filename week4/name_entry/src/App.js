import React, { Component } from 'react';
import './App.css';
import NameEntry from './nameComponent';


class App extends Component {

  
  render(){
     return (
      <div className="App">
        <NameEntry/>
      </div>
    );
  }
 
}

export default App;
