const insertExams = (topicCode, examsArr) => {
  return examsArr.reduce((acc, cv) => {
    if (cv.topicCode == topicCode) {
      acc.push(cv.examId);
    }
    return acc;
  }, []);
};

module.exports = (examsArr) => [
  {
    name: "Primaria 3ro y 4to",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius risus massa, et sollicitudin est fringilla hendrerit. Etiam luctus blandit dolor, vitae tristique elit convallis in. Quisque eleifend consectetur velit id ultrices.",
    longDescription:
      "Quisque eget posuere lacus, in posuere risus. Curabitur semper fermentum dolor. Integer imperdiet, lectus eu suscipit rutrum, felis nisi vestibulum turpis, vel dictum magna odio sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquam justo vel lacus ultricies iaculis.",
    topics: [
      {
        topicCode: "PRIM3y4_Suma",
        subject: "Aritmética",
        name: "Suma",
        description:
          "Quisque eget posuere lacus, in posuere risus. Curabitur semper fermentum dolor. Integer imperdiet, lectus eu suscipit rutrum, felis nisi vestibulum turpis, vel dictum magna odio sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris aliquam justo vel lacus ultricies iaculis.",
        reward: "/rewards/sumaMedal.png",
        toLearn: [
          "Identificar los elementos y propiedades de la suma",
          "Resolver problemas usando la suma",
        ],
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Introducción sumas",
            link: "/pdf/suma/SumasIntro.pdf",
          },
          {
            type: "pdf",
            name: "Sumas (Ejemplos)",
            link: "/pdf/suma/Sumas.pdf",
          },
          {
            type: "video",
            name: "Introducción a la suma",
            link: "https://youtu.be/UFclruOiQRg",
          },
        ],
        exams: insertExams("PRIM3y4_Suma", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM3y4_Resta",
        subject: "Aritmética",
        name: "Resta",
        description:
          "Sed lacinia lacus non laoreet pulvinar. Maecenas tincidunt suscipit tortor non vehicula. Ut dolor felis, rutrum non tempus nec, pulvinar in neque. Donec facilisis nunc lacinia libero laoreet, et volutpat felis convallis. Nunc sollicitudin, leo at laoreet faucibus.",
        reward: "/rewards/restaMedal.png",
        toLearn: [
          "Identificar los elementos y propiedades de la resta",
          "Resolver problemas usando la resta",
        ],
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Introducción a la resta",
            link: "/pdf/resta/restasIntro.pdf",
          },
          {
            type: "pdf",
            name: "Restas (Ejemplos)",
            link: "/pdf/resta/Restas.pdf",
          },
          {
            type: "video",
            name: "Restas con números enteros",
            link: "https://youtu.be/a49HIq6I4PU",
          },
          {
            type: "video",
            name: "Comprobación de la resta",
            link: "https://youtu.be/FiTOOjrBZTc",
          },
        ],
        exams: insertExams("PRIM3y4_Resta", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM3y4_Multi",
        subject: "Aritmética",
        name: "Multiplicación",
        reward: "/rewards/multiplicaciónMedal.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus urna, interdum sit amet libero eu, viverra dignissim lacus. Donec malesuada iaculis nunc sollicitudin ornare.",
        toLearn: [
          "Identificar los elementos y propiedades de la multiplicación",
          "Resolver problemas usando la multiplicación",
        ],
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Introducción a la multiplicación",
            link: "/pdf/multi/MultiIntro.pdf",
          },
          {
            type: "pdf",
            name: "Multiplicaciones (Ejemplos)",
            link: "/pdf/multi/Multiplicaciones.pdf",
          },
          {
            type: "video",
            name: "Multiplicaciones con números enteros",
            link: "https://youtu.be/suU4_TB6S_Q",
          },
        ],
        exams: insertExams("PRIM3y4_Multi", examsArr), // dont forget to give the course code here (manually)
      },
    ],
  },
];
