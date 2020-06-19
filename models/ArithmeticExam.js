const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArithmeticExamSchema = new Schema({
  examCode: {
    type: String,
    required: true,
  },
  qNumber: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionProb: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const ArithmeticExam = mongoose.model("ArithmeticExam", ArithmeticExamSchema);

module.exports = ArithmeticExam;
