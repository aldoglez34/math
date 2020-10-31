const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }, // ej. Primaria 3ro y 4to
  school: {
    type: String,
    required: true,
    enum: ["Primaria", "Secundaria", "Preparatoria", "Universidad"],
  },
  price: {
    type: Number,
    required: true,
  },
  topicsSummary: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  topics: [
    {
      name: { type: String, required: true }, // ej. Suma/Resta/Multiplicación
      subject: { type: String, required: true }, // ej. Aritmética
      description: { type: String, required: true }, // ej. La suma es una de las cuatro operaciones básicas...
      reward: {
        name: { type: String }, // ej. "Medalla de Suma"
        link: { type: String }, // ej. "/images/medals/sumas1.png"
      },
      freestyle: {
        timer: { type: Number, required: true }, // ej. 10 (minutos)
        attempts: [
          // el leaderboard va a salir de aquí
          {
            studentId: {
              type: Schema.Types.ObjectId,
              ref: "Student",
            },
            username: { type: String },
            score: { type: Number, required: true },
            date: { type: Date, default: Date.now() },
          },
        ],
      },
      material: [
        // todo lo que tenga links: pdfs/videos/etc
        {
          type: { type: String },
          name: { type: String },
          link: { type: String },
        },
      ],
      exams: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exam",
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
