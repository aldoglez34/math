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
    name: "Primaria 3ro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius risus massa, et sollicitudin est fringilla hendrerit. Etiam luctus blandit dolor, vitae tristique elit convallis in. Quisque eleifend consectetur velit id ultrices.",
    topics: [
      {
        topicCode: "PRIM_3_Suma",
        subject: "Aritmética",
        name: "Suma",
        description:
          "La primera operación básica de las matemáticas, la suma es una operación que agrupa números o cosas. En esta sección aprenderás a sumar números con y sin acarreos y resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Medalla de Suma",
          link: "/rewards/sumaMedal.png",
        },
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
        exams: insertExams("PRIM_3_Suma", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_Resta",
        subject: "Aritmética",
        name: "Resta",
        description:
          "La segunda operación básica de las matemáticas, la resta es una operación que quita objetos. En esta sección aprenderás a restar números con y sin acarreos, harás restas con minuendos múltiplos de 10 y resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Medalla de Resta",
          link: "/rewards/restaMedal.png",
        },
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
        exams: insertExams("PRIM_3_Resta", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_Multiplicación",
        subject: "Aritmética",
        name: "Multiplicación",
        reward: {
          name: "Medalla de Multiplicación",
          link: "/rewards/multiplicacionMedal.png",
        },
        description:
          "La tercera operación básica de las matemáticas, la multiplicación es una abreviación de una suma, por lo que al igual que la suma, agrupa objetos. En esta sección aprenderás las tablas de multiplicar, harás multiplicaciones con números de dos y tres cifras resolverás problemas de la vida cotidiana usando esta operación.",
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
        exams: insertExams("PRIM_3_Multiplicación", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_División",
        subject: "Aritmética",
        name: "División",
        reward: {
          name: "Medalla de División",
          link: "/rewards/divisionMedal.png",
        },
        description:
          "La cuarta operación básica de las matemáticas, la división es una operación que reparte objetos e involucra la multiplicación y resta. En esta sección harás divisiones con dividendos de dos o más cifras y divisores de una cifra y resolverás problemas de la vida cotidiana usando esta operación.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_División", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_Fracciones",
        subject: "Aritmética",
        name: "Fracciones",
        reward: {
          name: "Medalla de Fracciones",
          link: "/rewards/fraccionesMedal.png",
        },
        description:
          "La fracción es una manera de representar una división y son muy usados en la vida cotidiana. En esta sección clasificarás las fracciones, representarás fracciones usando figuras geométricas y convertirás fracciones mixtas a impropias y viceversa.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_Fracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_OperacionesConFracciones",
        subject: "Aritmética",
        name: "Operaciones con Fracciones",
        reward: {
          name: "Medalla de Operaciones con Fracciones",
          link: "/rewards/operacionesConFraccMedal.png",
        },
        description:
          "Suma, resta, multiplicación y división son operaciones que también se pueden hacer con fracciones. En esta sección aprenderás hacerlas y resolverás problemas de la vida cotidiana usando fracciones.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_OperacionesConFracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_FigurasGeometricas",
        subject: "Aritmética",
        name: "Figuras Geométricas",
        reward: {
          name: "Medalla de Figuras Geométricas",
          link: "/rewards/figurasGeometricasMedal.png",
        },
        description:
          "Las figuras geométricas son superficies delimitas por líneas que pueden ser curvas o rectas. En esta sección aprenderás el nombre de las figuras, calcularás su perímetro y área y resolverás problemas de la vida cotidiana que involucren a dichas figuras.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_FigurasGeometricas", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_NúmerosDecimales",
        subject: "Aritmética",
        name: "Números Decimales",
        reward: {
          name: "Medalla de Números Decimales",
          link: "/rewards/numerosDecimalesMedal.png",
        },
        description:
          "Suma, resta, multiplicación y división con números decimales, son operaciones que aprenderás hacer en esta sección y resolverás problemas de la vida cotidiana usando estos números.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_NúmerosDecimales", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_UnidadesDeMedición",
        subject: "Aritmética",
        name: "Unidades de Medición",
        reward: {
          name: "Medalla de Unidades de Medición",
          link: "/rewards/unidadesDeMedicion.png",
        },
        description:
          "Las unidades de medición nos ayudan a saber cuánto vamos a pagar, qué estamos midiendo, cuánto tiempo ha transcurrido, etc. En esta sección aprenderás a leer el reloj, convertirás unidades de tiempo y convertirás unidades de longitud.",
        freestyle: {
          timer: 10,
        },
        material: [],
        exams: insertExams("PRIM_3_UnidadesDeMedición", examsArr), // dont forget to give the course code here (manually)
      },
    ],
  },
];
