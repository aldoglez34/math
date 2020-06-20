const models = require("../../models");
const insertStudents = require("./insertStudents");

module.exports = () => {
  const courses = [
    {
      courseCode: "primaria1",
      content: [
        {
          qNumber: 1,
          qInstruction: "Suma los siguientes números",
          qTechnicalInstruction: "3 + 3 =",
          qCorrectAnswer: "6",
        },
        {
          qNumber: 2,
          qInstruction: "Suma los siguientes números",
          qTechnicalInstruction: "5 + 4 =",
          qCorrectAnswer: "9",
        },
        {
          qNumber: 3,
          qInstruction: "Suma los siguientes números",
          qTechnicalInstruction: "3 + 3 + 8 =",
          qCorrectAnswer: "14",
        },
        {
          qNumber: 4,
          qInstruction: "Suma los siguientes números",
          qTechnicalInstruction: "15 + 17 =",
          qCorrectAnswer: "32",
        },
      ],
    },
    {
      courseCode: "primaria2",
      content: [
        {
          qNumber: 1,
          qInstruction: "Resta los siguientes números",
          qTechnicalInstruction: "3 - 3 =",
          qCorrectAnswer: "0",
        },
        {
          qNumber: 2,
          qInstruction: "Resta los siguientes números",
          qTechnicalInstruction: "5 - 4 =",
          qCorrectAnswer: "1",
        },
        {
          qNumber: 3,
          qInstruction: "Resta los siguientes números",
          qTechnicalInstruction: "3 - 3 - 8 =",
          qCorrectAnswer: "-8",
        },
        {
          qNumber: 4,
          qInstruction: "Resta los siguientes números",
          qTechnicalInstruction: "15 - 17 =",
          qCorrectAnswer: "-2",
        },
      ],
    },
  ];

  return models.Course.remove({})
    .then(() => {
      return models.Course.insertMany(courses);
    })
    .then((data) => {
      console.log("==================================");
      console.log("> " + data.length + " courses added");
      let coursesIds = data.reduce((acc, cv) => {
        acc.push(cv._id);
        return acc;
      }, []);
      // insert students
      insertStudents(coursesIds);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
