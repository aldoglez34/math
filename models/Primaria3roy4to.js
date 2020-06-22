const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Primaria3roy4toSchema = new Schema(
  {
    testName: { type: String, required: true },
    qNumber: { type: Number, required: true },
    qInstruction: { type: String, required: true },
    qTechnicalInstruction: { type: String, required: true },
    qComment: { type: String },
    qCorrectAnswer: { type: String, required: true },
  },
  { collection: "Primaria3roy4to" }
);

const Primaria3roy4to = mongoose.model(
  "Primaria3roy4to",
  Primaria3roy4toSchema
);

module.exports = Primaria3roy4to;
