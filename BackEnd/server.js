const express = require('express')
const courseRouter = require('./routes/courseRouter')
const mongoose = require('mongoose')


//express
const app = express()
const port = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/courseRouter', courseRouter)


//db connection
mongoose.connect('mongodb+srv://boda:boda123@cluster0.fdovrg9.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, () => {
            console.log('connected to db & the server is listening', port)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    res.json({ mssg: 'shal7a' })
})
app.post('/', (req, res) => {
    res.json({ mssg: 'shal7a' })
})


//listen for request