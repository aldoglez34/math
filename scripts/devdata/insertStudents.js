const models = require("../../models");

module.exports = (coursesIds) => {
  const students = [
    {
      firebaseUID: "GJ8odBBzGHgKtA45uC6luESZM1g2",
      name: "Luis",
      firstSurname: "López",
      secondSurname: "Utrera",
      email: "lrlu.very@gmail.com",
      courses: [coursesIds[0]],
    },
    {
      firebaseUID: "G4mcLYFVuVPfgBlDP5zYbm54anm1",
      name: "Aldo",
      firstSurname: "Solano",
      secondSurname: "González",
      email: "aldoglez34@gmail.com",
      courses: [coursesIds[1]],
    },
  ];

  return models.Student.remove({})
    .then(() => {
      return models.Student.insertMany(students);
    })
    .then((data) => {
      console.log("> " + data.length + " students added");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
