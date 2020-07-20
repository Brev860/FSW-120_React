const express = require('express')
const tweetRouter = express.Router()
const tweets = require('./tweetdata')
const { v4: uuidv4 } = require('uuid');

//routes
//Get All
tweetRouter.get('/', (req,res) =>{
    res.send(tweets)
})

//Post
tweetRouter.post('/', (req,res ) =>{
    const newTweet = req.body
    newTweet._id = uuidv4()
    tweets.push(newTweet)
    res.send(newTweet)
})
//Delete
tweetRouter.delete('/:tweetId', (req, res) =>{
    const tweetId = req.params.tweetId
    const tweetIndex = tweets.findIndex(blog => tweets._id === tweetId)
    tweets.splice(tweetIndex, 1)
    res.send(`Successfully removed post ${tweetId}`)
})


module.exports = tweetRouter




