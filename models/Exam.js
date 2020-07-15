const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  topicCode: { type: String, required: true }, // ej. PRIM3y4_Suma o PRIM3y4_Resta
  topicName: { type: String, required: true }, // ej. Suma, Resta, etc
  name: { type: String, required: true, unique: true }, // ej. Sumas 1 o Restas 3
  description: { type: String, required: true }, // ej. "Este es un examen blah blah..."
  duration: { type: Number, required: true }, // ej. 30 (mins)
  difficulty: {
    type: String,
    enum: [
      "Basic",
      "Intermediate-Low",
      "Intermediate-High",
      "Advanced",
      "Final",
      "Freestyle",
    ],
    required: true,
  },
  qCounter: { type: Number, required: true }, // ej. 20 (question counter)
  leaderboard: [
    {
      username: { type: String },
      grade: { type: Number },
      date: { type: Date, default: Date.now() },
    },
  ],
  questions: [
    {
      qType: {
        type: String,
        enum: [
          "qText",
          "qImage",
          "qMultipleChoiceText",
          "qMultipleChoiceImage",
        ],
        required: true,
      },
      qInstruction: { type: String, required: true },
      qTechnicalInstruction: { type: String }, // for qText
      qImgLink: { type: String }, // for qImage
      qPossibleAnswers: [{ type: String }], // for qMulitpleChoice
      qCorrectAnswers: [
        {
          answer: { type: String },
          text: { type: String },
          location: { type: String, default: "right" },
        },
      ],
      qComment: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Exam = mongoose.model("Exam", schema);

module.exports = Exam;
