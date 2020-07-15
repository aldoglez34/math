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
      // qText ========================================================
      {
        qType: "qText",
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "10 + 7",
        qCorrectAnswers: ["17"],
        qComment: "sólo  una prueba",
      },
      {
        qType: "qText",
        qInstruction: "Escribe 3 en el primer input y 5 en el segundo",
        qCorrectAnswers: ["3", "5"],
      },
      {
        qType: "qText",
        qInstruction:
          "Escribe 45 en el primer input y 2 en el segundo y 77 en el tercero",
        qCorrectAnswers: ["45", "2", "77"],
      },
      // qImage ========================================================
      {
        qType: "qImage",
        qInstruction: "Resuelve la siguiente suma",
        qImgLink: "/exams/suma/suma1.png",
        qCorrectAnswers: ["14"],
        qComment: "sólo  una prueba",
      },
      {
        qType: "qImage",
        qInstruction: "Escribe los números que se muestran en la imagen",
        qImgLink: "/exams/suma/suma2.png",
        qCorrectAnswers: ["45", "7"],
      },
      {
        qType: "qImage",
        qInstruction: "Escribe los números que se muestran en la imagen",
        qImgLink: "/exams/suma/suma3.png",
        qCorrectAnswers: ["11", "8", "34"],
        qComment: "sólo  una prueba",
      },
      // qMultipleChoiceText ========================================================
      {
        qType: "qMultipleChoiceText",
        qInstruction: "¿Cuánto es 5 + 8? Elige la respuesta correcta",
        qPossibleAnswers: ["12", "13", "14", "15"],
        qCorrectAnswers: ["13"],
      },
      {
        qType: "qMultipleChoiceText",
        qInstruction: "¿Cuánto es 5 + 8? Elige la respuesta correcta",
        qPossibleAnswers: ["12", "13", "14", "15"],
        qCorrectAnswers: ["13"],
      },
      // qMultipleChoiceImage ========================================================
      {
        qType: "qMultipleChoiceImage",
        qImgLink: "link",
        qPossibleAnswers: ["link1", "link2", "link3", "link4"],
        qCorrectAnswers: ["link3"],
        qComment: "sólo  una prueba",
      },
      {
        qType: "qMultipleChoiceImage",
        qImgLink: "link",
        qPossibleAnswers: ["link1", "link2", "link3", "link4"],
        qCorrectAnswers: ["link1"],
      },
    ],
  },
];
