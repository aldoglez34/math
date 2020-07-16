module.exports = [
  {
    topicCode: "PRIM3y4_Suma",
    topicName: "Suma",
    name: "Sumas 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius risus massa, et sollicitudin est fringilla.",
    duration: 30,
    difficulty: "Basic",
    qCounter: 5,
    questions: [
      // ========================================================
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
          { answer: "3", text: "pesos", placement: "right" },
          { answer: "5", text: "manzanas", placement: "left" },
        ],
        qComment: "literal sólo eso",
      },
      {
        qInstruction:
          "Escribe 45 en el primer input y 2 en el segundo y 77 en el tercero",
        qCorrectAnswers: [{ answer: "45" }, { answer: "2" }, { answer: "77" }],
      },
      // ========================================================
      {
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma1.png",
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
      {
        qInstruction: "Escribe los números que se muestran en la imagen",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma2.png",
        },
        qCorrectAnswers: [
          { answer: "45", text: "números:", placement: "left" },
          { answer: "7", text: "números:", placement: "left" },
        ],
      },
      {
        qInstruction: "Escribe los números que se muestran en la imagen",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/suma/suma3.png",
        },
        qCorrectAnswers: [{ answer: "11" }, { answer: "8" }, { answer: "34" }],
        qComment: "sólo escribe los números",
      },
      // ========================================================
      {
        qInstruction: "¿Cuánto es 5 + 8? Elige la respuesta correcta",
        qMultipleChoice: [
          {
            type: "text",
            textChoices: ["12", "13", "14", "15"],
          },
        ],
        qCorrectAnswers: [{ answer: "13" }],
        qComment: "selecciona respuesta correcta y da clic en siguiente",
      },
      {
        qInstruction: "¿Cuánto es 10 + 4? Elige la respuesta correcta",
        qMultipleChoice: [
          {
            type: "text",
            textChoices: ["55", "43", "14", "2"],
          },
        ],
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
];
