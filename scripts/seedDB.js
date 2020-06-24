const mongoose = require("mongoose");
const models = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mathDB";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));

models.Course.remove({})
  .then(() => {
    const coursesData = require("./devdata/coursesData");
    return models.Course.insertMany(coursesData);
  })
  .then((data) => {
    console.log("===================================================");
    console.log("> " + data.length + " courses added");
    return models.Student.remove({});
  })
  .then(() => {
    const studentsData = require("./devdata/studentsData");
    return models.Student.insertMany(studentsData);
  })
  .then((data) => {
    console.log("> " + data.length + " students added");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
