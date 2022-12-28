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
    payment_title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      required: true,
    },
    type: {
      type: String,
      enum: ["card", "quiz", "grade"], //todo
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
