const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
    unique: true,
  },
  content: [
    { qNumber: { type: Number, required: true } },
    { qInstruction: { type: String, required: true } },
    { qTechnicalInstruction: { type: String, required: true } },
    { qCorrectAnswer: { type: String, required: true } },
  ],
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
