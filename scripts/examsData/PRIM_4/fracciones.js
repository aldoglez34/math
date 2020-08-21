module.exports = [
  {
    examCode: "PRIM_4_Fracciones_Exam01",
    topicCode: "PRIM_4_Fracciones",
    topicName: "Fracciones",
    name: "Clasificación de Fracciones",
    description: "Clasificarás las fracciones en propias, impropias y mixtas",
    duration: 20,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "La fracción 1/4, es una fracción:",
        qMultipleChoice: {
          type: "text",
          textChoices: ["propia", "impropia", "mixta"],
        },
        qCorrectAnswers: [{ answer: "propia" }],
      },
      {
        qInstruction: "La fracción 5/4, es una fracción:",
        qMultipleChoice: {
          type: "text",
          textChoices: ["propia", "impropia", "mixta"],
        },
        qCorrectAnswers: [{ answer: "impropia" }],
      },
      {
        qInstruction: "La fracción 2/1/4, es una fracción:",
        qMultipleChoice: {
          type: "text",
          textChoices: ["propia", "impropia", "mixta"],
        },
        qCorrectAnswers: [{ answer: "mixta" }],
      },
      {
        qInstruction: "La fracción 3/4, es una fracción:",
        qMultipleChoice: {
          type: "text",
          textChoices: ["propia", "impropia", "mixta"],
        },
        qCorrectAnswers: [{ answer: "propia" }],
      },
      {
        qInstruction: "La fracción 7/5, es una fracción:",
        qMultipleChoice: {
          type: "text",
          textChoices: ["propia", "impropia", "mixta"],
        },
        qCorrectAnswers: [{ answer: "impropia" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Fracciones_Exam02",
    topicCode: "PRIM_4_Fracciones",
    topicName: "Fracciones",
    name: "Representación de Fracciones",
    description: "Usarás fracciones para representar una figura geométrica",
    duration: 20,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Escribe la fracción que representa la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/representacion_de_fracciones/Figura1.png",
        },
        qCorrectAnswers: [{ answer: "1/2" }],
      },
      {
        qInstruction: "Escribe la fracción que representa la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/representacion_de_fracciones/Figura2.png",
        },
        qCorrectAnswers: [{ answer: "2/4" }],
      },
      {
        qInstruction: "Escribe la fracción que representa la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/representacion_de_fracciones/Figura3.png",
        },
        qCorrectAnswers: [{ answer: "3/6" }],
      },
      {
        qInstruction: "Escribe la fracción que representa la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/representacion_de_fracciones/Figura4.png",
        },
        qCorrectAnswers: [{ answer: "4/12" }],
      },
      {
        qInstruction: "Escribe la fracción que representa la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/representacion_de_fracciones/Figura5.png",
        },
        qCorrectAnswers: [{ answer: "2/8" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Fracciones_Exam03",
    topicCode: "PRIM_4_Fracciones",
    topicName: "Fracciones",
    name: "Comparación de Fracciones",
    description: "Compararás fracciones usando el signo mayor que y menor que",
    duration: 30,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Compara las siguientes fracciones: 1/3___2/3",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
      {
        qInstruction: "Compara las siguientes fracciones: 2/5___3/5",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
      {
        qInstruction: "Compara las siguientes fracciones: 3/4___1/4",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: ">" }],
      },
      {
        qInstruction: "Compara las siguientes fracciones: 5/6___1/6",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: ">" }],
      },
      {
        qInstruction: "Compara las siguientes fracciones: 1/10___2/10",
        qMultipleChoice: { type: "text", textChoices: [">", "<"] },
        qCorrectAnswers: [{ answer: "<" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Fracciones_Exam04",
    topicCode: "PRIM_4_Fracciones",
    topicName: "Fracciones",
    name: "Conversión de Fracciones",
    description:
      "Convertirás fracciones mixtas a fracciones impropias y viceversa",
    duration: 30,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Convierte 1/1/2 a fracción impropia:",
        qCorrectAnswers: [{ answer: "3/2" }],
      },
      {
        qInstruction: "Convierte 2/1/2 a fracción impropia:",
        qCorrectAnswers: [{ answer: "5/2" }],
      },
      {
        qInstruction: "Convierte 3/1/2 a fracción impropia:",
        qCorrectAnswers: [{ answer: "7/2" }],
      },
      {
        qInstruction: "Convierte 3/2 a fracción mixta:",
        qCorrectAnswers: [{ answer: "1/1/2" }],
      },
      {
        qInstruction: "Convierte 5/2 a fracción mixta:",
        qCorrectAnswers: [{ answer: "2/1/2" }],
      },
      {
        qInstruction: "Convierte 7/2 a fracción mixta:",
        qCorrectAnswers: [{ answer: "3/1/2" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_Fracciones_Exam05",
    topicCode: "PRIM_4_Fracciones",
    topicName: "Fracciones",
    name: "Fracciones en la Recta Numérica",
    description: "Ubicarás una fracción en una recta numérica",
    duration: 30,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Escribe la fracción que representa el punto en la recta numérica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/fracciones_en_la_recta_numerica/Figura1.png",
        },
        qCorrectAnswers: [{ answer: "1/4" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa el punto en la recta numérica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/fracciones_en_la_recta_numerica/Figura2.png",
        },
        qCorrectAnswers: [{ answer: "2/4" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa el punto en la recta numérica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/fracciones_en_la_recta_numerica/Figura3.png",
        },
        qCorrectAnswers: [{ answer: "3/4" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa el punto en la recta numérica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/fracciones_en_la_recta_numerica/Figura4.png",
        },
        qCorrectAnswers: [{ answer: "1/5" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa el punto en la recta numérica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/Fracciones/fracciones_en_la_recta_numerica/Figura5.png",
        },
        qCorrectAnswers: [{ answer: "2/5" }],
      },
    ],
  },
];
