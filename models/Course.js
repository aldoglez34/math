const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  code: { type: String, required: true }, // ej. PRIM3y4
  name: { type: String, required: true }, // ej. Primaria 3ro y 4to
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  topics: [
    {
      subject: { type: String, required: true }, // ej. Aritmética
      name: { type: String, required: true, unique: true }, // ej. Suma/Resta/Multiplicación
      description: { type: String, required: true }, // ej. La suma es una de las cuatro operaciones básicas...
      toLearn: [{ type: String, unique: true }], // el. Aprenderás a sumar números, Aprenderás a blah blah (es un array)
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
