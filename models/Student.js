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
  exams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      unique: true,
    },
  ],
  attempts: [
    {
      exam: {
        type: Schema.Types.ObjectId,
        ref: "Exam",
      },
      grade: { type: Number, default: 0 },
      date: { type: Date, default: Date.now() },
    },
  ],
  rewards: [
    // medals and/or trophies
    {
      type: String,
      unique: true,
    },
  ],
  crowns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exam",
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
