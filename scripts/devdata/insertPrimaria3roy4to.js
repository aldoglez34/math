const models = require("../../models");
const insertStudents = require("./insertStudents");

module.exports = () => {
  const data = [
    {
      subject: "Aritmética",
      topic: "Suma",
      material: [
        {
          type: "pdf",
          name: "Introducción a la suma",
          link: "/pdf/sum/Introducción sumas.pdf",
        },
        {
          type: "pdf",
          name: "Sumas (Ejemplos)",
          link: "/pdf/sum/Sumas.pdf",
        },
        {
          type: "video",
          name: "Introducción a la suma",
          link: "https://youtu.be/UFclruOiQRg",
        },
      ],
      tests: [
        {
          testName: "Sumas 1",
          qNumber: 1,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "10 + 7",
          qCorrectAnswer: "17",
        },
        {
          testName: "Sumas 1",
          qNumber: 2,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "14 + 8",
          qCorrectAnswer: "22",
        },
        {
          testName: "Sumas 1",
          qNumber: 3,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "16 + 6",
          qCorrectAnswer: "22",
        },
        {
          testName: "Sumas 1",
          qNumber: 4,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "17 + 13",
          qCorrectAnswer: "30",
        },
        {
          testName: "Sumas 1",
          qNumber: 5,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "14 + 13",
          qCorrectAnswer: "27",
        },
        {
          testName: "Sumas 1",
          qNumber: 6,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "17 + 3",
          qCorrectAnswer: "20",
        },
        {
          testName: "Sumas 1",
          qNumber: 7,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "11 + 8",
          qCorrectAnswer: "19",
        },
        {
          testName: "Sumas 1",
          qNumber: 8,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "20 + 10",
          qCorrectAnswer: "30",
        },
        {
          testName: "Sumas 1",
          qNumber: 9,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "16 + 12",
          qCorrectAnswer: "28",
        },
        {
          testName: "Sumas 1",
          qNumber: 10,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "7 + 1",
          qCorrectAnswer: "8",
        },
        {
          testName: "Sumas 1",
          qNumber: 11,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "12 + 8",
          qCorrectAnswer: "20",
        },
        {
          testName: "Sumas 1",
          qNumber: 12,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "19 + 0",
          qCorrectAnswer: "19",
        },
        {
          testName: "Sumas 1",
          qNumber: 13,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "17 + 16",
          qCorrectAnswer: "33",
        },
        {
          testName: "Sumas 1",
          qNumber: 14,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "13 + 1",
          qCorrectAnswer: "14",
        },
        {
          testName: "Sumas 1",
          qNumber: 15,
          qInstruction: "Resuelve la siguiente suma",
          qTechnicalInstruction: "16 + 12",
          qCorrectAnswer: "28",
        },
        {
          testName: "Sumas 1",
          qNumber: 16,
          qInstruction:
            "Juan tiene 10 años, mientras que Ana tiene 20 años. ¿Cuántos años suman entre los dos?",
          qCorrectAnswer: "28",
          qCorrectAnswerComplement: "años",
        },
        {
          testName: "Sumas 1",
          qNumber: 17,
          qInstruction:
            "Ernesto compró un jugo de 14 pesos y unos chicles de 10 pesos. ¿Cuánto pagó en total?",
          qCorrectAnswer: "24",
          qCorrectAnswerComplement: "pesos",
        },
        {
          testName: "Sumas 1",
          qNumber: 18,
          qInstruction:
            "En una granja hay 20 cerdos y 15 vacas. ¿Cuántos animales hay en total en la granja?",
          qCorrectAnswer: "35",
          qCorrectAnswerComplement: "animales",
        },
        {
          testName: "Sumas 1",
          qNumber: 19,
          qInstruction:
            "Una urna tiene 12 pelotas amarillas y 20 pelotas rojas. ¿Cuántas pelotas hay en total dentro de la urna?",
          qCorrectAnswer: "22",
          qCorrectAnswerComplement: "pelotas",
        },
        {
          testName: "Sumas 1",
          qNumber: 20,
          qInstruction:
            "Enrique comió 7 platanos ayer y 5 platanos hoy. ¿Cuántos plátanos se ha comido?",
          qCorrectAnswer: "12",
          qCorrectAnswerComplement: "plátanos",
        },
        {
          testName: "Sumas 2",
          qNumber: 1,
          qInstruction: "Resolver la siguiente suma",
          qCorrectAnswer: "83",
        },
        {
          testName: "Sumas 2",
          qNumber: 2,
          qInstruction: "Resolver la siguiente suma",
          qCorrectAnswer: "148",
        },
        {
          testName: "Sumas 2",
          qNumber: 3,
          qInstruction: "Resolver la siguiente suma",
          qCorrectAnswer: "69",
        },
      ],
    },
  ];

  return models.PRIM_3y4.remove({})
    .then(() => {
      return models.PRIM_3y4.insertMany(data);
    })
    .then((data) => {
      console.log("==================================");
      console.log("> " + data.length + " questions added for PRIM_3y4");
      // go to the next test
      insertStudents();
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
