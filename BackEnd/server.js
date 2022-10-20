const express = require('express')
const courseRouters = require('./routes/courses')
const mongoose = require('mongoose')


//express
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/courses', courseRouters)


//db connection
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Hi the server is listening', process.env.PORT)
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