const mongoose = require('mongoose')

const Schema = mongoose.Schema


const DiscountSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    percentage: {
        type: Number,
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
}, {
    timestamps: true
})



module.exports = mongoose.model('discount', DiscountSchema)