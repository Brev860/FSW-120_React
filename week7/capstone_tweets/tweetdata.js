const { v4: uuidv4 } = require('uuid');

const tweets = [
    {
        tweet: `My favorite quote to help with hard times, "“These mountains that you are carrying, you were only supposed to climb.”
        – Najwa Zebian `,
        date: "2020-06-2",
        author:'Khalid',
        _id:uuidv4()
        
    },{
        tweet: `Good Morning to all my acheivers. Stay focused and remember, "uccess doesn’t just find you. You have to go out and get it."`,
        date: "2020-05-15",
        author:'Khalid',
        _id:uuidv4()
    },{
        tweet: "Life is for the living. See you goal and make it happen. Dream Big but do BIGGER",
        date: "2020-03-23",
        author:'Khalid',
        _id:uuidv4()
    },{
        tweet: "Never give up. You ony fail when you quite. Every mistake is a lesson not a failure.",
        date: "2020-01-04",
        author:'Khalid',
        _id:uuidv4()
    }
  ];



 module.exports = tweets