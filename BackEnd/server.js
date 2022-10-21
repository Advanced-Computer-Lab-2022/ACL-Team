const express = require('express');
const courseRouter = require('./routes/courseRouter');
const mongoose = require('mongoose');
const session = require('express-session');
const hbs = require('express-handlebars');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//express
const app = express()

const port = process.env.PORT || 3000;

//initialization
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view Engine', 'hbs');

app.use(express.static(__dirname + '/frontEnd'));

app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true

}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    //w8 for user model
})


mongoose.connect('mongodb+srv://boda:boda123@cluster0.fdovrg9.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, () => {
            console.log('connected to db & the server is listening', port)
        })
    })
    .catch((error) => {
        console.log(error)
    })

const userDb = require('../models/userSchema')

//middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/courseRouter', courseRouter)


//db connection





app.get('/', (req, res) => {
    res.json({ mssg: 'shal7a' })
})
app.post('/', (req, res) => {
    res.json({ mssg: 'shal7a' })
})


//listen for request