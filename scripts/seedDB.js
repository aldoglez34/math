const mongoose = require("mongoose");
const models = require("../models");

// database conection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mathDB";
mongoose
  .connect(MONGODB_URI, {
    // autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));

//============================================================
//============================================================
//============================================================
var examsArr = [];
models.Exam.remove({})
  .then(() => {
    const examsData = require("./examsData");
    return models.Exam.insertMany(examsData);
  })
  .then((exams) => {
    console.log("\n> " + exams.length + " exams added");

    // getting topics, ids and subjects
    examsArr = exams.reduce((acc, cv) => {
      acc.push({
        topicCode: cv.topicCode,
        difficulty: cv.difficulty,
        examId: cv._id,
      });
      return acc;
    }, []);

    // remove courses
    models.Course.remove({});

    // prepare courses data
    const createCoursesDataFn = require("./devData/createCoursesDataFn");
    const coursesData = createCoursesDataFn(examsArr);

    return models.Course.insertMany(coursesData);
  })
  .then((courses) => {
    console.log("> " + courses.length + " courses added");

    // separating ids only
    let coursesIds = courses.reduce((acc, cv) => {
      acc.push(cv._id);
      return acc;
    }, []);

    // remove students
    models.Student.remove({});

    // prepare student data
    const createStudentsDataFn = require("./devData/createStudentsDataFn");
    const studentData = createStudentsDataFn(coursesIds, examsArr);

    return models.Student.insertMany(studentData);
  })
  .then((students) => {
    console.log("> " + students.length + " students added");

    console.log("\nfinishing process...");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
