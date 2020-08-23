module.exports = [
  {
    examCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales_Exam01",
    topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
    topicName: "Multiplicación y División con Números Decimales",
    name: "Multiplicación de Decimales por Múltiplos de 10",
    description: "Multiplicarás números decimales por múltiplos de 10",
    duration: 20,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.2 x 10",
        qCorrectAnswers: [{ answer: "12" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.2 x 100",
        qCorrectAnswers: [{ answer: "120" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 1.2 x 1,000",
        qCorrectAnswers: [{ answer: "1200" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 2.5 x 10",
        qCorrectAnswers: [{ answer: "25" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 2.25 x 10",
        qCorrectAnswers: [{ answer: "22.5" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales_Exam02",
    topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
    topicName: "Multiplicación y División con Números Decimales",
    name: "Multiplicación de Decimales",
    description: "Multiplicarás números decimales",
    duration: 30,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente multiplicación: 12.2 x 3.5",
        qCorrectAnswers: [{ answer: "42.7" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 13.2 x 2.1",
        qCorrectAnswers: [{ answer: "27.72" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 11.2 x 4.2",
        qCorrectAnswers: [{ answer: "47.04" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 13.3x 2.5",
        qCorrectAnswers: [{ answer: "33.25" }],
      },
      {
        qInstruction: "Resuelve la siguiente multiplicación: 12.6 x 1.8",
        qCorrectAnswers: [{ answer: "22.68" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales_Exam03",
    topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
    topicName: "Multiplicación y División con Números Decimales",
    name: "División de decimales por múltiplos de 10",
    description: "Dividarás números decimales por múltiplos de 10",
    duration: 20,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente división: 1.2 entre 10",
        qCorrectAnswers: [{ answer: ".12" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 12 entre 10",
        qCorrectAnswers: [{ answer: "1.2" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 1.2 entre 100",
        qCorrectAnswers: [{ answer: ".012" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 25 entre 10",
        qCorrectAnswers: [{ answer: "2.5" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 14.2 entre 10",
        qCorrectAnswers: [{ answer: "1.42" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales_Exam04",
    topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
    topicName: "Multiplicación y División con Números Decimales",
    name: "División de decimales",
    description: "Dividirás números decimales",
    duration: 30,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve la siguiente división: 22.4 entre 4",
        qCorrectAnswers: [{ answer: "5.6" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 22.4 entre 2",
        qCorrectAnswers: [{ answer: "11.2" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 24.6 entre 3",
        qCorrectAnswers: [{ answer: "8.2" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 33.6 entre 3",
        qCorrectAnswers: [{ answer: "11.2" }],
      },
      {
        qInstruction: "Resuelve la siguiente división: 22.5 entre 5",
        qCorrectAnswers: [{ answer: "4.5" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales_Exam05",
    topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
    topicName: "Multiplicación y División con Números Decimales",
    name: "Resolución de Problemas",
    description: "Resolverás problemas con números decimales",
    duration: 45,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Un kilogramo de aguacate cuesta 64.50 pesos, ¿cuánto se pagará por 5 kilogramos de aguacate?",
        },
        qCorrectAnswers: [
          { answer: "322.50", complement: "pesos", placement: "right" },
        ],
        qComment:
          "Recuerda que cuando se trabaja con dinero se usan dos decimales, agrega ceros si es necesario.",
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Un costal de papas pesa 323.6 kilogramos, ¿cuánto pesarán 6 costales iguales?",
        },
        qCorrectAnswers: [
          { answer: "1941.6", complement: "kilogramos", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Armando fue a la frutería y por 6 kilos de tomate, él pagó un total de 74.40 pesos. ¿Cuál es el costo de un kilo de tomate?",
        },
        qCorrectAnswers: [
          { answer: "12.40", complement: "pesos", placement: "right" },
        ],
        qComment:
          "Recuerda que cuando se trabaja con dinero se usan dos decimales, agrega ceros si es necesario.",
      },
    ],
  },
];
