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
    ],|
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
        enum: ["qText", "qImage", "qMulitpleChoice"],
        required: true,
      },
      // for qText
      qInstruction: { type: String, required: true }, // instrucción de la pregunta, ejemplo: Resuelve el siguiente problema
      qTechnicalInstruction: { type: String }, // instrucción técnica de la pregunta, ejemplo: 10 + 15

      // for qImage
      qComment: { type: String }, // comentario de la pregunta (o hint), ejemplo: da tu resultado con dos decimales

      // for qMulitpleChoice


      qCorrectAnswers: [{ type: String }], // resultado(s) correcto de la pregunta, ejemplo: [15] o [15, 67]
      qCorrectAnswersComplement: { type: String }, // texto complemento a la respuesta, ejemplo: animales/frutas/pesos}],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Exam = mongoose.model("Exam", schema);

module.exports = Exam;
