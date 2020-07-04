const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  topicCode: { type: String, required: true }, // ej. PRIM3y4_Suma o PRIM3y4_Resta
  name: { type: String, required: true, unique: true }, // ej. Sumas 1 o Restas 3
  description: { type: String, required: true }, // ej. "Este es un examen blah blah..."
  difficulty: {
    type: String,
    enum: ["Basic", "Intermediate", "Advanced", "Final"],
    required: true,
  }, // ej. Basic/Intermediate/Advanced/Final
  qCounter: { type: Number, required: true }, // ej. 20 (question counter)
  availableTo: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
      unique: true,
    },
  ],
  visits: [
    {
      student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
      score: { type: Number, default: 0 },
      date: { type: Date, default: Date.now() },
    },
  ],
  questions: [
    {
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
