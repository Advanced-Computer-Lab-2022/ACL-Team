const express = require('express');

const mongoose = require('mongoose')
const session = require('express-session')
const hbs = require('express-handlebars')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')


//router imports
const courseRouter = require('./routes/course/courseRouter')
const loginRouter = require('./routes/auth/loginRouter')
const adminRouter = require('./routes/adminRouter')
const signUpRouter = require('./routes/auth/signUpRouter')
const instructorRouter = require('./routes/InstructorRouter')
const traineeRouter = require('./routes/traineeRouter')
const userRouter = require('./routes/userRouter')

//express
const port = process.env.PORT || 3000;
const app = express()

app.use(cors())
dotenv.config();



//initialization
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view Engine', 'hbs');

app.use(express.static(__dirname + '/frontEnd'));

// app.use(session({
//     secret: process.env.secret,
//     resave: false,
//     saveUninitialized: true

// }))



app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
 //app.use(passport.initialize())
 //app.use(passport.session())



//db connection   
const conn = process.env.MONGO_URI || 'mongodb+srv://mohamed4016:1234@cluster0.iblfteg.mongodb.net/test';
mongoose.connect(conn)
    .then(() => {
        app.listen(port, () => {
            console.log('connected to db & the server is listening on ', port)
        })
    })
    .catch((error) => {
        console.log(error)
    })



//middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/course', courseRouter)
app.use('/admin', adminRouter)
app.use('/signUp', signUpRouter)
app.use('/login', loginRouter)
app.use('/instructor', instructorRouter)
app.use('/trainee', traineeRouter)
app.use('/user', userRouter)












app.get('/', (req, res) => {
    res.json({
        mssg: 'aaaa'
    })
})
app.post('/', (req, res) => {
    res.json({
        mssg: 'aaaaa'
    })
})
