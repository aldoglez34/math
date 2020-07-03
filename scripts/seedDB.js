const mongoose = require("mongoose");
const models = require("../models");
const { model } = require("../models/Exam");

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
models.Student.remove({})
  .then(() => {
    const studentsData = require("./devdata/studentsData");
    return models.Student.insertMany(studentsData);
  })
  .then((data) => {
    console.log("\n> " + data.length + " students added");
    // separating ids only
    let studentIds = data.reduce((acc, cv) => {
      acc.push({ _id: cv._id });
      return acc;
    }, []);
    // remove exams
    models.Exam.remove({});
    // prepare exams data
    const createExamsData = require("./examsData/createExamsData");
    const examsData = createExamsData(studentIds);

    return models.Exam.insertMany(examsData);
  })
  .then((data) => {
    console.log("> " + data.length + " exams added");
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

    console.log("\nfinishing process...");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
