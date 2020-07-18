module.exports = [
  {
    topicCode: "PRIM3y4_Suma",
    topicName: "Suma",
    name: "Sumas 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius risus massa, et sollicitudin est fringilla.",
    duration: 30,
    difficulty: "Basic",
    qCounter: 8,
    questions: [
      {
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: {
          type: "text",
          text: "10 + 7",
        },
        qCorrectAnswers: [{ answer: "17" }],
      },
      {
        qInstruction:
          "Escribe 3 (pesos) en el primer input y 5 (manzanas) en el segundo",
        qCorrectAnswers: [
          { answer: "3", complement: "pesos", placement: "right" },
          { answer: "5", complement: "manzanas", placement: "right" },
        ],
        qComment: "este comentario es de prueba",
      },
      {
        qInstruction:
          "Escribe 45 en el primer input, 22 en el segundo y 77 en el tercero",
        qCorrectAnswers: [{ answer: "45" }, { answer: "22" }, { answer: "77" }],
      },
      {
        qInstruction: "¿Cuántos lados tiene la siguiente figura?",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma1/figura1.png",
        },
        qCorrectAnswers: [{ answer: "4" }],
      },
      {
        qInstruction: "¿Cuántos lados tiene la siguiente figura?",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma1/figura2.png",
        },
        qCorrectAnswers: [{ answer: "6" }],
      },
      {
        qInstruction: "¿Cuántos lados tiene la siguiente figura?",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma1/figura3.png",
        },
        qMultipleChoice: {
          type: "image",
          imageChoices: [
            "/exams/suma/suma1/res4.png",
            "/exams/suma/suma1/res5.png",
            "/exams/suma/suma1/res6.png",
            "/exams/suma/suma1/res7.png",
          ],
        },
        qCorrectAnswers: [{ answer: "/exams/suma/suma1/res5.png" }],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text: "5 + 8",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["11", "12", "13", "14"],
        },
        qCorrectAnswers: [{ answer: "13" }],
        qComment: "Selecciona respuesta correcta y da clic en siguiente",
      },
      {
        qInstruction: "¿Cuánto es 10 + 4? Elige la respuesta correcta",
        qMultipleChoice: {
          type: "text",
          textChoices: ["14.5", "16", "15", "14"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
];
