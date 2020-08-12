module.exports = [
  {
    examCode: "figurasGeométricas_01",
    topicCode: "PRIM3y4_FigurasGeometricas",
    topicName: "Figuras Geométricas",
    name: "Nombres",
    description: "Nombrarás las diferentes figuras geométricas",
    duration: 15,
    difficulty: "Basic",
    qCounter: 3,
    questions: [
      {
        qInstruction: "La siguiente figura geométrica se llama:",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/nombres/Figura1.png",
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
          imageLink: "/exams/figuras_geometricas/nombres/Figura2.png",
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
          imageLink: "/exams/figuras_geometricas/nombres/Figura3.png",
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
          imageLink: "/exams/figuras_geometricas/nombres/Figura4.png",
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
          imageLink: "/exams/figuras_geometricas/nombres/Figura5.png",
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
    examCode: "figurasGeométricas_02",
    topicCode: "PRIM3y4_FigurasGeometricas",
    topicName: "Figuras Geométricas",
    name: "Elementos",
    description: "Restarás fracciones con denominadores iguales",
    duration: 15,
    difficulty: "Basic-Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction:
          "Indica el número de lados, vértices y aristas de la siguiente figura geométrica",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/elementos/Figura1.png",
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
          imageLink: "/exams/figuras_geometricas/elementos/Figura2.png",
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
          imageLink: "/exams/figuras_geometricas/elementos/Figura3.png",
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
          imageLink: "/exams/figuras_geometricas/elementos/Figura4.png",
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
          imageLink: "/exams/figuras_geometricas/elementos/Figura2.png",
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
    examCode: "figurasGeométricas_03",
    topicCode: "PRIM3y4_FigurasGeometricas",
    topicName: "Figuras Geométricas",
    name: "Perímetro",
    description: "Calcularás el perímetro de figuras geométricas",
    duration: 15,
    difficulty: "Intermediate",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/perimetro/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "44", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/perimetro/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "60", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/perimetro/Figura3.png",
        },
        qCorrectAnswers: [
          { answer: "39", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/perimetro/Figura4.png",
        },
        qCorrectAnswers: [
          { answer: "60", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el perímetro de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/perimetro/Figura5.png",
        },
        qCorrectAnswers: [
          { answer: "100", complement: "u", placement: "right" },
        ],
        qComment: "La letra u, representa cualquier unidad de medida.",
      },
    ],
  },
  {
    examCode: "figurasGeométricas_04",
    topicCode: "PRIM3y4_FigurasGeometricas",
    topicName: "Figuras Geométricas",
    name: "Área",
    description: "Calcularás el área de figuras geométricas",
    duration: 15,
    difficulty: "Intermediate-Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/area/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "64", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/area/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "81", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/area/Figura3.png",
        },
        qCorrectAnswers: [
          { answer: "144", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/area/Figura4.png",
        },
        qCorrectAnswers: [
          { answer: "225", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
      {
        qInstruction: "Calcular el área de la siguiente figura",
        qTechnicalInstruction: {
          type: "image",
          imageLink: "/exams/figuras_geometricas/area/Figura5.png",
        },
        qCorrectAnswers: [
          { answer: "441", complement: "u^2", placement: "right" },
        ],
        qComment: "La letra u^2, representa cualquier unidad de medida.",
      },
    ],
  },
  {
    examCode: "figurasGeométricas_05",
    topicCode: "PRIM3y4_FigurasGeometricas",
    topicName: "Figuras Geométricas",
    name: "Resolución de problemas",
    description: "Resolverás problemas que involucren figuras geométricas",
    duration: 15,
    difficulty: "Advanced",
    qCounter: 3,
    questions: [
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Luis quiere medir el perímetro de su cuarto, el cual es un cuadrado y uno de sus lados es de 5 metros. ¿Cuál es el perímetro del cuarto de Luis?",
        },
        qCorrectAnswers: [
          { answer: "20", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Enrique quiere medir el perímetro de su cuarto, el cual es un cuadrado y uno de sus lados es de 4 metros. ¿Cuál es el perímetro del cuarto de Enrique?",
        },
        qCorrectAnswers: [
          { answer: "16", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction:
          "Carlos corre todas las ma~ nanas 2 vueltas alrededor de un parque rectangular cuyas medidas se muestran en la imagen. ¿Cuántos metros corre Carlos?",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/figuras_geometricas/resolucionDeProblemas/Figura1.png",
        },
        qCorrectAnswers: [
          { answer: "140", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction:
          "Karla corre todas las ma~ nanas 3 vueltas alrededor de un parque rectangular cuyas medidas se muestran en la imagen. ¿Cuántos metros corre Karla?",
        qTechnicalInstruction: {
          type: "image",
          imageLink:
            "/exams/figuras_geometricas/resolucionDeProblemas/Figura2.png",
        },
        qCorrectAnswers: [
          { answer: "288", complement: "metros", placement: "right" },
        ],
      },
      {
        qInstruction: "Resuelve el siguiente problema",
        qTechnicalInstruction: {
          type: "text",
          text:
            "Una persona quiere poner una barda de ladrillos en un terreno rectangular que tiene 12 metros de ancho y 18 metros de largo. ¿Cuántos metros de barda tendrá que poner esa persona?",
        },
        qCorrectAnswers: [
          { answer: "60", complement: "metros", placement: "right" },
        ],
      },
    ],
  },
];
