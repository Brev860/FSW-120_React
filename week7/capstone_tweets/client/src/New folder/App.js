import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './header'
import TextIcon from './TextIcon'
import AddText from './Addtext'
import Home from './Home'
import Nav from './Nav'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
 

function App() {
  const [tweets, setTweets] = useState([])
  
  const getTweets = () =>{
    axios.get('/tweets') 
      .then(res => setTweets(res.data))
      .catch(err => alert(err))
  }

    const postTweets = (newTweets) =>{
    axios.post('/tweets', newTweets)
    .then(res => {
      setTweets(preTweets => [...preTweets, res.data])
    })
    .catch(err => alert(err))
  }

  const deleteTweet = (tweetId) =>{
    axios.delete(`/tweets/${tweetId}`)
    .then(res => {
      setTweets(prevTweet => prevTweet.filter(tweet => tweet._id !== tweetId))
    })
    .catch(err => alert(err))
  }
   useEffect( () =>{
      getTweets()
   }, [])
   

      
  return ( 
    <div>
     
      <Header/>

      <TextIcon/>


       {tweets.map(tweet => <Home {...tweet} key={tweet.tweet, tweet.author, tweet.date} dltTweet={deleteTweet} />)}
       <Nav />
       <Switch>
         <Route path='/Addtext' component={ () => <AddText addTweet={postTweets} />} />
         <Route path='/Home' component={Home} />
         <Route path='' />
       </Switch>
    </div>
  );
}

export default App;
