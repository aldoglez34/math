const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  courseCode: {
    type: String,
    trim: true,
    unique: true,
  },
  courseDescription: {
    type: String,
    trim: true,
    unique: true,
  },
  topics: [
    {
      subject: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  exams: [
    {
      subject: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
});

const Course = mongoose.model("Course", schema);

module.exports = Course;
