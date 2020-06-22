const models = require("../../models");
const insertStudents = require("./insertStudents");

module.exports = () => {
  const data = [
    {
      testName: "Multiplicación 1",
      qNumber: 1,
      qInstruction: "Multiplica los siguientes números",
      qTechnicalInstruction: "3 x 3 =",
      qCorrectAnswer: "9",
    },
    {
      testName: "Multiplicación 1",
      qNumber: 2,
      qInstruction: "Multiplica los siguientes números",
      qTechnicalInstruction: "5 x 4 =",
      qCorrectAnswer: "20",
    },
    {
      testName: "Multiplicación 1",
      qNumber: 2,
      qInstruction: "Multiplica los siguientes números",
      qTechnicalInstruction: "5 x 5 =",
      qCorrectAnswer: "25",
    },
    {
      testName: "Multiplicación 1",
      qNumber: 3,
      qInstruction: "Multiplicación los siguientes números",
      qTechnicalInstruction: "3 x 3 x 8 =",
      qCorrectAnswer: "72",
    },
    {
      testName: "Multiplicación 1",
      qNumber: 4,
      qInstruction: "Multiplicación los siguientes números",
      qTechnicalInstruction: "15 x 17 =",
      qCorrectAnswer: "255",
    },
    {
      testName: "División 2",
      qNumber: 1,
      qInstruction: "Divide los siguientes números",
      qTechnicalInstruction: "3 / 3 =",
      qCorrectAnswer: "1",
    },
    {
      testName: "División 2",
      qNumber: 2,
      qInstruction: "Divide los siguientes números",
      qTechnicalInstruction: "5 / 4 =",
      qComment: "Con sólo dos decimales",
      qCorrectAnswer: "1.25",
    },
    {
      testName: "División 2",
      qNumber: 3,
      qInstruction: "Divide los siguientes números",
      qTechnicalInstruction: "3 / 8 =",
      qComment: "Con 3 decimales",
      qCorrectAnswer: "0.375",
    },
    {
      testName: "División 2",
      qNumber: 4,
      qInstruction: "Divide los siguientes números",
      qTechnicalInstruction: "17 / 3 =",
      qComment: "Con sólo un decimal",
      qCorrectAnswer: "5.6",
    },
  ];

  return models.Primaria5toy6to.remove({})
    .then(() => {
      return models.Primaria5toy6to.insertMany(data);
    })
    .then((data) => {
      console.log("> " + data.length + " questions added for Primaria5toy6to");
      // insert students next
      insertStudents();
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
