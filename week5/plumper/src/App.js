import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Services from './Services'
import Footer from './Footer'



function App() {
  return (
    <div className="App">
     <Header/>

     <Nav/>

        <Switch>
          <Route exact path='/'component={ () => <Home/>}/>
          <Route path='/Services'component={Services}/>
          <Route path='/About'component={About}/>

        </Switch>
       <Footer/>
    </div>
  );
}

export default App;
