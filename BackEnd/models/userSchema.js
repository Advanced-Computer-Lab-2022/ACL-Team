const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema


const UserSchema = new Schema({

    username: {
        type: String,
        required: 'Username is required',
        unique: true

    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']


        //had y3ml regex lel email
    },
    password: {
        type: String,
        required: true
    },
    name: {
        "firstname": {
            "type": "string",
            required: true
        },
        "lastname": {
            "type": "string",
            required: true
        }
    },
    gender: {
        type: String,
        required: true

    },
    role: {
        type: String,
        enum: ['trainee', 'corporate_trainee', 'instructor', 'admin'],
        required: true
    },
    country: {
        type: String,

    },
    achievments: [{
        achievment_id: String, //TODO
    }],
    notifications: [{
        notification_id: mongoose.Schema.Types.ObjectId, //TODO
    }]

    //lesa fee ba2y
}, {
    timestamps: true,
    collection: "user"
})



module.exports = mongoose.models.User || mongoose.model('User', UserSchema)