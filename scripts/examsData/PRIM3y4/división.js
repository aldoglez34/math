module.exports = [
  {
    examCode: "división_01",
    topicCode: "PRIM3y4_División",
    topicName: "División",
    name: "Divisiones 1",
    description:
      "Harás divisiones exactas con divisores de una cifra y dividendos menores a 100",
    duration: 15,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "¿Cuánto es 4 entre 2?",
        qCorrectAnswers: [{ answer: "2" }],
      },
      {
        qInstruction: "¿Cuánto es 6 entre 2?",
        qCorrectAnswers: [{ answer: "3" }],
      },
      {
        qInstruction: "¿Cuánto es 8 entre 2?",
        qCorrectAnswers: [{ answer: "4" }],
      },
      {
        qInstruction: "¿Cuánto es 10 entre 2?",
        qCorrectAnswers: [{ answer: "5" }],
      },
      {
        qInstruction: "¿Cuánto es 12 entre 2?",
        qCorrectAnswers: [{ answer: "6" }],
      },
    ],
  },
  {
    examCode: "división_02",
    topicCode: "PRIM3y4_División",
    topicName: "División",
    name: "Divisiones 2",
    description:
      "Harás divisiones con residuo y divisores de una cifra y dividendos menores a 100",
    duration: 15,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente multiplicación: 6 x 1",
        qCorrectAnswers: [{ answer: "6" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 6x2",
        qCorrectAnswers: [{ answer: "12" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 6x3",
        qCorrectAnswers: [{ answer: "18" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 6x4",
        qCorrectAnswers: [{ answer: "24" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 6x5",
        qCorrectAnswers: [{ answer: "30" }],
      },
    ],
  },
  {
    examCode: "división_03",
    topicCode: "PRIM3y4_División",
    topicName: "División",
    name: "Divisiones 3",
    description:
      "Harás divisiones con divisores de una cifra y dividendos mayores a 100",
    duration: 15,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "¿Cuánto es 105 entre 2?",
        qCorrectAnswers: [
          { answer: "52", complement: "Cociente:", placement: "left" },
          { answer: "1", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 107 entre 2?",
        qCorrectAnswers: [
          { answer: "53", complement: "Cociente:", placement: "left" },
          { answer: "1", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 112 entre 3?",
        qCorrectAnswers: [
          { answer: "37", complement: "Cociente:", placement: "left" },
          { answer: "1", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 114 entre 3?",
        qCorrectAnswers: [
          { answer: "38", complement: "Cociente:", placement: "left" },
          { answer: "0", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 112 entre 2?",
        qCorrectAnswers: [
          { answer: "56", complement: "Cociente:", placement: "left" },
          { answer: "0", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
    ],
  },
  {
    examCode: "división_04",
    topicCode: "PRIM3y4_División",
    topicName: "División",
    name: "Divisiones 4",
    description:
      "Harás divisiones con divisores de una cifra y dividendos mayores a 1000",
    duration: 15,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "¿Cuánto es 1564 entre 2?",
        qCorrectAnswers: [
          { answer: "782", complement: "Cociente:", placement: "left" },
          { answer: "0", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 1564 entre 3?",
        qCorrectAnswers: [
          { answer: "521", complement: "Cociente:", placement: "left" },
          { answer: "1", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 1564 entre 4?",
        qCorrectAnswers: [
          { answer: "391", complement: "Cociente:", placement: "left" },
          { answer: "0", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 1564 entre 2?",
        qCorrectAnswers: [
          { answer: "312", complement: "Cociente:", placement: "left" },
          { answer: "4", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
      {
        qInstruction: "¿Cuánto es 1564 entre 6?",
        qCorrectAnswers: [
          { answer: "260", complement: "Cociente:", placement: "left" },
          { answer: "4", complement: "Residuo:", placement: "left" },
        ],
        qComment: "Si la división es exacta, escribe 0 en el residuo.",
      },
    ],
  },
  {
    examCode: "división_05",
    topicCode: "PRIM3y4_División",
    topicName: "División",
    name: "Divisiones Final",
    description: "Resolverás problemas usando la división",
    duration: 15,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Paula quiere repartir sus 25 plumones entre ella y sus cuatro amigas. ¿Cuántos plumones le tocarán a cada quien?",
        },
        qCorrectAnswers: [
          { answer: "5", complement: "plumones", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Rogelio quiere repartir sus 23 colores entre 3 de sus amigos. ¿Cuántos colores le tocarán a cada amigo?, ¿cuántos colores sobrarán?",
        },
        qCorrectAnswers: [
          { answer: "7", complement: "colores", placement: "right" },
          { answer: "2", complement: "sobran", placement: "left" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Si 6 kilos de papa cuestan 72 pesos, ¿cuál es el costo de un kilo de papa?",
        },
        qCorrectAnswers: [
          { answer: "12", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Si por trabajar 5 horas, gano 325 pesos, ¿cuánto dinero gano por hora?",
        },
        qCorrectAnswers: [
          { answer: "65", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Una mega pizza de 30 rebanadas se va a repartir entre 7 personas. ¿Cuántas rebanadas le tocarán a cada persona?, ¿cuántas rebanadas sobrarán?",
        },
        qCorrectAnswers: [
          { answer: "4", complement: "rebanadas", placement: "right" },
          { answer: "2", complement: "sobran", placement: "left" },
        ],
      },
    ],
  },
];
