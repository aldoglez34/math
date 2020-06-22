const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Primaria5toy6toSchema = new Schema(
  {
    testName: { type: String, required: true },
    qNumber: { type: Number, required: true },
    qInstruction: { type: String, required: true },
    qTechnicalInstruction: { type: String, required: true },
    qComment: { type: String },
    qCorrectAnswer: { type: String, required: true },
  },
  { collection: "Primaria5toy6to" }
);

const Primaria5toy6to = mongoose.model(
  "Primaria5toy6to",
  Primaria5toy6toSchema
);

module.exports = Primaria5toy6to;
