module.exports = [
  {
    examCode: "PRIM_4_SistemasDeNumeración_Exam01",
    topicCode: "PRIM_4_SistemasDeNumeración",
    topicName: "Sistemas de Numeración",
    name: "Unidades de Tiempo",
    description: "Convertirás unidades de tiempo mayores a menores y viceversa",
    duration: 30,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "En 2 minutos hay:",
        qCorrectAnswers: [
          { answer: "120", complement: "segundos", placement: "right" },
        ],
      },
      {
        qInstruction: "En 1 minuto hay:",
        qCorrectAnswers: [
          { answer: "60", complement: "segundos", placement: "right" },
        ],
      },
      {
        qInstruction: "En 1 hora hay:",
        qCorrectAnswers: [
          { answer: "60", complement: "minutos", placement: "right" },
        ],
      },
      {
        qInstruction: "60 segundos son:",
        qCorrectAnswers: [
          { answer: "1", complement: "minuto", placement: "right" },
        ],
      },
      {
        qInstruction: "120 segundos son:",
        qCorrectAnswers: [
          { answer: "2", complement: "minutos", placement: "right" },
        ],
      },
      {
        qInstruction: "180 segundos son:",
        qCorrectAnswers: [
          { answer: "3", complement: "minutos", placement: "right" },
        ],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemasDeNumeración_Exam02",
    topicCode: "PRIM_4_SistemasDeNumeración",
    topicName: "Sistemas de Numeración",
    name: "Unidades de Longitud 1",
    description: "Convertirás unidades de longitud mayores a menores",
    duration: 30,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "En 1 metro hay",
        qCorrectAnswers: [
          { answer: "100", complement: "centímetros", placement: "right" },
        ],
      },
      {
        qInstruction: "En 2 metros hay",
        qCorrectAnswers: [
          { answer: "200", complement: "centímetros", placement: "right" },
        ],
      },
      {
        qInstruction: "En 1 metro hay",
        qCorrectAnswers: [
          { answer: "1000", complement: "milímetros", placement: "right" },
        ],
      },
      {
        qInstruction: "En 2 metros hay",
        qCorrectAnswers: [
          { answer: "2000", complement: "milímetros", placement: "right" },
        ],
      },
      {
        qInstruction: "En 1 kilómetro hay",
        qCorrectAnswers: [
          { answer: "1000", complement: "metros", placement: "right" },
        ],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemasDeNumeración_Exam03",
    topicCode: "PRIM_4_SistemasDeNumeración",
    topicName: "Sistemas de Numeración",
    name: "Unidades de Longitud 2",
    description: "Convertirás unidades de longitud menores a mayores",
    duration: 30,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "100 centímetros son:",
        qCorrectAnswers: [
          { answer: "1", complement: "metro", placement: "right" },
        ],
      },
      {
        qInstruction: "200 centímetros son:",
        qCorrectAnswers: [
          { answer: "2", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "300 centímetros son:",
        qCorrectAnswers: [
          { answer: "3", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "400 centímetros son:",
        qCorrectAnswers: [
          { answer: "4", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "500 centímetros son:",
        qCorrectAnswers: [
          { answer: "5", complement: "metros", placement: "right" },
        ],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemasDeNumeración_Exam04",
    topicCode: "PRIM_4_SistemasDeNumeración",
    topicName: "Sistemas de Numeración",
    name: "Números Romanos 1",
    description: "Escribirás el número arábigo que represente el número romano",
    duration: 30,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "El número romano X, es igual a:",
        qCorrectAnswers: [{ answer: "10" }],
      },
      {
        qInstruction: "El número romano XV, es igual a:",
        qCorrectAnswers: [{ answer: "15" }],
      },
      {
        qInstruction: "El número romano XX, es igual a:",
        qCorrectAnswers: [{ answer: "20" }],
      },
      {
        qInstruction: "El número romano XIV, es igual a:",
        qCorrectAnswers: [{ answer: "14" }],
      },
      {
        qInstruction: "El número romano L, es igual a:",
        qCorrectAnswers: [{ answer: "50" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemasDeNumeración_Exam05",
    topicCode: "PRIM_4_SistemasDeNumeración",
    topicName: "Sistemas de Numeración",
    name: "Números Romanos 2",
    description: "Escribirás el número romano que represente el número arábigo",
    duration: 30,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "El número 5 usando números romanos es:",
        qMultipleChoice: { type: "text", textChoices: ["V", "VI", "IV"] },
        qCorrectAnswers: [{ answer: "V" }],
      },
      {
        qInstruction: "El número 8 usando números romanos es:",
        qMultipleChoice: { type: "text", textChoices: ["VI", "VII", "VIII"] },
        qCorrectAnswers: [{ answer: "VIII" }],
      },
      {
        qInstruction: "El número 10 usando números romanos es:",
        qMultipleChoice: { type: "text", textChoices: ["IX", "X", "XI"] },
        qCorrectAnswers: [{ answer: "X" }],
      },
      {
        qInstruction: "El número 3 usando números romanos es:",
        qMultipleChoice: { type: "text", textChoices: ["II", "III", "IV"] },
        qCorrectAnswers: [{ answer: "III" }],
      },
      {
        qInstruction: "El número 12 usando números romanos es:",
        qMultipleChoice: { type: "text", textChoices: ["XII", "XI", "IX"] },
        qCorrectAnswers: [{ answer: "XII" }],
      },
    ],
  },
];
