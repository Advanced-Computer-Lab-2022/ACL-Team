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
        default: 'trainee'
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

UserSchema.statics.signup = async function (email, username, password, firstname, lastname, gender,role) {

    const emailExists = await this.findOne({
        email
    })
    const usernameExists = await this.findOne({
        username
    })

    if (emailExists)
        throw Error('Email already in use')
    if (usernameExists)
        throw Error('Username already in use')
    if (!validator.isEmail(email))
        throw Error('Email is not valid')
    // if(!validator.isStrongPassword(password))
    //     throw Error('Email is not valid')

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({
        email,
        username,
        password: hash,
        name: {
            firstname: firstname,
            lastname: lastname
        },
        gender,
        role
    })

    return user

}
UserSchema.statics.login = async function (email, password) {

    if (!email || !password)
        throw Error('All fields must be filled')

    const user = await this.findOne({
        email
    })

    if (!user)
        throw Error('Incorrect email')

    const match = await bcrypt.compare(password, user.password)

    if (!match)
        throw Error('Incorrect password')

    return user

}
UserSchema.statics.changePassword = async function (email, oldPassword, newPassword) {

    if (!email || !oldPassword)
        throw Error('All fields must be filled')

    const user = await this.findOne({
        email
    })

    if (!user)
        throw Error('Incorrect email')

    const match = await bcrypt.compare(oldPassword, user.password)

    if (!match)
        throw Error('Incorrect password')

    await this.findByIdAndUpdate({
        email: email
    }, {
        password: newPassword
    })

    return user

}
UserSchema.statics.deleteUser = async function (user_id) {
    await this.deleteOne({
        _id: user_id
    })
}

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)