const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    session_id: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["masterCard", "visa", "quiz", "grade"], //todo
      required: true,
    },
    currency: {
      type: String,
      enum: ["egp", "usd", "euro", "aed"],
      required: true,
    },
    discount: {
      discount_id: mongoose.Schema.Types.ObjectId,
      percentage: Number,
      start_date: Date,
      end_data: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("payment", PaymentSchema);
