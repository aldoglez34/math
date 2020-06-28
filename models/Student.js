const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  firebaseUID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  firstSurname: {
    type: String,
    trim: true,
    required: true,
  },
  secondSurname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      unique: true,
    },
  ],
  registeredAt: {
    type: Date,
    default: Date.now(),
  },
});

const Student = mongoose.model("Student", schema);

module.exports = Student;
