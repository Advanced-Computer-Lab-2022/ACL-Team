const { deleteOne } = require('../models/courseSchema')
const userDb = require('../models/userSchema')
    // el mafrood wahed yeegy yn2l el login l hena
const deserializeUser = async(id, done) => {
    userDb.findById(id, function(err, user) {
        done(err, user)
    })

    const signUp = async (req,res) => {
        const {id , username , password} = req.body

        try{
            const user = await courseDb.create({ id, username , password})
            res.status(200).json(user)

        }
        catch (error) { 
            res.status(404).json({error: error.message})
        }
    }

    






    module.exports = {
        deserializeUser,
        signUp

    }
}