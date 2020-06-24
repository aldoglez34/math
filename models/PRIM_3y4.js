const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    subject: { type: String, required: true },
    topics: [{ type: String, required: true }],
    material: [
      {
        type: { type: String, required: true },
        name: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    tests: [
      {
        testName: { type: String, required: true }, // nombre del test, ejemplo: Sumas 1
        qNumber: { type: Number, required: true }, // número de la pregunta, ejemplo: 1
        qInstruction: { type: String, required: true }, // instrucción de la pregunta, ejemplo: Resuelve lael siguiente problema
        qTechnicalInstruction: { type: String }, // instrucción técnica de la pregunta, ejemplo: 10 + 15
        qComment: { type: String }, // comentario de la pregunta, ejemplo: da tu resultado con dos decimales
        qCorrectAnswer: { type: String, required: true }, // resultado correcto de la pregunta, ejemplo: 15
        qCorrectAnswerComplement: { type: String }, // texto complemento de la respuesta, ejemplo: animales/plátanos/pesos
      },
    ],
  },
  { collection: "PRIM_3y4" }
);

const PRIM_3y4 = mongoose.model("PRIM_3y4", schema);

module.exports = PRIM_3y4;
