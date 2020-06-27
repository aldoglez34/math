const insertExams = (courseCode, examsIds) => {
  return examsIds.reduce((acc, cv) => {
    if (cv.courseCode == courseCode) {
      acc.push(cv.examId);
    }
    return acc;
  }, []);
};

module.exports = (examsIds) => [
  {
    code: "PRIM3y4",
    name: "Primaria 3ro y 4to",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius risus massa, et sollicitudin est fringilla hendrerit. Etiam luctus blandit dolor, vitae tristique elit convallis in. Quisque eleifend consectetur velit id ultrices.",
    longDescription:
      "Quisque eget posuere lacus, in posuere risus. Curabitur semper fermentum dolor. Integer imperdiet, lectus eu suscipit rutrum, felis nisi vestibulum turpis, vel dictum magna odio sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquam justo vel lacus ultricies iaculis.",
    topics: [
      {
        subject: "Aritmética",
        name: "Suma",
        description:
          "Quisque eget posuere lacus, in posuere risus. Curabitur semper fermentum dolor. Integer imperdiet, lectus eu suscipit rutrum, felis nisi vestibulum turpis, vel dictum magna odio sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquam justo vel lacus ultricies iaculis.",
        toLearn: [
          "Identificar los elementos y propiedades de la suma",
          "Resolver problemas usando la suma",
        ],
        material: [
          {
            type: "pdf",
            name: "Introducción sumas",
            link: "/pdf/sum/SumasIntro.pdf",
          },
          {
            type: "pdf",
            subject: "Aritmética",
            name: "Sumas (Ejemplos)",
            link: "/pdf/sum/Sumas.pdf",
          },
          {
            type: "video",
            name: "Introducción a la suma",
            link: "https://youtu.be/UFclruOiQRg",
          },
        ],
        exams: insertExams("PRIM3y4", examsIds), // dont forget to give the course code here (manually)
      },
    ],
  },
];
