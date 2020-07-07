const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true }, // ej. Primaria 3ro y 4to
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  topics: [
    {
      topicCode: { type: String, required: true }, // ej. PRIM3y4_Suma o PRIM3y4_Resta
      subject: { type: String, required: true }, // ej. Aritmética
      name: { type: String, required: true, unique: true }, // ej. Suma/Resta/Multiplicación
      description: { type: String, required: true }, // ej. La suma es una de las cuatro operaciones básicas...
      reward: { type: String, required: true }, // ej. "/images/medals/sumas1.png"
      toLearn: [{ type: String, unique: true }], // ej. Aprenderás a sumar números, Aprenderás a blah blah (es un array)
      freestyleTimer: { type: Number, required: true }, // ej. 10 (minutos)
      material: [
        // todo lo que tenga links: pdfs/videos/etc
        {
          type: { type: String, required: true },
          name: { type: String, required: true, unique: true },
          link: { type: String, required: true, unique: true },
        },
      ],
      exams: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exam",
          unique: true,
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Course = mongoose.model("Course", schema);

module.exports = Course;
