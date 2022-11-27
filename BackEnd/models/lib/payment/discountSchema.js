const mongoose = require('mongoose')

const Schema = mongoose.Schema


const DiscountSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required : true
    },
    percentage: {
        type: Number,
        required : true
    },
    start_date: {
        type: Date,
        required : true
    },
    end_date: {
        type: Date,
        required : true
    },
}, {
    timestamps: true
})



module.exports = mongoose.model('discount', DiscountSchema)