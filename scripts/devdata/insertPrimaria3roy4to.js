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
          qTechnicalInstruction: "75 + 68",
          qCorrectAnswer: "143",
        },
        {
          testName: "Sumas 2",
          qNumber: 2,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "23 + 20",
          qCorrectAnswer: "43",
        },
        {
          testName: "Sumas 2",
          qNumber: 3,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "39 + 10",
          qCorrectAnswer: "49",
        },
        {
          testName: "Sumas 2",
          qNumber: 4,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "69 + 65",
          qCorrectAnswer: "134",
        },
        {
          testName: "Sumas 2",
          qNumber: 5,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "72 + 66",
          qCorrectAnswer: "138",
        },
        {
          testName: "Sumas 2",
          qNumber: 6,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "81 + 30",
          qCorrectAnswer: "111",
        },
        {
          testName: "Sumas 2",
          qNumber: 7,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "81 + 67",
          qCorrectAnswer: "148",
        },
        {
          testName: "Sumas 2",
          qNumber: 8,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "46 + 39",
          qCorrectAnswer: "85",
        },
        {
          testName: "Sumas 2",
          qNumber: 9,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "28 + 27",
          qCorrectAnswer: "55",
        },
        {
          testName: "Sumas 2",
          qNumber: 10,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "67 + 1",
          qCorrectAnswer: "68",
        },
        {
          testName: "Sumas 2",
          qNumber: 11,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "45 + 16",
          qCorrectAnswer: "61",
        },
        {
          testName: "Sumas 2",
          qNumber: 12,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "49 + 24",
          qCorrectAnswer: "73",
        },
        {
          testName: "Sumas 2",
          qNumber: 13,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "97 + 76",
          qCorrectAnswer: "173",
        },
        {
          testName: "Sumas 2",
          qNumber: 14,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "70 + 24",
          qCorrectAnswer: "94",
        },
        {
          testName: "Sumas 2",
          qNumber: 15,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "98 + 95",
          qCorrectAnswer: "193",
        },
        {
          testName: "Sumas 2",
          qNumber: 16,
          qInstruction:
            "Alejandra compró un folder de 59 pesos y un juego de plumas de 70 pesos. ¿Cuánto pagó en total por los dos productos?",
          qCorrectAnswer: "129",
          qCorrectAnswerComplement: "pesos",
        },
        {
          testName: "Sumas 2",
          qNumber: 17,
          qInstruction:
            "En un salón de clases hay 48 niños y 39 niñas. ¿Cuántos alumnos hay en total en el salón?",
          qCorrectAnswer: "87",
          qCorrectAnswerComplement: "alumnos",
        },
        {
          testName: "Sumas 2",
          qNumber: 18,
          qInstruction:
            "En un restaurante, la ensalada cuesta 24 pesos, el plato fuerte 57 pesos y el agua 22 pesos. ¿Cuánto se debe pagar por una comida completa?",
          qCorrectAnswer: "103",
          qCorrectAnswerComplement: "pesos",
        },
        {
          testName: "Sumas 2",
          qNumber: 19,
          qInstruction:
            "Juan tiene 39 años, mientras que Ana tiene 47 años. ¿Cuántos años suman entre los dos?",
          qCorrectAnswer: "86",
          qCorrectAnswerComplement: "años",
        },
        {
          testName: "Sumas 2",
          qNumber: 20,
          qInstruction:
            "En una urna hay 50 pelotas azules y 36 pelotas rojas. ¿Cuántas pelotas hay en total dentro de la urna?",
          qCorrectAnswer: "86",
          qCorrectAnswerComplement: "pelotas",
        },
        {
          testName: "Sumas 3",
          qNumber: 1,
          qInstruction: "Resolver la siguiente suma",
          qTechnicalInstruction: "939 + 57",
          qCorrectAnswer: "996",
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
