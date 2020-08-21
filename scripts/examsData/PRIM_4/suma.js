module.exports = [
  {
    examCode: "PRIM_4_Suma_Exam01",
    topicCode: "PRIM_4_Suma",
    topicName: "Suma",
    name: "Sumas 1",
    description: "Harás sumas sin acarreo menores a 1,000",
    duration: 30,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma: 100+100",
        qCorrectAnswers: [{ answer: "200" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 110+100",
        qCorrectAnswers: [{ answer: "210" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 110+110",
        qCorrectAnswers: [{ answer: "220" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 120+110",
        qCorrectAnswers: [{ answer: "230" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 120+120",
        qCorrectAnswers: [{ answer: "240" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Suma_Exam02",
    topicCode: "PRIM_4_Suma",
    topicName: "Suma",
    name: "Sumas 2",
    description: "Harás sumas con un acarreo menores a 1,000",
    duration: 30,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma: 134+82",
        qCorrectAnswers: [{ answer: "216" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 148+113",
        qCorrectAnswers: [{ answer: "261" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 167+125",
        qCorrectAnswers: [{ answer: "292" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 159+129",
        qCorrectAnswers: [{ answer: "288" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 165+29",
        qCorrectAnswers: [{ answer: "194" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Suma_Exam03",
    topicCode: "PRIM_4_Suma",
    topicName: "Suma",
    name: "Sumas 3",
    description: "Harás sumas con dos y tres acarreos mayores a 1,000",
    duration: 30,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma: 834+288",
        qCorrectAnswers: [{ answer: "1122" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 883+458",
        qCorrectAnswers: [{ answer: "1341" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 984+659",
        qCorrectAnswers: [{ answer: "1122" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 1642+1496",
        qCorrectAnswers: [{ answer: "3138" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 2484+1059",
        qCorrectAnswers: [{ answer: "3543" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Suma_Exam04",
    topicCode: "PRIM_4_Suma",
    topicName: "Suma",
    name: "Sumas 4",
    description: "Harás sumas con números de 5 cifras",
    duration: 20,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma: 10424+10433",
        qCorrectAnswers: [{ answer: "20857" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 14514+11464",
        qCorrectAnswers: [{ answer: "25978" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 24111+17564",
        qCorrectAnswers: [{ answer: "41675" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 24298+18465",
        qCorrectAnswers: [{ answer: "42763" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 24849+17859",
        qCorrectAnswers: [{ answer: "42708" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Suma_Exam05",
    topicCode: "PRIM_4_Suma",
    topicName: "Suma",
    name: "Sumas 5",
    description: "Resolverás problemas usando la suma",
    duration: 30,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Carlos se compró 2 videojuegos, uno le costó 1,499 pesos y el otro 1,299 pesos. ¿Cuánto pago en total Carlos por los videojuegos?",
        },
        qCorrectAnswers: [
          { answer: "2798", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Diego se compró una consola de videojuegos que costaba 5,499 pesos, un control que costaba 2,100 pesos y un videojuego que costaba 1,549 pesos. ¿Cuánto pagó en total Diego?",
        },
        qCorrectAnswers: [
          { answer: "9148", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Laura corre tres días a la semana. El primer día corrió 14,500 metros, el segundo día corrió 9,700 metros y el tercer día corrió 13,700 metros. ¿Cuántos metros corrió Laura en esos tres días?",
        },
        qCorrectAnswers: [
          { answer: "37900", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Una persona se compró una impresora que le costó 4,700 pesos y una calculadora que costaba 875 pesos. ¿Cuánto pagó en total esta persona?",
        },
        qCorrectAnswers: [
          { answer: "5575", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Ernesto trabaja tres semanas en un restaurante. La primera semana ganó 1,400 pesos, la segunda semana ganó 1,500 pesos más que la primera semana y la tercera semana ganó 1,200 pesos. ¿Cuánto ganó durante esas tres semana Ernesto ?",
        },
        qCorrectAnswers: [
          { answer: "4100", complement: "pesos", placement: "right" },
        ],
      },
    ],
  },
];
