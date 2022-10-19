require('dotenv').config()

const express = require('express')


//express
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes

app.get('/', (req, res) => {
    res.json({ mssg: 'shal7a' })
})


//listen for request

app.listen(process.env.PORT, () => {
    console.log('Hi the server is listening')
})