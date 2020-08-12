module.exports = [
  {
    topicCode: "PRIM3y4_NúmerosDecimales",
    topicName: "Números Decimales",
    name: "Suma de decimales",
    description: "Sumarás números decimales",
    duration: 15,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma: 2.1+2.2",
        qCorrectAnswers: [{ answer: "4.3" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 3.1+2.2",
        qCorrectAnswers: [{ answer: "5.3" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 1.1+2.2",
        qCorrectAnswers: [{ answer: "3.3" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 4.1+3.5",
        qCorrectAnswers: [{ answer: "7.6" }],
      },
      {
        qInstruction: "Resuelve la siguiente suma: 2.3+2.3",
        qCorrectAnswers: [{ answer: "4.6" }],
      },
    ],
  },
  {
    topicCode: "PRIM3y4_NúmerosDecimales",
    topicName: "Números Decimales",
    name: "Resta de decimales",
    description: "Restarás números decimales",
    duration: 15,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente resta: 2.3-1.2",
        qCorrectAnswers: [{ answer: "1.1" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente resta: 2.6-1.3",
        qCorrectAnswers: [{ answer: "1.3" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente resta: 3.3-1.2",
        qCorrectAnswers: [{ answer: "2.1" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente resta: 2.8-2.5",
        qCorrectAnswers: [{ answer: "0.3" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente resta: 3.3-2.2",
        qCorrectAnswers: [{ answer: "1.1" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
    ],
  },
  {
    topicCode: "PRIM3y4_NúmerosDecimales",
    topicName: "Números Decimales",
    name: "Multiplicación de decimales",
    description: "Multiplicarás números decimales",
    duration: 15,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.2 x 0.5",
        qCorrectAnswers: [{ answer: "0.6" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.5 x 1.1",
        qCorrectAnswers: [{ answer: "1.65" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.2 x 1.2",
        qCorrectAnswers: [{ answer: "1.44" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 3.1x 1.5",
        qCorrectAnswers: [{ answer: "4.65" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.3 x 0.8",
        qCorrectAnswers: [{ answer: "1.04" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
    ],
  },
  {
    topicCode: "PRIM3y4_NúmerosDecimales",
    topicName: "Números Decimales",
    name: "División de decimales",
    description:
      "Harás divisiones con dividendos decimales y con divisores decimales",
    duration: 15,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente división: 1.2 entre 4",
        qCorrectAnswers: [{ answer: "0.3" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente división: 1.2 entre 2",
        qCorrectAnswers: [{ answer: "0.6" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente división: 1.2 entre 3",
        qCorrectAnswers: [{ answer: "0.4" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente división: 12 entre 0.4",
        qCorrectAnswers: [{ answer: "30" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
      {
        qInstruction: "Resuelve la siguiente división: 12 entre 0.2",
        qCorrectAnswers: [{ answer: "60" }],
        qComment:
          "Si el resultado no tiene parte entera, escríbela usando un cero.",
      },
    ],
  },
  {
    topicCode: "PRIM3y4_NúmerosDecimales",
    topicName: "Números Decimales",
    name: "Resolución de problemas",
    description: "Resolverás problemas con números decimales",
    duration: 15,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Un kilo de tomate cuesta 14.50 pesos, ¿cuánto se pagará por 5 kilos de tomate?",
        },
        qCorrectAnswers: [
          { answer: "72.50", complement: "pesos", placement: "right" },
        ],
        qComment:
          "Recuerda que cuando se trabaja con dinero se usan dos decimales, agrega ceros si es necesario.",
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Adriana compró un total de 54.80 pesos en mercancía, ¿cuánto dinero recibió de cambio si pagó con un billete de 100 pesos?",
        },
        qCorrectAnswers: [
          { answer: "45.20", complement: "pesos", placement: "right" },
        ],
        qComment:
          "Recuerda que cuando se trabaja con dinero se usan dos decimales, agrega ceros si es necesario.",
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Un costal de papas pesa 23.6 kilogramos, ¿cuánto pesarán 6 costales iguales?",
        },
        qCorrectAnswers: [
          { answer: "141.6", complement: "kilogramos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Luisa compró 3.5 kilogramos de almendra y 2.9 kilogramos de cacahuate, ¿cuántos kilogramos de mercancía compró en total?",
        },
        qCorrectAnswers: [
          { answer: "6.4", complement: "kilogramos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Pedro compró 4.25 kilogramos de manzana, 3.56 kilogramos de pera y 7.22 kilogramos de plátano. ¿Cuántos kilogramos de fruta compró en total Pedro?",
        },
        qCorrectAnswers: [
          { answer: "15.03", complement: "kilogramos", placement: "right" },
        ],
      },
    ],
  },
];
