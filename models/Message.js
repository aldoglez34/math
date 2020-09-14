const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["Guest", "Student"],
  },
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  subject: {
    type: String,
    trim: true,
    required: true,
  },
  body: {
    type: String,
    trim: true,
  },
  seen: {
    type: Boolean,
    required: true,
    default: false,
  },
  answered: {
    type: Boolean,
    required: true,
    default: false,
  },
  sentAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", schema);

module.exports = Message;
