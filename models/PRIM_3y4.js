const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subject: { type: String, required: true },
    topic: { type: String, required: true },
    material: [
      {
        type: { type: String, required: true },
        name: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    tests: [
      {
        testName: { type: String, required: true },
        qNumber: { type: Number, required: true },
        qInstruction: { type: String, required: true },
        qTechnicalInstruction: { type: String },
        qComment: { type: String },
        qCorrectAnswer: { type: String, required: true },
        qCorrectAnswerComplement: { type: String },
      },
    ],
  },
  { collection: "PRIM_3y4" }
);

const PRIM_3y4 = mongoose.model("PRIM_3y4", schema);

module.exports = PRIM_3y4;
