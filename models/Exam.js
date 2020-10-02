const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  // examCode: { type: String, required: true, unique: true }, // ej. 01, 02, 03...
  // topicCode: { type: String, required: true }, // ej. PRIM3y4_Suma o PRIM3y4_Resta
  // topicName: { type: String, required: true }, // ej. Suma, Resta, etc
  // qCounter: { type: Number, required: true }, // ej. 20 (question counter)
  difficulty: {
    type: String,
    enum: [
      "Basic",
      "Basic-Intermediate",
      "Intermediate",
      "Intermediate-Advanced",
      "Advanced",
    ],
    required: true,
  },
  name: {
    type: String,
    required: true,
  }, // ej. Sumas 1 o Restas 3
  description: { type: String, required: true }, // ej. "Este es un examen blah blah..."
  duration: { type: Number, required: true }, // ej. 30 (mins)
  questions: [
    {
      qInstruction: { type: String, required: true },
      qTechnicalInstruction: {
        type: {
          type: String,
          enum: ["text", "image"],
        },
        text: { type: String },
        imageLink: { type: String },
      },
      qMultipleChoice: {
        type: {
          type: String,
          enum: ["text", "image"],
        },
        textChoices: [{ type: String }],
        imageChoices: [{ type: String }],
      },
      qCorrectAnswers: [
        {
          answer: { type: String, required: true },
          complement: { type: String },
          placement: { type: String },
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
