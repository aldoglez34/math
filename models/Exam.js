const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  topicCode: { type: String, required: true }, // ej. PRIM3y4_Suma o PRIM3y4_Resta
  subject: { type: String, required: true }, // ej. Aritmética
  name: { type: String, required: true, unique: true }, // ej. Sumas 1
  description: { type: String, required: true }, // ej. "Este es un examen blah blah..."
  difficulty: { type: String, required: true }, // Básico/Intermedio/Avanzado
  duration: { type: Number, required: true }, // 20 (minutes)
  qCounter: { type: Number, required: true }, // 20 (question counter)
  highestScores: [
    {
      student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
      date: { type: Date, default: Date.now() },
      score: { type: Number, required: true },
    },
  ],
  questions: [
    {
      qNumber: { type: Number, required: true }, // número de la pregunta, ejemplo: 1
      qInstruction: { type: String, required: true }, // instrucción de la pregunta, ejemplo: Resuelve el siguiente problema
      qTechnicalInstruction: { type: String }, // instrucción técnica de la pregunta, ejemplo: 10 + 15
      qComment: { type: String }, // comentario de la pregunta, ejemplo: da tu resultado con dos decimales
      qCorrectAnswer: { type: String, required: true }, // resultado correcto de la pregunta, ejemplo: 15
      qCorrectAnswerComplement: { type: String }, // texto complemento a la respuesta, ejemplo: animales/frutas/pesos}],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Exam = mongoose.model("Exam", schema);

module.exports = Exam;
