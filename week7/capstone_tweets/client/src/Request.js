import React, {useState, useEffect} from 'react';
import './App.css';
import AddText from './Addtext'
import Home from './Home'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Welcome from './Welcome';
import Search  from './search';
import MailingList from './mailinglist';
 

function Request() {
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
     
     <Switch>
         <Route path='/Addtext' component={ () => <AddText addTweet={postTweets} />} />
          <Route path='/Home' render={()=><div>{tweets.map(tweet => <Home {...tweet} key={tweet.tweet} dltTweet={deleteTweet} />)}</div>} />
          <Route exact path='/' component={Welcome}/>
          <Route path='/Search' component={Search} />
          <Route path='/Inbox' component={MailingList}/>
       </Switch>


       
     
       
    </div>
  );
}

export default Request ;
