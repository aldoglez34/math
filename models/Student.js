const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firebaseUID: {
    type: String,
    trim: true,
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
    unique: true,
    required: true,
  },
  courses: [
    {
      course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      courseName: { type: String },
      lastGrade: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
