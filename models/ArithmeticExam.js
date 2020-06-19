const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirthmeticExamSchema = new Schema({
  code: {
    type: String,
    trim: true,
    unique: true,
  },
  instruction: {
    type: String,
    trim: true,
    required: true,
  },
});

const AirthmeticExam = mongoose.model("AirthmeticExam", AirthmeticExamSchema);

module.exports = AirthmeticExam;
