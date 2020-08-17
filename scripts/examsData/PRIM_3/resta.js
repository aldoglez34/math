module.exports = [
  {
    examCode: "PRIM_3_Resta_Exam01",
    topicCode: "PRIM_3_Resta",
    topicName: "Resta",
    name: "Restas 1",
    description: "Harás restas sin acarreos menores a 100",
    duration: 15,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente resta: 10-1",
        qCorrectAnswers: [{ answer: "9" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 2-1",
        qCorrectAnswers: [{ answer: "1" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 3-2",
        qCorrectAnswers: [{ answer: "1" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 3-1",
        qCorrectAnswers: [{ answer: "2" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 5-1",
        qCorrectAnswers: [{ answer: "4" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Resta_Exam02",
    topicCode: "PRIM_3_Resta",
    topicName: "Resta",
    name: "Restas 2",
    description: "Harás restas sin acarreos menores a 1,000",
    duration: 15,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente resta: 127-16",
        qCorrectAnswers: [{ answer: "111" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 131-10",
        qCorrectAnswers: [{ answer: "121" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 125-24",
        qCorrectAnswers: [{ answer: "101" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 137-31",
        qCorrectAnswers: [{ answer: "106" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 145-33",
        qCorrectAnswers: [{ answer: "112" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Resta_Exam03",
    topicCode: "PRIM_3_Resta",
    topicName: "Resta",
    name: "Restas 3",
    description: "Harás restas con un acarreo menores a 1,000",
    duration: 20,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente resta: 23-16",
        qCorrectAnswers: [{ answer: "7" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 24-17",
        qCorrectAnswers: [{ answer: "7" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 24-18",
        qCorrectAnswers: [{ answer: "6" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 23-19",
        qCorrectAnswers: [{ answer: "4" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 25-19",
        qCorrectAnswers: [{ answer: "6" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Resta_Exam04",
    topicCode: "PRIM_3_Resta",
    topicName: "Resta",
    name: "Restas 4",
    description: "Harás restas con dos acarreos y minuendos con ceros",
    duration: 20,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente resta: 70-24",
        qCorrectAnswers: [{ answer: "46" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 80-51",
        qCorrectAnswers: [{ answer: "29" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 100-84",
        qCorrectAnswers: [{ answer: "16" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 100-76",
        qCorrectAnswers: [{ answer: "24" }],
      },
      {
        qInstruction: "Resuelve la siguiente resta: 100-85",
        qCorrectAnswers: [{ answer: "15" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Resta_Exam05",
    topicCode: "PRIM_3_Resta",
    topicName: "Resta",
    name: "Restas Final",
    description:
      "Resolverás problemas usando la división y harás restas mayores a 1,000",
    duration: 20,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Elena tiene 24 plumones y le presta 8 a su hermano, ¿con cuántos plumones se quedó Elena?",
        },
        qCorrectAnswers: [
          { answer: "16", complement: "plumones", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Juan fue a la tienda y compró un total de 64 pesos. Si pagó con un billete de 100 pesos, ¿cuánto dinero recibió de cambio?",
        },
        qCorrectAnswers: [
          { answer: "36", complement: "pesos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Rodrigo tiene 42 años y Diego es 11 años menor que Rodrigo, ¿cuántos años tiene Diego?",
        },
        qCorrectAnswers: [
          { answer: "31", complement: "años", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "En un partido de baloncesto el equipo A anotó 78 puntos, mientras que el equipo B anotó 69 puntos. ¿Por cuántos puntos le ganó el equipo A al equipo B?",
        },
        qCorrectAnswers: [
          { answer: "9", complement: "puntos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Gerardo tenía 340 pesos y decidió comprar un libro de 189 pesos, ¿cuánto dinero le quedó?",
        },
        qCorrectAnswers: [
          { answer: "151", complement: "pesos", placement: "right" },
        ],
      },
    ],
  },
];
