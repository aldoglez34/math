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
          name: "Medalla del tema: Suma",
          link: "/rewards/primaria/3/suma.png",
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
          name: "Medalla del tema: Resta",
          link: "/rewards/primaria/3/resta.png",
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
          name: "Medalla del tema: Multiplicación",
          link: "/rewards/primaria/3/multiplicacion.png",
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
          name: "Medalla del tema: División",
          link: "/rewards/primaria/3/division.png",
        },
        description:
          "La cuarta operación básica de las matemáticas, la división es una operación que reparte objetos e involucra la multiplicación y resta. En esta sección harás divisiones con dividendos de dos o más cifras y divisores de una cifra y resolverás problemas de la vida cotidiana usando esta operación.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_División", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_Fracciones",
        subject: "Aritmética",
        name: "Fracciones",
        reward: {
          name: "Medalla del tema: Fracciones",
          link: "/rewards/primaria/3/fracciones.png",
        },
        description:
          "La fracción es una manera de representar una división y son muy usados en la vida cotidiana. En esta sección clasificarás las fracciones, representarás fracciones usando figuras geométricas y convertirás fracciones mixtas a impropias y viceversa.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_Fracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_OperacionesConFracciones",
        subject: "Aritmética",
        name: "Operaciones con Fracciones",
        reward: {
          name: "Medalla del tema: Operaciones con Fracciones",
          link: "/rewards/primaria/3/operacionesConFracciones.png",
        },
        description:
          "Suma, resta, multiplicación y división son operaciones que también se pueden hacer con fracciones. En esta sección aprenderás hacerlas y resolverás problemas de la vida cotidiana usando fracciones.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_OperacionesConFracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_FigurasGeométricas",
        subject: "Aritmética",
        name: "Figuras Geométricas",
        reward: {
          name: "Medalla del tema: Figuras Geométricas",
          link: "/rewards/primaria/3/figurasGeometricas.png",
        },
        description:
          "Las figuras geométricas son superficies delimitas por líneas que pueden ser curvas o rectas. En esta sección aprenderás el nombre de las figuras, calcularás su perímetro y área y resolverás problemas de la vida cotidiana que involucren a dichas figuras.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_FigurasGeométricas", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_NúmerosDecimales",
        subject: "Aritmética",
        name: "Números Decimales",
        reward: {
          name: "Medalla del tema: Números Decimales",
          link: "/rewards/primaria/3/numerosDecimales.png",
        },
        description:
          "Suma, resta, multiplicación y división con números decimales, son operaciones que aprenderás hacer en esta sección y resolverás problemas de la vida cotidiana usando estos números.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_NúmerosDecimales", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_3_UnidadesDeMedición",
        subject: "Aritmética",
        name: "Unidades de Medición",
        reward: {
          name: "Medalla del tema: Unidades de Medición",
          link: "/rewards/primaria/3/unidadesDeMedicion.png",
        },
        description:
          "Las unidades de medición nos ayudan a saber cuánto vamos a pagar, qué estamos midiendo, cuánto tiempo ha transcurrido, etc. En esta sección aprenderás a leer el reloj, convertirás unidades de tiempo y convertirás unidades de longitud.",
        freestyle: {
          timer: 10,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_3_UnidadesDeMedición", examsArr), // dont forget to give the course code here (manually)
      },
    ],
  },
  {
    name: "Primaria 4to",
    description:
      "Donec eleifend magna eu ante fringilla, mollis dignissim tellus fermentum. Suspendisse in accumsan lectus, eu luctus odio. Proin sed est et quam pellentesque volutpat vitae vel velit. In nunc lacus, pretium in ante sed, elementum iaculis tortor. Aliquam cursus dolor luctus, convallis nulla eu, volutpat est.",
    topics: [
      {
        topicCode: "PRIM_4_SistemaDecimal",
        subject: "Aritmética",
        name: "Sistema Decimal",
        description:
          "El sistema de numeración decimal es un sistema de numeración posicional en las que se usan las potencias del número diez para expresar cualquier número. Este sistema es que el que se usa en la actualidad y esta compuesto por las cifras: 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9. En esta sección aprenderás a identificar la posición y el valor de un número.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_SistemaDecimal", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_Suma",
        subject: "Aritmética",
        name: "Suma",
        description:
          "La primera operación básica de las matemáticas, la suma es una operación que agrupa números o cosas. En esta sección aprenderás a sumar números con y sin acarreos y resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_Suma", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_Restas",
        subject: "Aritmética",
        name: "Restas",
        description:
          "La segunda operación básica de las matemáticas, la resta es una operación que quita objetos. En esta sección aprenderás a restar números con y sin acarreos, harás restas con minuendos múltiplos de 10 y resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_Restas", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_Multiplicaciones",
        subject: "Aritmética",
        name: "Multiplicaciones",
        description:
          "La tercera operación básica de las matemáticas, la multiplicación es una abreviación de una suma, por lo que al igual que la suma, agrupa objetos. En esta sección aprenderás las tablas de multiplicar, harás multiplicaciones con números de dos y tres cifras resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_Multiplicaciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_División",
        subject: "Aritmética",
        name: "División",
        description:
          "La cuarta operación básica de las matemáticas, la división es una operación que reparte objetos e involucra la multiplicación y resta. En esta sección harás divisiones con dividendos de dos o más cifras y divisores de una cifra y resolverás problemas de la vida cotidiana usando esta operación.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_División", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_Fracciones",
        subject: "Aritmética",
        name: "Fracciones",
        description:
          "La fracción es una manera de representar una división y son muy usados en la vida cotidiana. En esta sección clasificarás las fracciones, representarás fracciones usando figuras geométricas y convertirás fracciones mixtas a impropias y viceversa.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_Fracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_SumasYRestasDeFracciones",
        subject: "Aritmética",
        name: "Sumas y Restas de Fracciones",
        description:
          "En esta sección aprenderás a sumar y restar fracciones propias y mixtas con denominadores iguales y resolverás problemas de la vida cotidiana usando estas operaciones.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_SumasYRestasDeFracciones", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_MultiplicaciónYDivisiónDeFracciones",
        subject: "Aritmética",
        name: "Multiplicación y División de Fracciones",
        description:
          "En esta sección aprenderás a multiplicar y dividir fracciones propias y mixtas y resolverás problemas de la vida cotidiana usando estas operaciones.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams(
          "PRIM_4_MultiplicaciónYDivisiónDeFracciones",
          examsArr
        ), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_FigurasGeométricas",
        subject: "Aritmética",
        name: "Figuras Geométricas",
        description:
          "Las figuras geométricas son superficies delimitas por líneas que pueden ser curvas o rectas. En esta sección aprenderás el nombre de las figuras, calcularás su perímetro y área y resolverás problemas de la vida cotidiana que involucren a dichas figuras.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_FigurasGeométricas", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_NúmerosDecimales",
        subject: "Aritmética",
        name: "Números Decimales",
        description:
          "En esta sección aprenderás a comparar entre números decimales, ubicarás estos números en la recta numérica, sumarás y restarás este tipo de números y resolverás problemas de la vida cotidiana con este tipo de números.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_NúmerosDecimales", examsArr), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
        subject: "Aritmética",
        name: "Multiplicación y División con Números Decimales",
        description:
          "En esta sección aprenderás a multiplicar y dividir números decimales por múltiplos de 10, multiplicarás números y dividirás números decimales entre números enteros. Resolverás problemas de la vida cotidiana usando estas operaciones.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams(
          "PRIM_4_MultiplicaciónYDivisiónConNúmerosDecimales",
          examsArr
        ), // dont forget to give the course code here (manually)
      },
      {
        topicCode: "PRIM_4_SistemasDeNumeración",
        subject: "Aritmética",
        name: "Sistemas de Numeración",
        description:
          "En esta sección aprenderás a convertir unidades de tiempo, de longitud y de masa a unidades equivalentes y usarás los números romanos para expresar una cantidad arábiga y viceversa.",
        reward: {
          name: "Lorem ipsum",
          link: "/",
        },
        freestyle: {
          timer: 15,
        },
        material: [
          {
            type: "pdf",
            name: "Morbi hendrerit",
            link: "/",
          },
          {
            type: "pdf",
            name: "Mauris rhoncus",
            link: "/",
          },
          {
            type: "video",
            name: "Aliquam lectus",
            link: "/",
          },
          {
            type: "video",
            name: "Vivamus nisl ante",
            link: "/",
          },
        ],
        exams: insertExams("PRIM_4_SistemasDeNumeración", examsArr), // dont forget to give the course code here (manually)
      },
    ],
  },
];
