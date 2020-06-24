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

// getMyCourses()
// matches with /api/student/getCourses/:coursesArr
router.get("/getCourses/:coursesStr", function (req, res) {
  // getting all the courses on a string
  const coursesStr = req.params.coursesStr;
  console.log("coursesStr", coursesStr);

  model.Student.find({ firebaseUID: req.params.uid })
    .then((data) => res.json(data[0]))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
