module.exports = [
  {
    topicCode: "PRIM3y4_Multi",
    topicName: "Multiplicación",
    name: "Multiplicaciones 1",
    description:
      "Suspendisse non gravida odio. Phasellus a enim non justo porttitor pretium. Curabitur facilisis leo vitae ex efficitur, egestas malesuada augue elementum.",
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
        qCorrectAnswers: [
          { answer: "45", complement: "número", placement: "left" },
          { answer: "22", complement: "otro", placement: "left" },
          { answer: "77", complement: "último", placement: "left" },
        ],
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
          textChoices: ["13.5", "13.7", "14", "14.2"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
  {
    topicCode: "PRIM3y4_Multi",
    topicName: "Multiplicación",
    name: "Multiplicaciones 2",
    description:
      "Duis luctus nisl massa, vel convallis nisi maximus eget. In molestie lacinia ligula at pellentesque. Etiam scelerisque porta mauris quis aliquam.",
    duration: 30,
    difficulty: "Intermediate-Low",
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
        qCorrectAnswers: [
          { answer: "45", complement: "número", placement: "left" },
          { answer: "22", complement: "otro", placement: "left" },
          { answer: "77", complement: "último", placement: "left" },
        ],
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
          textChoices: ["13.5", "13.7", "14", "14.2"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
  {
    topicCode: "PRIM3y4_Multi",
    topicName: "Multiplicación",
    name: "Multiplicaciones 3",
    description:
      "Morbi volutpat ipsum a pellentesque euismod. Nullam in neque eu est finibus vestibulum. Cras sagittis metus sit amet leo malesuada, at tincidunt metus scelerisque.",
    duration: 30,
    difficulty: "Intermediate-High",
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
        qCorrectAnswers: [
          { answer: "45", complement: "número", placement: "left" },
          { answer: "22", complement: "otro", placement: "left" },
          { answer: "77", complement: "último", placement: "left" },
        ],
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
          textChoices: ["13.5", "13.7", "14", "14.2"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
  {
    topicCode: "PRIM3y4_Multi",
    topicName: "Multiplicación",
    name: "Multiplicaciones 4",
    description:
      "Morbi volutpat ipsum a pellentesque euismod. Nullam in neque eu est finibus vestibulum. Cras sagittis metus sit amet leo malesuada, at tincidunt metus scelerisque.",
    duration: 30,
    difficulty: "Advanced",
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
        qCorrectAnswers: [
          { answer: "45", complement: "número", placement: "left" },
          { answer: "22", complement: "otro", placement: "left" },
          { answer: "77", complement: "último", placement: "left" },
        ],
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
          textChoices: ["13.5", "13.7", "14", "14.2"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
  {
    topicCode: "PRIM3y4_Multi",
    topicName: "Multiplicación",
    name: "Multiplicaciones Final",
    description:
      "Nullam in neque eu est finibus vestibulum. Cras sagittis metus sit amet leo malesuada, at tincidunt metus scelerisque.",
    duration: 30,
    difficulty: "Final",
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
        qCorrectAnswers: [
          { answer: "45", complement: "número", placement: "left" },
          { answer: "22", complement: "otro", placement: "left" },
          { answer: "77", complement: "último", placement: "left" },
        ],
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
          textChoices: ["13.5", "13.7", "14", "14.2"],
        },
        qCorrectAnswers: [{ answer: "14" }],
      },
    ],
  },
];
