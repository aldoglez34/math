const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  isActive: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
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
      name: { type: String, required: true },
      subject: { type: String, required: true },
      description: { type: String, required: true },
      reward: {
        link: { type: String },
      },
      freestyle: {
        timer: { type: Number, required: true },
        attempts: [
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
