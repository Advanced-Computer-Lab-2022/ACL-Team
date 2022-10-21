const { deleteOne } = require('../models/courseSchema')
const userDb = require('../models/userSchema')
    // el mafrood wahed yeegy yn2l el login l hena
const deserializeUser = async(id, done) => {
    userDb.findById(id, function(err, user) {
        done(err, user)
    })






    module.exports = {
        deserializeUser,

    }
}