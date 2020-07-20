const express = require('express')
const app = express()


app.use(express.json())

app.use('/tweets', require('./routes'))

app.listen(80, ()=>{
    console.log('App is running on Port 80')
})

