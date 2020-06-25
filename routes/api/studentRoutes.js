const router = require("express").Router();
const model = require("../../models");

// registerNewStudent()
// matches with /api/student/new
router.post("/new", function (req, res) {
  model.Student.create({
    firebaseUID: req.body.firebaseUID,
    name: req.body.name,
    firstSurname: req.body.firstSurname,
    secondSurname: req.body.secondSurname,
    email: req.body.email,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchStudentByUID()
// matches with /api/student/fetchByUID/:uid
router.get("/fetchByUID/:uid", function (req, res) {
  model.Student.find({ firebaseUID: req.params.uid })
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// buyCourse()
// matches with /api/student/buyCourse
router.put("/buyCourse", function (req, res) {
  const { studentId, course } = req.body;

  model.Student.findByIdAndUpdate(
    studentId,
    { $push: { courses: course } },
    { new: true } // returns the new document
  )
    .then((data) => {
      // console.log(data);

      res.send("OK");
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchMyCourses()
// matches with /api/student/fetchCourses/:studentId
router.get("/fetchCourses/:studentId", function (req, res) {
  const studentId = req.params.studentId;

  const mongoose = require("mongoose");

  // first, get all the courses the student has
  model.Student.findById(studentId)
    .select("courses")
    .then((data) => {
      let myCourses = [];
      // if the student has courses, retrieve the info,
      // if not, retrieve an empty array
      if (data.courses.length) {
        let fetchAllCourses = new Promise((resolve, reject) => {
          data.courses.forEach((value, index, array) => {
            // get the info from the course dinamically
            mongoose
              .model(value)
              .find()
              .select("code name shortDescription topics")
              .then((data) => {
                myCourses.push(data[0]);
                if (index === array.length - 1) resolve(); // this is when the promise "ends" and calls the "then"
              })
              .catch((err) => {
                console.log("@error", err);
                res
                  .status(422)
                  .send("Ocurrió un error inesperado en el servidor");
              });
          });
        });
        fetchAllCourses
          .then(() => {
            // this is gonna be executed when I calll "resolve"
            console.log("all done!");
            res.json(myCourses);
          })
          .catch((err) => {
            console.log("@error", err);
            res.status(422).send("Ocurrió un error inesperado en el servidor");
          });
      } else {
        res.json(data.courses);
      }
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchCourseInfo()
// matches with /api/student/fetchCourseInfo/:code
router.get("/fetchCourseInfo/:code", function (req, res) {
  const code = req.params.code;

  // search in the collection dinamically
  const mongoose = require("mongoose");
  mongoose
    .model(code)
    .find()
    .select("code name longDescription topics material")
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send("Ocurrió un error");
    });
});

module.exports = router;
