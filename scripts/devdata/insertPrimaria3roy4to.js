const models = require("../../models");
const insertPrimaria5toy6to = require("./insertPrimaria5toy6to");

module.exports = () => {
  const data = [
    {
      testName: "Sumas 1",
      qNumber: 1,
      qInstruction: "Suma los siguientes números",
      qTechnicalInstruction: "3 + 3 =",
      qCorrectAnswer: "6",
    },
    {
      testName: "Sumas 1",
      qNumber: 2,
      qInstruction: "Suma los siguientes números",
      qTechnicalInstruction: "5 + 4 =",
      qCorrectAnswer: "9",
    },
    {
      testName: "Sumas 1",
      qNumber: 2,
      qInstruction: "Suma los siguientes números",
      qTechnicalInstruction: "5 + 5 =",
      qCorrectAnswer: "10",
    },
    {
      testName: "Sumas 1",
      qNumber: 3,
      qInstruction: "Suma los siguientes números",
      qTechnicalInstruction: "3 + 3 + 8 =",
      qComment: "Esta es la única pregunta que lleva 3 números a sumar",
      qCorrectAnswer: "14",
    },
    {
      testName: "Sumas 1",
      qNumber: 4,
      qInstruction: "Suma los siguientes números",
      qTechnicalInstruction: "15 + 17 =",
      qCorrectAnswer: "32",
    },
    {
      testName: "Restas 1",
      qNumber: 1,
      qInstruction: "Resta los siguientes números",
      qTechnicalInstruction: "3 - 3 =",
      qCorrectAnswer: "0",
    },
    {
      testName: "Restas 1",
      qNumber: 2,
      qInstruction: "Resta los siguientes números",
      qTechnicalInstruction: "5 - 4 =",
      qCorrectAnswer: "1",
    },
    {
      testName: "Restas 1",
      qNumber: 3,
      qInstruction: "Resta los siguientes números",
      qTechnicalInstruction: "3 - 3 - 8 =",
      qCorrectAnswer: "-8",
    },
    {
      testName: "Restas 1",
      qNumber: 4,
      qInstruction: "Resta los siguientes números",
      qTechnicalInstruction: "15 - 17 =",
      qCorrectAnswer: "-2",
    },
  ];

  return models.Primaria3roy4to.remove({})
    .then(() => {
      return models.Primaria3roy4to.insertMany(data);
    })
    .then((data) => {
      console.log("==================================");
      console.log("> " + data.length + " questions added for Primaria3roy4to");
      // go to the next test
      insertPrimaria5toy6to();
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
