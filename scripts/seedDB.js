const mongoose = require("mongoose");
const models = require("../models");

// database conection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mathDB";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));

// inserting data
models.Exam.remove({})
  .then(() => {
    const examsData = require("./devdata/examsData");
    return models.Exam.insertMany(examsData);
  })
  .then((data) => {
    console.log("\n> " + data.length + " exams added");
    // separating ids only
    let examsIds = data.reduce((acc, cv) => {
      acc.push({ topicCode: cv.topicCode, examId: cv._id });
      return acc;
    }, []);
    // remove courses
    models.Course.remove({});
    // prepare courses data
    const createCoursesDataFn = require("./devdata/createCoursesDataFn");
    const coursesData = createCoursesDataFn(examsIds);

    return models.Course.insertMany(coursesData);
  })
  .then((data) => {
    console.log("> " + data.length + " courses added");
    return models.Student.remove({});
  })
  .then(() => {
    const studentsData = require("./devdata/studentsData");
    return models.Student.insertMany(studentsData);
  })
  .then((data) => {
    console.log("> " + data.length + " students added");

    console.log("\nfinishing process...");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// models.Student.remove({})
//   .then(() => {
//     const studentsData = require("./devdata/studentsData");
//     return models.Student.insertMany(studentsData);
//   })
//   .then((data) => {
//     console.log("===================================================");
//     console.log("> " + data.length + " students added");
//     return models.PRIM3y4.remove({});
//   })
//   .then(() => {
//     const PRIM3y4Data = require("./devdata/PRIM3y4Data");
//     return models.PRIM3y4.insertMany(PRIM3y4Data);
//   })
//   .then((data) => {
//     console.log("> " + data.length + " rows added for PRIM3y4");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });
