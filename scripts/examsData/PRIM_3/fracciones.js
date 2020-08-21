module.exports = [
  {
    examCode: "PRIM_3_Fracciones_Exam01",
    topicCode: "PRIM_3_Fracciones",
    topicName: "Fracciones",
    name: "Clasificación de fracciones",
    description: "Clasificarás las fracciones en propias, impropias y mixtas",
    duration: 15,
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
    examCode: "PRIM_3_Fracciones_Exam02",
    topicCode: "PRIM_3_Fracciones",
    topicName: "Fracciones",
    name: "Representación de fracciones",
    description: "Usarás fracciones para representar una figura geométrica",
    duration: 15,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Escribe la fracción que representa la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/representacion_de_fracciones/Figura1.png",
        },
        qCorrectAnswers: [{ answer: "1/2" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/representacion_de_fracciones/Figura2.png",
        },
        qCorrectAnswers: [{ answer: "2/4" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/representacion_de_fracciones/Figura3.png",
        },
        qCorrectAnswers: [{ answer: "3/6" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/representacion_de_fracciones/Figura4.png",
        },
        qCorrectAnswers: [{ answer: "4/10" }],
      },
      {
        qInstruction:
          "Escribe la fracción que representa la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/representacion_de_fracciones/Figura5.png",
        },
        qCorrectAnswers: [{ answer: "2/8" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Fracciones_Exam03",
    topicCode: "PRIM_3_Fracciones",
    topicName: "Fracciones",
    name: "Fracciones equivalentes",
    description: "Escribirás una fracción equivalente a la de las imágenes",
    duration: 15,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Una fracción equivalente a la mostrada en la figura es:",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/fracciones_equivalentes/Figura1.png",
        },
        qMultipleChoice: { type: "text", textChoices: ["2/4", "1/3", "2/6"] },
        qCorrectAnswers: [{ answer: "2/4" }],
      },
      {
        qInstruction: "Una fracción equivalente a la mostrada en la figura es:",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/fracciones_equivalentes/Figura2.png",
        },
        qMultipleChoice: { type: "text", textChoices: ["1/4", "2/6", "1/2"] },
        qCorrectAnswers: [{ answer: "1/2" }],
      },
      {
        qInstruction: "Una fracción equivalente a la mostrada en la figura es:",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/fracciones_equivalentes/Figura3.png",
        },
        qMultipleChoice: { type: "text", textChoices: ["2/6", "3/6", "1/2"] },
        qCorrectAnswers: [{ answer: "1/2" }],
      },
      {
        qInstruction: "Una fracción equivalente a la mostrada en la figura es:",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/fracciones_equivalentes/Figura4.png",
        },
        qMultipleChoice: { type: "text", textChoices: ["2/8", "1/4", "1/2"] },
        qCorrectAnswers: [{ answer: "1/4" }],
      },
      {
        qInstruction: "Una fracción equivalente a la mostrada en la figura es:",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/3/Fracciones/fracciones_equivalentes/Figura5.png",
        },
        qMultipleChoice: { type: "text", textChoices: ["1/3", "2/6", "2/3"] },
        qCorrectAnswers: [{ answer: "2/6" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Fracciones_Exam04",
    topicCode: "PRIM_3_Fracciones",
    topicName: "Fracciones",
    name: "Fracciones mixtas a impropias",
    description: "Convertirás fracciones mixtas a fracciones impropias",
    duration: 15,
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
        qInstruction: "Convierte 1/1/3 a fracción impropia:",
        qCorrectAnswers: [{ answer: "4/3" }],
      },
      {
        qInstruction: "Convierte 2/1/3 a fracción impropia:",
        qCorrectAnswers: [{ answer: "7/3" }],
      },
    ],
  },
  {
    examCode: "PRIM_3_Fracciones_Exam05",
    topicCode: "PRIM_3_Fracciones",
    topicName: "Fracciones",
    name: "Fracciones impropias a mixtas",
    description: "Convertirás fracciones impropias a fracciones mixtas",
    duration: 15,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
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
      {
        qInstruction: "Convierte 4/3 a fracción mixta:",
        qCorrectAnswers: [{ answer: "1/1/3" }],
      },
      {
        qInstruction: "Convierte 7/3 a fracción mixta:",
        qCorrectAnswers: [{ answer: "2/1/3" }],
      },
    ],
  },
];
