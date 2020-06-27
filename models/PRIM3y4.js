const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    topics: [
      {
        subject: { type: String, required: true }, // ej. Aritmética
        name: { type: String, required: true, unique: true }, // ej. Suma/Resta/Multiplicación
        description: { type: String, required: true }, // ej. La suma es una de las cuatro operaciones básicas...
        exams: [
          // nombres de los exámenes, junto con su duración y nivel, ej. Básico, Intermedio o Avanzad
          {
            name: { type: String, required: true },
            description: { type: String, required: true },
            level: { type: String, required: true },
            duration: { type: Number, required: true },
            qCounter: { type: Number, required: true },
          },
        ],
        toLearn: [{ type: String, unique: true }],
        material: [
          // todo lo que tenga links: pdfs/videos/etc
          {
            type: { type: String, required: true },
            name: { type: String, required: true, unique: true },
            link: { type: String, required: true, unique: true },
          },
        ],
      },
    ],
    exams: [
      {
        name: { type: String, required: true }, // nombre del examen, ejemplo: Sumas 1
        qNumber: { type: Number, required: true }, // número de la pregunta, ejemplo: 1
        qInstruction: { type: String, required: true }, // instrucción de la pregunta, ejemplo: Resuelve el siguiente problema
        qTechnicalInstruction: { type: String }, // instrucción técnica de la pregunta, ejemplo: 10 + 15
        qComment: { type: String }, // comentario de la pregunta, ejemplo: da tu resultado con dos decimales
        qCorrectAnswer: { type: String, required: true }, // resultado correcto de la pregunta, ejemplo: 15
        qCorrectAnswerComplement: { type: String }, // texto complemento a la respuesta, ejemplo: animales/frutas/pesos
      },
    ],
  },
  { collection: "PRIM3y4" }
);

const PRIM3y4 = mongoose.model("PRIM3y4", schema);

module.exports = PRIM3y4;
