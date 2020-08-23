module.exports = [
  {
    examCode: "PRIM_4_FigurasGeométricas_Exam01",
    topicCode: "PRIM_4_FigurasGeométricas",
    topicName: "Figuras Geométricas",
    name: "Nombres",
    description: "Nombrarás las diferentes figuras geométricas",
    duration: 20,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Nombres/Figura1.png",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["cuadrado", "triángulo", "rectángulo"],
        },
        qCorrectAnswers: [{ answer: "triángulo" }],
      },
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Nombres/Figura2.png",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["cuadrado", "triángulo", "rectángulo"],
        },
        qCorrectAnswers: [{ answer: "cuadrado" }],
      },
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Nombres/Figura3.png",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["cuadrado", "pentágono", "rectángulo"],
        },
        qCorrectAnswers: [{ answer: "pentágono" }],
      },
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Nombres/Figura4.png",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["pentágono", "triángulo", "hexágono"],
        },
        qCorrectAnswers: [{ answer: "hexágono" }],
      },
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Nombres/Figura5.png",
        },
        qMultipleChoice: {
          type: "text",
          textChoices: ["heptágono", "triángulo", "hexágono"],
        },
        qCorrectAnswers: [{ answer: "heptágono" }],
      },
    ],
  },
  {
    examCode: "PRIM_4_FigurasGeométricas_Exam02",
    topicCode: "PRIM_4_FigurasGeométricas",
    topicName: "Figuras Geométricas",
    name: "Elementos",
    description:
      "Determinarás el número de aristas y vértices de una figura geométrica",
    duration: 20,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Elementos/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "3", complement: "Lados:", placement: "left" },
          { answer: "3", complement: "Vértices:", placement: "left" },
          { answer: "3", complement: "Aristas:", placement: "left" },
        ],
      },
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Elementos/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "4", complement: "Lados:", placement: "left" },
          { answer: "4", complement: "Vértices:", placement: "left" },
          { answer: "4", complement: "Aristas:", placement: "left" },
        ],
      },
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Elementos/Figura3.png",
        },
        qCorrectAnswers: [
          { answer: "5", complement: "Lados:", placement: "left" },
          { answer: "5", complement: "Vértices:", placement: "left" },
          { answer: "5", complement: "Aristas:", placement: "left" },
        ],
      },
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Elementos/Figura4.png",
        },
        qCorrectAnswers: [
          { answer: "6", complement: "Lados:", placement: "left" },
          { answer: "6", complement: "Vértices:", placement: "left" },
          { answer: "6", complement: "Aristas:", placement: "left" },
        ],
      },
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Elementos/Figura5.png",
        },
        qCorrectAnswers: [
          { answer: "7", complement: "Lados:", placement: "left" },
          { answer: "7", complement: "Vértices:", placement: "left" },
          { answer: "7", complement: "Aristas:", placement: "left" },
        ],
      },
    ],
  },
  {
    examCode: "PRIM_4_FigurasGeométricas_Exam03",
    topicCode: "PRIM_4_FigurasGeométricas",
    topicName: "Figuras Geométricas",
    name: "Perímetro",
    description: "Calcularás el perímetro de figuras geométricas",
    duration: 30,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Perimetros/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "168", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Perimetros/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "314", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Perimetros/Figura3.png",
        },
        qCorrectAnswers: [
          { answer: "376", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Perimetros/Figura4.png",
        },
        qCorrectAnswers: [
          { answer: "256", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/Perimetros/Figura5.png",
        },
        qCorrectAnswers: [
          { answer: "580", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
    ],
  },
  {
    examCode: "PRIM_4_FigurasGeométricas_Exam04",
    topicCode: "PRIM_4_FigurasGeométricas",
    topicName: "Figuras Geométricas",
    name: "Área",
    description: "Calcularás el área de figuras geométricas",
    duration: 30,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Area/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "484", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Area/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "961", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Area/Figura3.png",
        },
        qCorrectAnswers: [
          { answer: "625", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Area/Figura4.png",
        },
        qCorrectAnswers: [
          { answer: "1764", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/primaria/4/FigurasGeometricas/Area/Figura5.png",
        },
        qCorrectAnswers: [
          { answer: "1225", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
    ],
  },
  {
    examCode: "PRIM_4_FigurasGeométricas_Exam05",
    topicCode: "PRIM_4_FigurasGeométricas",
    topicName: "Figuras Geométricas",
    name: "Resolución de Problemas",
    description: "Resolverás problemas que involucren figuras geométricas",
    duration: 45,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Luis quiere medir el perímetro de una alberca en forma de cuadarado cuyos lados miden 18 metros. ¿Cuál es el perímetro de la alberca?",
        },
        qCorrectAnswers: [
          { answer: "72", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Enrique quiere medir el perímetro de un terreno cuadrangular cuyos lados miden 25 metros. ¿Cuál es el perímetro del terreno?",
        },
        qCorrectAnswers: [
          { answer: "100", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction:
          "Carlos corre todas las ma~ nanas 12 vueltas alrededor de un parque rectangular cuyas medidas se muestran en la imagen. ¿Cuántos metros corre Carlos?",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/ResolucionDeProblemas/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "4080", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction:
          "Karla corre todas las ma~ nanas 18 vueltas alrededor de un parque rectangular cuyas medidas se muestran en la imagen. ¿Cuántos metros corre Karla?",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/primaria/4/FigurasGeometricas/ResolucionDeProblemas/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "4896", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Una persona quiere poner una barda de ladrillos en un terreno rectangular que tiene 130 metros de ancho y 62 metros de largo. ¿Cuántos metros de barda tendrá que poner esa persona?",
        },
        qCorrectAnswers: [
          { answer: "384", complement: "metros", placement: "right" },
        ],
      },
    ],
  },
];
