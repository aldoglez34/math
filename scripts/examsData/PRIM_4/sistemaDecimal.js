module.exports = [
  {
    examCode: "PRIM_4_SistemaDecimal_Exam01",
    topicCode: "PRIM_4_SistemaDecimal",
    topicName: "Sistema Decimal",
    name: "Posición Numérica",
    description: "Identificarás la posición de cifras en números",
    duration: 20,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "En el número 234, ¿la decena es la cifra?",
        qMultipleChoice: { type: "text", textChoices: ["2", "3", "4"] },
        qCorrectAnswers: [{ answer: "3" }],
      },
      {
        qInstruction: "En el número 134, ¿la decena es la cifra?",
        qMultipleChoice: { type: "text", textChoices: ["3", "1", "4"] },
        qCorrectAnswers: [{ answer: "3" }],
      },
      {
        qInstruction: "En el número 725, ¿la unidad es la cifra?",
        qMultipleChoice: { type: "text", textChoices: ["2", "5", "7"] },
        qCorrectAnswers: [{ answer: "5" }],
      },
      {
        qInstruction: "En el número 642, ¿la unidad es la cifra?",
        qMultipleChoice: { type: "text", textChoices: ["2", "4", "6"] },
        qCorrectAnswers: [{ answer: "2" }],
      },
      {
        qInstruction: "En el número 456, ¿la centena es la cifra?",
        qMultipleChoice: { type: "text", textChoices: ["4", "5", "6"] },
        qCorrectAnswers: [{ answer: "4" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemaDecimal_Exam02",
    topicCode: "PRIM_4_SistemaDecimal",
    topicName: "Sistema Decimal",
    name: "Valor Posicional",
    description: "Escribirás el valor posicional de cierta cifra en un número",
    duration: 20,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Escribe el valor posicional de la cifra 2, en el número 235",
        qCorrectAnswers: [{ answer: "200" }],
      },
      {
        qInstruction:
          "Escribe el valor posicional de la cifra 3, en el número 543",
        qCorrectAnswers: [{ answer: "3" }],
      },
      {
        qInstruction:
          "Escribe el valor posicional de la cifra 4, en el número 749",
        qCorrectAnswers: [{ answer: "40" }],
      },
      {
        qInstruction:
          "Escribe el valor posicional de la cifra 3, en el número 357",
        qCorrectAnswers: [{ answer: "300" }],
      },
      {
        qInstruction:
          "Escribe el valor posicional de la cifra 4, en el número 1,242",
        qCorrectAnswers: [{ answer: "40" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemaDecimal_Exam03",
    topicCode: "PRIM_4_SistemaDecimal",
    topicName: "Sistema Decimal",
    name: "Notación Desarrollada",
    description:
      "Escribirás un número a partir de una notación desarrollada y viceversa",
    duration: 30,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Escribe el número que indica la siguiente notación desarrollada: 30+4",
        qCorrectAnswers: [{ answer: "34" }],
      },
      {
        qInstruction:
          "Escribe el número que indica la siguiente notación desarrollada: 300+40+5",
        qCorrectAnswers: [{ answer: "345" }],
      },
      {
        qInstruction:
          "Escribe el número que indica la siguiente notación desarrollada: 500+50+9",
        qCorrectAnswers: [{ answer: "559" }],
      },
      {
        qInstruction: "Escribe en forma desarrollada el número 35",
        qCorrectAnswers: [{ answer: "30+5" }],
        qComment: "Escribe tu respuesta sin usar espacios.",
      },
      {
        qInstruction: "Escribe en forma desarrollada el número 42",
        qCorrectAnswers: [{ answer: "40+2" }],
        qComment: "Escribe tu respuesta sin usar espacios.",
      },
      {
        qInstruction: "Escribe en forma desarrollada el número 63",
        qCorrectAnswers: [{ answer: "60+3" }],
        qComment: "Escribe tu respuesta sin usar espacios.",
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemaDecimal_Exam04",
    topicCode: "PRIM_4_SistemaDecimal",
    topicName: "Sistema Decimal",
    name: "Comparación de Números",
    description: "Compararás números usando el signo mayor que y menor que",
    duration: 20,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Compara los siguientes números: 7___21",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
      {
        qInstruction: "Compara los siguientes números: 11___21",
        qMultipleChoice: { type: "text", textChoices: ["<", ">"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
      {
        qInstruction: "Compara los siguientes números: 14___13",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: ">" }],
      },
      {
        qInstruction: "Compara los siguientes números: 7___3",
        qMultipleChoice: { type: "text", textChoices: ["<", ">"] },
        qCorrectAnswers: [{ answer: ">" }],
      },
      {
        qInstruction: "Compara los siguientes números: 2___5",
        qMultipleChoice: { type: "text", textChoices: ["<", ">"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_SistemaDecimal_Exam05",
    topicCode: "PRIM_4_SistemaDecimal",
    topicName: "Sistema Decimal",
    name: "Escritura de Números",
    description: "Escribirás un número a partir de su nombre",
    duration: 30,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Escribe el siguiente número: doscientos trece",
        qCorrectAnswers: [{ answer: "213" }],
      },
      {
        qInstruction: "Escribe el siguiente número: ciento ochenta y dos",
        qCorrectAnswers: [{ answer: "182" }],
      },
      {
        qInstruction: "Escribe el siguiente número: doscientos treinta y dos",
        qCorrectAnswers: [{ answer: "232" }],
      },
      {
        qInstruction: "Escribe el siguiente número: ciento noventa y cinco",
        qCorrectAnswers: [{ answer: "195" }],
      },
      {
        qInstruction: "Escribe el siguiente número: cuatrocientos veintiuno",
        qCorrectAnswers: [{ answer: "421" }],
      },
    ],
  },
];
