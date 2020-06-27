module.exports = [
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
        exams: [
          {
            name: "Sumas 1",
            description:
              "Curabitur quis sem id ligula dictum gravida sed vel risus. Nulla facilisi. Nullam sagittis viverra consequat. Nunc a commodo nisl, ac tempus risus.",
            level: "Básico",
            duration: 20,
            qCounter: 20,
          },
          {
            name: "Sumas 2",
            description:
              "Sed efficitur varius purus, vitae imperdiet neque tincidunt at. Donec varius elit tortor, nec feugiat ex vestibulum a.",
            level: "Intermedio",
            duration: 20,
            qCounter: 20,
          },
          {
            name: "Sumas 3",
            description:
              "Praesent fringilla laoreet metus ac vestibulum. In non quam vel tortor tempor aliquam eget vel elit. Sed iaculis tempor sem, in eleifend dui lobortis vitae.",
            level: "Avanzado",
            duration: 20,
            qCounter: 20,
          },
        ],
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
      },
    ],
    exams: [
      {
        name: "Sumas 1",
        qNumber: 1,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "10 + 7",
        qCorrectAnswer: "17",
      },
      {
        name: "Sumas 1",
        qNumber: 2,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "14 + 8",
        qCorrectAnswer: "22",
      },
      {
        name: "Sumas 1",
        qNumber: 3,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "16 + 6",
        qCorrectAnswer: "22",
      },
      {
        name: "Sumas 1",
        qNumber: 4,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "17 + 13",
        qCorrectAnswer: "30",
      },
      {
        name: "Sumas 1",
        qNumber: 5,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "14 + 13",
        qCorrectAnswer: "27",
      },
      {
        name: "Sumas 1",
        qNumber: 6,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "17 + 3",
        qCorrectAnswer: "20",
      },
      {
        name: "Sumas 1",
        qNumber: 7,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "11 + 8",
        qCorrectAnswer: "19",
      },
      {
        name: "Sumas 1",
        qNumber: 8,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "20 + 10",
        qCorrectAnswer: "30",
      },
      {
        name: "Sumas 1",
        qNumber: 9,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "16 + 12",
        qCorrectAnswer: "28",
      },
      {
        name: "Sumas 1",
        qNumber: 10,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "7 + 1",
        qCorrectAnswer: "8",
      },
      {
        name: "Sumas 1",
        qNumber: 11,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "12 + 8",
        qCorrectAnswer: "20",
      },
      {
        name: "Sumas 1",
        qNumber: 12,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "19 + 0",
        qCorrectAnswer: "19",
      },
      {
        name: "Sumas 1",
        qNumber: 13,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "17 + 16",
        qCorrectAnswer: "33",
      },
      {
        name: "Sumas 1",
        qNumber: 14,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "13 + 1",
        qCorrectAnswer: "14",
      },
      {
        name: "Sumas 1",
        qNumber: 15,
        qInstruction: "Resuelve la siguiente suma",
        qTechnicalInstruction: "16 + 12",
        qCorrectAnswer: "28",
      },
      {
        name: "Sumas 1",
        qNumber: 16,
        qInstruction:
          "Juan tiene 10 años, mientras que Ana tiene 20 años. ¿Cuántos años suman entre los dos?",
        qCorrectAnswer: "28",
        qCorrectAnswerComplement: "años",
      },
      {
        name: "Sumas 1",
        qNumber: 17,
        qInstruction:
          "Ernesto compró un jugo de 14 pesos y unos chicles de 10 pesos. ¿Cuánto pagó en total?",
        qCorrectAnswer: "24",
        qCorrectAnswerComplement: "pesos",
      },
      {
        name: "Sumas 1",
        qNumber: 18,
        qInstruction:
          "En una granja hay 20 cerdos y 15 vacas. ¿Cuántos animales hay en total en la granja?",
        qCorrectAnswer: "35",
        qCorrectAnswerComplement: "animales",
      },
      {
        name: "Sumas 1",
        qNumber: 19,
        qInstruction:
          "Una urna tiene 12 pelotas amarillas y 20 pelotas rojas. ¿Cuántas pelotas hay en total dentro de la urna?",
        qCorrectAnswer: "22",
        qCorrectAnswerComplement: "pelotas",
      },
      {
        name: "Sumas 1",
        qNumber: 20,
        qInstruction:
          "Enrique comió 7 platanos ayer y 5 platanos hoy. ¿Cuántos plátanos se ha comido?",
        qCorrectAnswer: "12",
        qCorrectAnswerComplement: "plátanos",
      },
      {
        name: "Sumas 2",
        qNumber: 1,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "75 + 68",
        qCorrectAnswer: "143",
      },
      {
        name: "Sumas 2",
        qNumber: 2,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "23 + 20",
        qCorrectAnswer: "43",
      },
      {
        name: "Sumas 2",
        qNumber: 3,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "39 + 10",
        qCorrectAnswer: "49",
      },
      {
        name: "Sumas 2",
        qNumber: 4,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "69 + 65",
        qCorrectAnswer: "134",
      },
      {
        name: "Sumas 2",
        qNumber: 5,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "72 + 66",
        qCorrectAnswer: "138",
      },
      {
        name: "Sumas 2",
        qNumber: 6,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "81 + 30",
        qCorrectAnswer: "111",
      },
      {
        name: "Sumas 2",
        qNumber: 7,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "81 + 67",
        qCorrectAnswer: "148",
      },
      {
        name: "Sumas 2",
        qNumber: 8,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "46 + 39",
        qCorrectAnswer: "85",
      },
      {
        name: "Sumas 2",
        qNumber: 9,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "28 + 27",
        qCorrectAnswer: "55",
      },
      {
        name: "Sumas 2",
        qNumber: 10,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "67 + 1",
        qCorrectAnswer: "68",
      },
      {
        name: "Sumas 2",
        qNumber: 11,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "45 + 16",
        qCorrectAnswer: "61",
      },
      {
        name: "Sumas 2",
        qNumber: 12,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "49 + 24",
        qCorrectAnswer: "73",
      },
      {
        name: "Sumas 2",
        qNumber: 13,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "97 + 76",
        qCorrectAnswer: "173",
      },
      {
        name: "Sumas 2",
        qNumber: 14,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "70 + 24",
        qCorrectAnswer: "94",
      },
      {
        name: "Sumas 2",
        qNumber: 15,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "98 + 95",
        qCorrectAnswer: "193",
      },
      {
        name: "Sumas 2",
        qNumber: 16,
        qInstruction:
          "Alejandra compró un folder de 59 pesos y un juego de plumas de 70 pesos. ¿Cuánto pagó en total por los dos productos?",
        qCorrectAnswer: "129",
        qCorrectAnswerComplement: "pesos",
      },
      {
        name: "Sumas 2",
        qNumber: 17,
        qInstruction:
          "En un salón de clases hay 48 niños y 39 niñas. ¿Cuántos alumnos hay en total en el salón?",
        qCorrectAnswer: "87",
        qCorrectAnswerComplement: "alumnos",
      },
      {
        name: "Sumas 2",
        qNumber: 18,
        qInstruction:
          "En un restaurante, la ensalada cuesta 24 pesos, el plato fuerte 57 pesos y el agua 22 pesos. ¿Cuánto se debe pagar por una comida completa?",
        qCorrectAnswer: "103",
        qCorrectAnswerComplement: "pesos",
      },
      {
        name: "Sumas 2",
        qNumber: 19,
        qInstruction:
          "Juan tiene 39 años, mientras que Ana tiene 47 años. ¿Cuántos años suman entre los dos?",
        qCorrectAnswer: "86",
        qCorrectAnswerComplement: "años",
      },
      {
        name: "Sumas 2",
        qNumber: 20,
        qInstruction:
          "En una urna hay 50 pelotas azules y 36 pelotas rojas. ¿Cuántas pelotas hay en total dentro de la urna?",
        qCorrectAnswer: "86",
        qCorrectAnswerComplement: "pelotas",
      },
      {
        name: "Sumas 3",
        qNumber: 1,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "939 + 57",
        qCorrectAnswer: "996",
      },
      {
        name: "Sumas 3",
        qNumber: 2,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "925 + 465",
        qCorrectAnswer: "1390",
      },
      {
        name: "Sumas 3",
        qNumber: 3,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "901 + 456",
        qCorrectAnswer: "1357",
      },
      {
        name: "Sumas 3",
        qNumber: 4,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "867 + 261",
        qCorrectAnswer: "1128",
      },
      {
        name: "Sumas 3",
        qNumber: 5,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "927 + 750",
        qCorrectAnswer: "1677",
      },
      {
        name: "Sumas 3",
        qNumber: 6,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "331 + 0",
        qCorrectAnswer: "331",
      },
      {
        name: "Sumas 3",
        qNumber: 7,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "114 + 106",
        qCorrectAnswer: "220",
      },
      {
        name: "Sumas 3",
        qNumber: 8,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "996 + 694",
        qCorrectAnswer: "1690",
      },
      {
        name: "Sumas 3",
        qNumber: 9,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "652 + 450",
        qCorrectAnswer: "1102",
      },
      {
        name: "Sumas 3",
        qNumber: 10,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "935 + 707",
        qCorrectAnswer: "1642",
      },
      {
        name: "Sumas 3",
        qNumber: 11,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "569 + 555",
        qCorrectAnswer: "1124",
      },
      {
        name: "Sumas 3",
        qNumber: 12,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "983 + 932",
        qCorrectAnswer: "1915",
      },
      {
        name: "Sumas 3",
        qNumber: 13,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "683 + 392",
        qCorrectAnswer: "1075",
      },
      {
        name: "Sumas 3",
        qNumber: 14,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "974 + 816",
        qCorrectAnswer: "1790",
      },
      {
        name: "Sumas 3",
        qNumber: 15,
        qInstruction: "Resolver la siguiente suma",
        qTechnicalInstruction: "415 + 411",
        qCorrectAnswer: "826",
      },
      {
        name: "Sumas 3",
        qNumber: 16,
        qInstruction:
          "En una escuela hay 834 alumnos de primaria, 772 alumnos de secundaria y 909 alumnos de preparatoria. ¿Cuántos alumnos hay en total en la escuela?",
        qCorrectAnswer: "2515",
        qCorrectAnswerComplement: "alumnos",
      },
      {
        name: "Sumas 3",
        qNumber: 17,
        qInstruction:
          "En una granja hay 386 vacas, 585 cerdos y 450 caballos. ¿Cuántos animales hay en total en la granja?",
        qCorrectAnswer: "1421",
        qCorrectAnswerComplement: "animales",
      },
      {
        name: "Sumas 3",
        qNumber: 18,
        qInstruction:
          "El costo de un pantalón es de 699 pesos y el de una camisa es de 646 pesos. ¿Cuánto se debe pagar por las dos prendas?",
        qCorrectAnswer: "1345",
        qCorrectAnswerComplement: "pesos",
      },
      {
        name: "Sumas 3",
        qNumber: 19,
        qInstruction:
          "En su recorrido, un coche recorre 372 kilómetros en el primer día, mientras que en el segundo recorre 418 kilómetros. ¿Cuántos kilómetros lleva el coche recorridos al finalizar el segundo día?",
        qCorrectAnswer: "790",
        qCorrectAnswerComplement: "kilómetros",
      },
      {
        name: "Sumas 3",
        qNumber: 20,
        qInstruction:
          "Usando los datos de su celular, Diego se gasto el viernes 319 megas y el sábado 373 megas. ¿Cuántos megas se gastó en esos dos días?",
        qCorrectAnswer: "692",
        qCorrectAnswerComplement: "megas",
      },
    ],
  },
];
